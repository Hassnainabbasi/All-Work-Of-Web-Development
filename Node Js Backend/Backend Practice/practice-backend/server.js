import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './src/lib/models/UserModal.js';

const app = express();
const port = 5000;

app.use(cors());

mongoose.connect('mongodb+srv://hassnainabbasin187:1412@apis.grbet.mongodb.net/Smit')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

app.use(bodyParser.json());

app.post('/api/signup', async(req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({username,email,password})

   await newUser.save()
   res.json({ message: 'User signed up successfully!' });

  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Error signing up user' });
  
  }

 });
app.get('/api/signup', async(req,res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users' });
      }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});