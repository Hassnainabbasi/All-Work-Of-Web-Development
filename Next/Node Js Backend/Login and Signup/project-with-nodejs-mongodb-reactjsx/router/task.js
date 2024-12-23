import express from 'express'
import AllTaskModal from '../lib/model/AllTaskModal.js'
import cors from 'cors'
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
    const {task } = req.body
      try {
        const newTask = new AllTaskModal({
           task : task,
           userId : userId,
           email : email
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