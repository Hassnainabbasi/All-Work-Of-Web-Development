import express from 'express'
import AllTaskModal from '../lib/model/AllTaskModal.js'
import cors from 'cors'
import AllUserModal from '../lib/model/AllUserModal.js'
import jwt from 'jsonwebtoken'
const router = express.Router()


router.use(express.json())
router.use(cors())

router.get("/", async(req , res)=>{
    try {
      const bearerToken = req.headers.authorization
      if(!bearerToken){
        return res.status().json({
          error : true,
          data : null,
          msg : "Token Not Provide"
        })
      }
      let token = bearerToken.split(" ")[1]
      let decoded = jwt.verify(token , "shhhhh")
      let userId = decoded.id

      const checkTask = await AllTaskModal.find({userId : userId}).lean()
      res.status("200").json({
            error : false,
            data : checkTask,
            msg : "Task Fetch Sucessfully"
         })
    } catch (error) {
        console.log(error)
        res.status(500).json({
          error: true,
          msg: "Internal Server Error",
      });
    }
})
router.post("/",async(req , res)=>{
    const {task} = req.body
    console.log("tasks=>",{task})
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(403).json({
        error: true,
        msg: "Token is required",
      });
    }
  
    const token = bearerToken.split(" ")[1];   
    try {
        const decoded = jwt.verify(token, 'shhhhh');
        const userId = decoded.id;
    
        const user = await AllUserModal.findById(userId);
        if (!user) {
          return res.status(404).json({
            error: true,
            msg: "User not found",
          });
        }
        const newTask = new AllTaskModal({
           task : task,
           userId : user._id,
           email : user.email,
           name : user.username
           })
          await newTask.save()   
          res.status("201").json({
            error : false,
            data : newTask,
            msg : "Task Added Sucessfully"
         })
      } catch (e) {
        console.log(e)
      }
   })
   router.get("/:id",async(req , res)=>{
    const task = await AllTaskModal.findById(req.params.id).lean()
    if(!task){
        return res.status(404).json({
            error : true,
            data : null,
            msg : "Task not found"
        })
    }
    res.status("200").json({
       error : false,
       data : task,
       msg : "Task Found Sucessfully"
    })
   })

   export default router