import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Username } from "../firebase/Context";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Header() {
  const {user , setUser} = useContext(Username)

  const navigate = useNavigate()  
  
  const signout =async ()=>{
  
     await signOut(auth).then(() => {
  alert("Signout Successfully")
  navigate("/Auth")
      }).catch((error) => {
  alert(error)
      });
    }


    return (
   <header className="header-background">
    <div className="nav-bar">

    <div className="flex items-center gap-4">
      <img src="background.jpg" alt="" className="logo" />
      <span className="text-2xl font-bold text-white ">Shopping</span>
    </div>

    <div>
      <h1 className="text-2xl font-bold text-white">{
        user.isLogin ? user.userInfo : "Unknown"
        }</h1>
    </div>
{
user.isLogin ?  (<button onClick={signout} className="login-btn hover:translate-y-1 hover:text-blue-600">Signout</button>)
:

(
  <Link to={"/Auth"}>
  <button className="login-btn hover:translate-y-1 hover:text-blue-600">Login</button>
</Link>
)
}


    </div>

   </header>
    );
  }
  
  export default Header;