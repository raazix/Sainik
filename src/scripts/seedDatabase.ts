import mongoose from 'mongoose';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jawansethu');

    // Clear existing data
    await User.deleteMany({});

    // Create sample users
    const users = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        userType: 'veteran',
        role: 'Captain',
        branch: 'Army',
        service: '15 years',
        physicalStatus: 'Fit',
        education: 'B.Tech',
        skills: ['Leadership', 'Strategic Planning'],
        achievements: ['Gallantry Award'],
        certifications: ['Military Training'],
        languages: ['English', 'Hindi'],
        location: 'Delhi',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123',
        userType: 'employer',
        company: 'Tech Corp',
        position: 'HR Manager',
        education: 'MBA',
        skills: ['Recruitment', 'HR Management'],
        location: 'Mumbai',
      },
    ];

    await User.insertMany(users);

    console.log('Database seeded successfully');
    process.exit();
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase(); 