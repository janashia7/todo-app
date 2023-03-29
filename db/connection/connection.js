import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Successful database connection.');
  } catch (error) {
    console.error('Connection error:', error.message);
    throw new Error(
      'Connection error has occurred when trying to connect to the database!'
    );
  }
};

export default dbConnection;
