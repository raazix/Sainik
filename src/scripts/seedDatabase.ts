import mongoose from 'mongoose';
import { User } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const veteranData = [
  {
    name: 'Major Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    password: 'password123',
    userType: 'veteran',
    branch: 'Indian Army',
    service: '15 years',
    role: 'Infantry Officer'
  },
  {
    name: 'Squadron Leader Priya Sharma',
    email: 'priya.sharma@example.com',
    password: 'password123',
    userType: 'veteran',
    branch: 'Indian Air Force',
    service: '12 years',
    role: 'Technical Officer'
  },
  {
    name: 'Captain Amit Singh',
    email: 'amit.singh@example.com',
    password: 'password123',
    userType: 'veteran',
    branch: 'Indian Navy',
    service: '10 years',
    role: 'Naval Officer'
  },
  {
    name: 'Colonel Sunil Verma',
    email: 'sunil.verma@example.com',
    password: 'password123',
    userType: 'veteran',
    branch: 'Indian Army',
    service: '20 years',
    role: 'Artillery Officer'
  },
  {
    name: 'Wing Commander Neha Patel',
    email: 'neha.patel@example.com',
    password: 'password123',
    userType: 'veteran',
    branch: 'Indian Air Force',
    service: '14 years',
    role: 'Fighter Pilot'
  }
];

const employerData = [
  {
    name: 'Rahul Gupta',
    email: 'rahul.gupta@techcorp.com',
    password: 'password123',
    userType: 'employer',
    company: 'TechCorp India',
    position: 'HR Manager'
  },
  {
    name: 'Anita Desai',
    email: 'anita.desai@secureguard.com',
    password: 'password123',
    userType: 'employer',
    company: 'SecureGuard Solutions',
    position: 'Recruitment Head'
  },
  {
    name: 'Vikram Malhotra',
    email: 'vikram.malhotra@logiflow.com',
    password: 'password123',
    userType: 'employer',
    company: 'LogiFlow Systems',
    position: 'Operations Director'
  },
  {
    name: 'Meera Kapoor',
    email: 'meera.kapoor@defensecorp.com',
    password: 'password123',
    userType: 'employer',
    company: 'DefenseCorp Technologies',
    position: 'Talent Acquisition Manager'
  },
  {
    name: 'Arjun Reddy',
    email: 'arjun.reddy@militarytech.com',
    password: 'password123',
    userType: 'employer',
    company: 'MilitaryTech Solutions',
    position: 'HR Director'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sainik_db');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    console.log('Cleared existing data');

    // Insert veteran data
    await User.insertMany(veteranData);
    console.log('Inserted veteran data');

    // Insert employer data
    await User.insertMany(employerData);
    console.log('Inserted employer data');

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 