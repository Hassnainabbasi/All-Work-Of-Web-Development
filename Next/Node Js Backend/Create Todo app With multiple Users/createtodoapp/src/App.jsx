import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
   <div className="flex justify-evenly bg-emerald-600">
    <Login />
    <Signup />
   </div>
  )
}