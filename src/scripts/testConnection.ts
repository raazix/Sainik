import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jawansethu');
    console.log('Successfully connected to MongoDB!');
    console.log(`Host: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
    
    // List all collections
    if (conn.connection.db) {
      const collections = await conn.connection.db.listCollections().toArray();
      console.log('\nCollections in database:');
      collections.forEach(collection => {
        console.log(`- ${collection.name}`);
      });
    }

    await mongoose.connection.close();
    console.log('\nConnection closed successfully');
    process.exit(0);
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

testConnection(); 