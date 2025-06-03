import mongoose, { Document, Schema, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: string;
  userType: 'veteran' | 'employer';
  branch?: string;
  service?: string;
  company?: string;
  position?: string;
  physicalStatus?: string;
  skills?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
  location?: string;
  createdAt: Date;
  updatedAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ['veteran', 'employer', 'admin'],
      default: 'veteran',
    },
    userType: {
      type: String,
      required: [true, 'Please specify user type'],
      enum: ['veteran', 'employer'],
    },
    branch: {
      type: String,
      required: function(this: IUser) {
        return this.userType === 'veteran';
      }
    },
    service: {
      type: String,
      required: function(this: IUser) {
        return this.userType === 'veteran';
      }
    },
    company: {
      type: String,
      required: function(this: IUser) {
        return this.userType === 'employer';
      }
    },
    position: {
      type: String,
      required: function(this: IUser) {
        return this.userType === 'employer';
      }
    },
    physicalStatus: String,
    skills: {
      type: [String],
      required: function(this: IUser) {
        return this.userType === 'veteran';
      }
    },
    achievements: [String],
    certifications: [String],
    languages: [String],
    location: String,
  },
  {
    timestamps: true,
  }
);

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User; 