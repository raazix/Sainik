import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  userType: 'veteran' | 'employer';
  branch?: string;
  service?: string;
  role?: string;
  company?: string;
  position?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

interface IUserDocument extends IUser {
  userType: 'veteran' | 'employer';
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  userType: {
    type: String,
    required: true,
    enum: ['veteran', 'employer']
  },
  // Veteran specific fields
  branch: {
    type: String,
    required: function(this: IUserDocument) { return this.userType === 'veteran'; }
  },
  service: {
    type: String,
    required: function(this: IUserDocument) { return this.userType === 'veteran'; }
  },
  role: {
    type: String,
    required: function(this: IUserDocument) { return this.userType === 'veteran'; }
  },
  // Employer specific fields
  company: {
    type: String,
    required: function(this: IUserDocument) { return this.userType === 'employer'; }
  },
  position: {
    type: String,
    required: function(this: IUserDocument) { return this.userType === 'employer'; }
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema); 