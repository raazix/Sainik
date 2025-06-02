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
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
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
      skills,
      achievements,
      certifications,
      languages,
      location,
    }) as IUser;

    if (user) {
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
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

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