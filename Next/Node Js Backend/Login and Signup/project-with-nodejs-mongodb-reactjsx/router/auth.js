import express from 'express'
import Joi from 'joi'
import jwt from 'jsonwebtoken'
import AllUserModal from '../lib/model/AllUserModal.js'
import bcrypt from "bcrypt";
import cors from 'cors'

const router = express.Router()

const registerSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .min(6),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const loginSchema = Joi.object({
    password: Joi.string()
    .min(6),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

router.use(cors());

router.post("/register",async(req , res)=>{
    const { error, value } = registerSchema.validate(req.body);
    if(error) {
    return res.status().json({ error : true,
        msg : "Please Valid Input",
        data: null,
    })
}
try {
 
const userwohiemailwala = await AllUserModal.findOne({email : value.email})
if(userwohiemailwala){
 return res.status(403).json({
    error : true,
    data : null,
    msg : "User This Email Already Exist"
})
} 

const hashpassword = await bcrypt.hash(value.password , 12)
console.log("hashpassword=>",hashpassword)

const newUser = new AllUserModal({
    username: value.username,
    email: value.email,
    password: hashpassword}) 
    await newUser.save() 

  return res.status(201).json({
        error : false,
        data : newUser,
        msg : "User Register Sucessfully"
    })
} catch (error) {
    console.log(error)
}
console.log(value)
res.send("Register Api")
})

router.post("/login",async(req , res)=>{
    const { error, value } = loginSchema.validate(req.body);
    if(error) {
    return res.status(404).json({ error : true,
        msg : "Please Valid Input",
        data: null,
    })
}
try { 
const userwohiemailwala = await AllUserModal.findOne({email : value.email})
if(!userwohiemailwala){
 return res.status(403).json({
    error : true,
    data : null,
    msg : "User is Not Register"
})
} 

const checkpassword = await bcrypt.compare(value.password , userwohiemailwala.password)
if(!checkpassword){
    return  res.status(403).json({
        error : true,
        data : null,
        msg : "Invalid Password"
    })
}
        const token = jwt.sign(
            { id: userwohiemailwala._id, email: userwohiemailwala.email },
            'shhhhh',
            { expiresIn: '1h' }  );

        return res.status(200).json({
            error: false,
            data: {
                user: { username: userwohiemailwala.username, email: userwohiemailwala.email },
                token,
            },
            msg: "User logged in successfully",
        });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            error: true,
            msg: "Internal server error",
            data: null,
        });
    }
});
export default router





// router.post("/login",(req , res)=>{
// })
// router.post("/reset-password",(req , res)=>{

// })