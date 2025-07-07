import mongoose from 'mongoose';

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.USERS_MONGODB_URI));
    return conn;
  } catch (e) {
    throw new Error(e);
  }
}
