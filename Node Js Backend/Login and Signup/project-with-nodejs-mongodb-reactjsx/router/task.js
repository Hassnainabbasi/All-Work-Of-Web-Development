import express from 'express'
import AllTaskModal from '../lib/model/AllTaskModal.js'
import cors from 'cors'
import AllUserModal from '../lib/model/AllUserModal.js'
const router = express.Router()

router.use(express.json())
router.use(cors())

router.get("/", async(req , res)=>{
    try {
        const checkTask = await AllTaskModal.find().lean()
        res.status("200").json({
            error : false,
            data : checkTask,
            msg : "Task Fetch Sucessfully"
         })
    } catch (error) {
        console.log(e)
    }
})


router.post("/", express.json(),async(req , res)=>{
    const {task} = req.body
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
        const userEmail = decoded.email;
    
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
           email : user.email
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