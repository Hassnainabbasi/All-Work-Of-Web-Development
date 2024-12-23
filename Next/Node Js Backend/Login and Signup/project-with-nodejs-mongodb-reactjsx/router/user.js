import express from "express"
import AllUserModal from "../lib/model/AllUserModal.js"
import cors from 'cors'
const router = express.Router()

router.use(express.json())
router.use(cors())

router.put('/',(req , res) =>{
    console.log("authorization=>",req.headers.authorization)
    const bearertoken = req?.headers?.authorization;
    if( !bearertoken){
        return res.status(403).json({
            error : true,
            data : null,
            msg : "Token is not provided"
        })
    }
    const token = bearertoken?.split(" ")[1]
    res.send('User Working Token')
})

// router.get("/", async(req , res)=>{
//     try {
//         const checkUser = await AllUserModal.find().lean()
//         res.status("200").json({
//             error : false,
//             data : checkUser,
//             msg : "User Fetch Sucessfully"
//          })
//     } catch (error) {
//         console.log(e)
//     }
// })


// router.post("/", express.json(),async(req , res)=>{
//     const {username , email, password} = req.body
//     if (!username || !email || !password ) {
//         return res.status(400).json({
//             error: true,
//             msg: "All fields (username, email, password) are required"
//           });
//       }
//       try {
//         const newUser = new User({
//             username,
//             email,
//             password,
//            })
//           await newUser.save()   
//           res.status("201").json({
//             error : false,
//             data : newUser,
//             msg : "User Added Sucessfully"
//          })
//       } catch (e) {
//         console.log(e)
//       }
//    })
//    router.get("/:id",async(req , res)=>{
//     const users = await AllUserModal.findById(req.params.id).lean()
//     if(!users){
//         return res.status(404).json({
//             error : true,
//             data : null,
//             msg : "User not found"
//         })
//     }
//     res.status("200").json({
//        error : false,
//        data : users,
//        msg : "User Found Sucessfully"
//     })
//    })

   export default router