// import mongoose, { connection } from "mongoose";

// export async function connectDb(){
//     let connect;
//     if(connect?.connection?.readyState !=1){
//     connect = await mongoose.connect(process.env.MONGODB_URI)
//      console.log('DB is Connected',connect)
//     }
// }
import mongoose from "mongoose";

export async function connectDb() {
  // Agar connection pehle se established hai toh check karo
  if (mongoose.connection.readyState !== 1) {
    try {
      const connect = await mongoose.connect(process.env.MONGODB_URI);
      console.log('DB is Connected:', connect.connection.host);
    } catch (error) {
      console.error('MongoDB se connect karte waqt error aayi:', error);
      throw error; // Agar error ho toh usse higher layers mein handle kar sakte ho
    }
  } else {
    console.log('DB pehle se connected hai.');
  }
}
