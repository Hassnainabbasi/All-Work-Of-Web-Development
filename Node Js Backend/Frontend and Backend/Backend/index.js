import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

// app.use(express.json())

mongoose.connect("mongodb+srv://hassnainabbasin187:1412@apis.grbet.mongodb.net/Smit")
.then(()=>{
    console.log("Db is Connected")
})
.catch((e)=>{
    console.log(e)
})

const app = express()
const PORT = 4000

app.get('/',(req , res) =>{
    return(
        console.log("Hello world")
    )
    res.status(201)  
   })
 
app.listen(PORT, () => console.log("Server is running " + PORT))
