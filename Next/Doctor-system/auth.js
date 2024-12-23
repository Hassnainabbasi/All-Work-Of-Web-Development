import { connectDb } from "@/lib/connectDb";
import { UserModal } from "@/lib/models/UserModal";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";  // Corrected import for 

async function handlelogin(obj){
  await connectDb()
  const user = await UserModal.findOne({ email : obj.email })
  if(user){
    return user;
  }
  else{
    let newUser = new UserModal(obj)
    newUser = await newUser.save()
    return newUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ account, profile }) {
        if (account.provider === "google") {
          console.log('accounts',account)  
          console.log('profile',profile)  
          
          let obj = {
            firstName : profile.given_name,
            lastName : profile.family_name,
            email : profile.email,
            picture : profile.picture,
            phoneNumber : profile.phone_number || 'default-phone-number'
          }
          const user = await handlelogin(obj)
        return {user} // Do different verification for other providers that don't have `email_verified`
     
        }
       },
   async jwt({ token }) {
    const user = await handlelogin({email :token.email})
    // console.log('isuser',user)
        token.role = user.role
        token._id = user._id
        return token
      },
      session({ session, token }) {
        session.user._id = token._id
        session.user.role = token.role
        return session
      },
    },
    },
)
//   // [...nextauth].ts or [...nextauth].js
// import GoogleProvider from "next-auth/providers/google"; 

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   debug: true,  // Enable debug logs for NextAuth
//   callbacks: {
//     async jwt({ token, account }) {
//       console.log("JWT Callback", token, account);  // Log the token and account
//       if (account) {
//         token.accessToken = account.access_token;  // Store the access token in the JWT
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       console.log("Session Callback", session, token);  // Log the session and token
//       session.accessToken = token.accessToken;  // Attach the access token to the session
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/signin',  // Your custom sign-in page if needed
//     callbackUrl: '/',   // Redirect user to the homepage after successful login
//   },
// };

// export default authOptions;
