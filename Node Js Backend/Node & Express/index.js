import express from "express"
import router from "./routes/user.js"

const app = express()
const PORT = 4500

app.use("/user", router)

app.get('/',(req,res)=>{
    console.log(req)
    res.send("Hello World")
})

app.listen(PORT,()=>console.log("Server Run", + PORT))