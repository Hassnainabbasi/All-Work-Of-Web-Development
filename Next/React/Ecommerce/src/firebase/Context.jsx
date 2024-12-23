import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

export const Username = createContext()

function UsernameProvider({children}){
    const [loading , setLoading] = useState(true)
const [user , setUser]=useState({
    isLogin : false,
    userInfo : {}
})


useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log("Login")
            setUser({isLogin : true , userInfo : user.email})
        } else {
            console.log("Logout")
        }
        setLoading(false)
    });
    
    
},[signOut,signInWithEmailAndPassword])

return(
    <Username.Provider value = {{user,setUser}}>
{
    loading ? <div className="spinner">
        <img src="loader.webp" alt="" />
        </div> :
     (children)    
}
    </Username.Provider>
)

}

export default UsernameProvider;