import { connectDb } from "@/lib/connectDb";
import { RequestModal } from "@/lib/models/RequestModal";
import { UserModal } from "@/lib/models/UserModal";

export async function POST(req) {
    await connectDb();
    try {
        let obj = await req.json();
        console.log("Sending data:", obj); // To see the data being sent

        let userAlreadyRegister = await RequestModal.findOne({
            user : obj.user
        })
        if(userAlreadyRegister){
            return Response.json({
                error: true,
                msg: "You Had Already Applied a Form",
            }, {status: 403});     
        }
      else{
        let newRequest = await new RequestModal({...obj});
        newRequest = await newRequest.save();
        return Response.json({
            error: false,
            msg: "Request Successfully",
            request: newRequest
        }, {status: 201});
      }
    } catch (e) {
        console.log("Error while saving data:", e)
        return Response.json({
            error: true,
            msg: "Request Rejected",
        }, {status: 400});
    }
}

export async function GET(req) {
    await connectDb();
    try {
        let request = await RequestModal.find().populate('user',); // Populating the `user` field
         console.log("isrequest=>",request)
        return Response.json({
            error: false,
            msg: "Get User Successfully",
            request,  // Returning the request variable
        }, {status: 200});
    } catch (e) {
        return Response.json({
            error: true,
            msg: "Failed to fetch request",
        }, {status: 400});
    }
}
// export async function PUT(req){
//     await connectDb()
//     try {
//        let obj = await req.json()
//        let {id , status} = obj
//        const request = await RequestModal.findOne({_id : id})
//        await UserModal.findOneAndUpdate({_id : request.user},{role : 'doctor'})
//        let updated =  await UserModal.findOneAndUpdate(
//         {
//             _id : id
//         },
//         {status : status}
//        ).exec()
//        return Response.json(
//         {
//           error: false,
//           msg: "Requests updated Successfully",
//           request: updated,
//         },
//         { status: 200 }
//       );
//     } catch (error) {
//         return Response.json(
//         {
//             error: false,
//             msg: "Something went wrong",
//           },
//           { status: 500 }
//         )
//     }
// }
export async function PUT(req) {
    await connectDb();
    try {
      let obj = await req.json();
      const { id, status } = obj;
  
      // Request ka status update karo
      const updatedRequest = await RequestModal.findOneAndUpdate(
        { _id: id },
        { status: status },  // Status ko update karna
        { new: true }  // Yeh ensure karega ke aapko updated request milay
      );
  
      // Agar status 'accepted' ho, toh user ka role 'doctor' bhi update karo
      if (status === 'accepted') {
        await UserModal.findOneAndUpdate({ _id: updatedRequest.user }, { role: 'doctor' });
      }
  
      // Agar request update ho gayi toh yeh response bhejenge
      return Response.json(
        {
          error: false,
          msg: "Request successfully updated",
          request: updatedRequest,  // Updated request ko response mein bhej rahe hain
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error while updating:", error);
      return Response.json(
        {
          error: true,
          msg: "Something went wrong",
        },
        { status: 500 }
      );
    }
  }
  