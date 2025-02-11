import { connectDb } from "@/lib/connectDb";
import { UserModal } from "@/lib/models/UserModal";

export async function POST(req) {
    await connectDb();
    try {
        let obj = await req.json();
        let newUser = await new UserModal({...obj});
        newUser = await newUser.save();

        return Response.json({
            error: false,
            msg: "Request Successfully",
            user: newUser
        }, {status: 201});
    } catch (e) {
        return Response.json({
            error: true,
            msg: "Request Rejected",
        }, {status: 400});
    }
}

export async function GET(req) {
    await connectDb();
    try {
        let users = await UserModal.find(); // Retrieving users from the database

        return Response.json({
            error: false,
            msg: "Get User Successfully",
            users: users  // Returning the users variable
        }, {status: 200});
    } catch (e) {
        return Response.json({
            error: true,
            msg: "Failed to fetch users",
        }, {status: 400});
    }
}
