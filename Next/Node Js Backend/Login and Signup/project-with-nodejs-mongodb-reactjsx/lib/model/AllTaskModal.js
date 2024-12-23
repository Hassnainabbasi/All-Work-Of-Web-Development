import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    task : {
      type : String,
  require : true
    },
    userId : {
    type : Schema.Types.ObjectId,
    require : true,
    ref : "allusers"
    },
    email : {
      type : String,
      require : true
    }
    
  });

  
const AllTaskModal = mongoose.model('AllTask', taskSchema);

export default AllTaskModal;