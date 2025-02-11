import mongoose from "mongoose";

const {Schema} = mongoose;

const requestSchema = new Schema({
    user : {type :mongoose.Types.ObjectId, ref : "User" },
    status : {type :String, default:"pending",enum:['pending','accepted','rejected']},
    name: String,
    bio: String,
    hospital: String,
    fees: String,
    gender: String,
    appointmentTime: String,
    degree: String,
    specialization: String,
    experience: String,
    profileImg: String,
    number: String,
    email: String,
    address: String,
})

export const RequestModal = mongoose.models.Requests || mongoose.model("Requests",requestSchema)