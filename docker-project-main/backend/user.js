// user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// 3rd argument forces collection name to be 'user' instead of 'users'
const User = mongoose.model('User', userSchema, 'user');

export default User;
