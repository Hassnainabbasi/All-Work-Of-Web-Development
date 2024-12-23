import express from "express";
import req from "express/lib/request";

const router = express.Router();

let user = {
    fullName : "Hassnain",
    email : "muhammadhassnain1877@gmail.com",
    id : 1
}

router.get("/",(req,res) => {
res.send(200).json({
    error : false,
    data : user,
    msg : "User Fetch Sucessfully"
})
})
router.post("/",(req,res) => {
    const { fullName , email} = req.body
    user.push({fullName , email, id : user.length + 1})
    res.send(201).json({
        error : false,
        data : user,
        msg : "User added Sucessfully"
    })
})
router.get("/:id",(req,res) => {
       const users = user.find((data) => data.id = req.params.id )
       if(!users){
        return  res.status(404).json({
            error : true,
            data : null,
            msg : "User not Found"
        })

       }
        res.status(201).json({
            error : false,
            data : user,
            msg : "User added Sucessfully"
        })
})

export default router