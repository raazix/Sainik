import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';
import { Types } from 'mongoose';

// Generate JWT Token
const generateToken = (id: Types.ObjectId) => {
  return jwt.sign({ id: id.toString() }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response) => {
  try {
    console.log('Registration request received:', {
      ...req.body,
      password: '[REDACTED]',
      confirmPassword: '[REDACTED]'
    });

    const {
      name,
      email,
      password,
      userType,
      role,
      branch,
      service,
      company,
      position,
      physicalStatus,
      education,
      skills,
      achievements,
      certifications,
      languages,
      location,
    } = req.body;

    // Check if user exists
    console.log('Checking if user exists with email:', email);
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('User already exists with email:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    console.log('Creating new user with data:', {
      name,
      email,
      userType,
      role,
      branch,
      service,
      company,
      position,
      physicalStatus,
      education,
      skills,
      achievements,
      certifications,
      languages,
      location
    });

    const user = await User.create({
      name,
      email,
      password,
      userType,
      role,
      branch,
      service,
      company,
      position,
      physicalStatus,
      education,
      skills: Array.isArray(skills) ? skills : skills?.split(',').map(s => s.trim()),
      achievements: Array.isArray(achievements) ? achievements : achievements?.split(',').map(a => a.trim()),
      certifications: Array.isArray(certifications) ? certifications : certifications?.split(',').map(c => c.trim()),
      languages: Array.isArray(languages) ? languages : languages?.split(',').map(l => l.trim()),
      location,
    }) as IUser;

    if (user) {
      console.log('User created successfully:', user._id);
      const token = generateToken(user._id);
      console.log('Generated token for user');

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        role: user.role,
        branch: user.branch,
        service: user.service,
        company: user.company,
        position: user.position,
        physicalStatus: user.physicalStatus,
        education: user.education,
        skills: user.skills,
        achievements: user.achievements,
        certifications: user.certifications,
        languages: user.languages,
        location: user.location,
        token: token,
      });
    } else {
      console.error('Failed to create user - no user object returned');
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error: any) {
    console.error('Registration error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code,
      errors: error.errors
    });

    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ 
        message: 'Validation error', 
        details: validationErrors 
      });
    }

    res.status(500).json({ message: error.message || 'Error registering user' });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, userType } = req.body;

    // Check for user email
    const user = await User.findOne({ email }).select('+password') as IUser;
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Validate user type
    if (userType && user.userType !== userType) {
      return res.status(401).json({ message: 'Invalid user type' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      role: user.role,
      branch: user.branch,
      service: user.service,
      company: user.company,
      position: user.position,
      physicalStatus: user.physicalStatus,
      education: user.education,
      skills: user.skills,
      achievements: user.achievements,
      certifications: user.certifications,
      languages: user.languages,
      location: user.location,
      token: generateToken(user._id),
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id) as IUser;

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        role: user.role,
        branch: user.branch,
        service: user.service,
        company: user.company,
        position: user.position,
        physicalStatus: user.physicalStatus,
        education: user.education,
        skills: user.skills,
        achievements: user.achievements,
        certifications: user.certifications,
        languages: user.languages,
        location: user.location,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user._id;
    console.log('Updating profile for user:', userId);
    console.log('Update data received:', req.body);

    const updateData = {
      name: req.body.name,
      branch: req.body.branch,
      service: req.body.service,
      company: req.body.company,
      position: req.body.position,
      physicalStatus: req.body.physicalStatus,
      education: req.body.education,
      skills: req.body.skills,
      achievements: req.body.achievements,
      certifications: req.body.certifications,
      languages: req.body.languages,
      location: req.body.location,
    };

    // Remove undefined fields
    Object.keys(updateData).forEach(key => 
      updateData[key] === undefined && delete updateData[key]
    );

    console.log('Processed update data:', updateData);

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!user) {
      console.log('User not found:', userId);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Profile updated successfully:', user);
    res.json(user);
  } catch (error: any) {
    console.error('Profile update error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error',
        details: Object.values(error.errors).map((err: any) => err.message)
      });
    }
    
    res.status(500).json({ message: error.message || 'Error updating profile' });
  }
}; 