import Login from "./pages/login";
import Signup from "./pages/signup";

export default function App() {
  return (
    <div className="flex mx-auto justify-around bg-black">
      <Login />
      <Signup />
    </div>
  )
}