// import { connectDb } from "@/lib/connectDb";
// import { RequestModal } from "@/lib/models/RequestModal";
// export async function GET(req, { params }) {
//     await connectDb();
//     const request = await RequestModal.findOne({ _id: params.id }).populate('user')
//   console.log('requestssss=>',request)
//   }
import { connectDb } from "@/lib/connectDb";
import { RequestModal } from "@/lib/models/RequestModal";
import { UserModal } from "@/lib/models/UserModal";

export async function GET(req, { params }) {
  await connectDb();
  // console.log(req);

  const requests = await RequestModal.findOne({ _id: params.id }).populate(
    "user"
  );
  return Response.json(
    {
      error: false,
      msg: "Single Request fetched Successfully",
      requests,
    },
    { status: 200 }
  );
}