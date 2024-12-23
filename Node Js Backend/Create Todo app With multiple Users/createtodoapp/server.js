import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs' 
import mongoose from 'mongoose'
import User from './src/lib/models/UserModal.js'
import jwt from 'jsonwebtoken';

const app = express()
const port = 4000

mongoose.connect('mongodb+srv://hassnainabbasin187:1412@apis.grbet.mongodb.net/practiceWork')
.then(()=>{
    console.log("Db is Connected")
})
.catch((e)=>{
 console.log(e)
})
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!');
});
const JWT_SECRET = "XvU3$hGpP7z8@Ae$M4Hj2vGt9ZqT!wK6"

app.post('/api/data',express.json(), async(req, res) => {
    const { username, email, password } = req.body;

    console.log('User data received:', { username, email, password });
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    
  const newUser = new User({ username, email, password: hashedPassword });
 
        await newUser.save()

        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: "User registered successfully", token });
    
    } catch (error) {
        console.log(error)
    }
});
 

app.get('/api', (req, res) => {
    res.json({ message: "This is an API endpoint" });
});


app.listen(port,() =>{
    console.log(`Server is Running http://localhost:${port}`)
})