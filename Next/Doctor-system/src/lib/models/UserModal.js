import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    picture : String,
    email : String,
    role : {type : String , default : "user", enum:['user','doctor','admin']},
    extraInfo: {
      fees : Number,
      hospital : String,
      time : String,
      bio : String,
      specialization : String,
      gender : String,
    }
})

export const UserModal = mongoose.models.User || mongoose.model("User",userSchema)