import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { provider } from "../firebase/firebase";

function Auth() {
const [userName , setUserName] =useState("")
const [signupEmail , setSignupEmail] = useState("")
const [signupPassword , setSignupPassword] = useState("")
const [signinEmail , setSigninEmail] = useState("")
const [signinPassword , setSigninPassword] = useState("")



const create = ()=>{

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Signup Successfully")
    console.log(user)
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


const login = ()=>{
  signInWithEmailAndPassword(auth, signinEmail, signinPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Log in successfully")
    navigate("/")
  })
  .catch((error) => {
alert(error)
  });
}

const loginWithGoogle = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    alert("Log in successfully")
    navigate("/")

  }).catch((error) => {
alert(error)
  });
}

 const navigate = useNavigate()

  return (
    <div className="auth-container">

      <div className="login">
        <h1 className="auth-heading">Login</h1>
        <div className="flex flex-col">
          <label >E-mail</label>
          <input type="email" value={signinEmail} onChange={(e)=>setSigninEmail(e.target.value)}  className="inp" name=""  />
        </div>
        <div className="flex flex-col">
          <label >Passwrod</label>
          <input type="password" value={signinPassword} onChange={(e)=>setSigninPassword(e.target.value)}  name="" className="inp" />
        </div>
        <div className="flex flex-col">
        <button onClick={login} className="btns  hover:text-blue-600 hover:translate-y-1">Login</button>
        <button onClick={loginWithGoogle} className="btns  hover:text-blue-600 hover:translate-y-1">Login With Google</button>

        </div>
      </div>

      <Link to={"/"}>
        <button className="home-btn hover:text-blue-600 hover:translate-y-1">Home</button>
      </Link>


      <div className="signup">
        <h1 className="auth-heading">Create Account</h1>
        <div className="flex flex-col">
          <label>Name</label>
          <input className="inp" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  />
        </div>
        <div className="flex flex-col">
          <label >E-mail</label>
          <input type="email" value={signupEmail} onChange={(e)=>setSignupEmail(e.target.value)} className="inp" name=""  />
        </div>
        <div className="flex flex-col">
          <label >Passwrod</label>
          <input type="password" name="" value={signupPassword} onChange={(e)=>setSignupPassword(e.target.value)} className="inp" />
        </div>
      <button onClick={create} className="btns  hover:text-blue-600 hover:translate-y-1">Create</button>
      </div>
    </div>


  );
}

export default Auth;