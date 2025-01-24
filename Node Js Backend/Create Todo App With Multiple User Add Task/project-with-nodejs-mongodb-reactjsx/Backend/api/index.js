import express from 'express'
import morgan from 'morgan'
import userRoutes from './router/user.js'
import taskRoutes from './router/task.js'
import authRoutes from './router/auth.js'
import mongoose from 'mongoose'

const task = [
    {
        id : 1,
        task : "First Task"
    },
    {
        id : 2,
        task : "Two Task"
    },
    {
        id : 3,
        task : "Three Task"
    }
]

function middleware(req, res, next){
next()
}

const app = express()
const PORT = 3000

app.use(express.json())
app.use( morgan("tiny"))
app.use(cors({
  origin: "https://all-work-of-web-development-6az1d6mo2.vercel.app",
}));
app.use('/user',userRoutes)
app.use('/task',taskRoutes)
app.use('/auth',authRoutes)

mongoose.connect("mongodb+srv://hassnainabbasin187:1412@apis.grbet.mongodb.net/practiceWork")
.then(()=>{
    console.log("Db is Connected")
})
.catch((e)=>{
    console.log(e)
})

app.get('/',middleware,(req , res) =>{
 res.status(201).send(task)   
})

app.listen(PORT, () => console.log("Server is running " + PORT))

// app.post('/',middleware, express.json(),(req , res)=>{
//    console.log("req=>",req.body)
// })

// app.put('/',(req , res)=>{
//     res.send("put request Add")
// })

// app.delete('/',(req , res)=>{
//     res.send("delete request Add")
// })
