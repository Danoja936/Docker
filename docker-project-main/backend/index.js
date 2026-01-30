// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './user.js';

const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/database';

mongoose.connect(mongoUri)
  .then(() => console.log('✅ Successfully connected to MongoDB'))
  .catch(err => {
    console.error('❌ Connection error', err);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

// signup route
app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' });
    }

    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'Sign up successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error signing up');
  }
});

// signin route
app.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (user) {
      res.json({ message: 'Sign in successful', user });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error signing in');
  }
});

// GET all users
app.get('/', async (req, res) => {
  try {
    const users = await User.find({}); // exclude passwords for security
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
});



app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
