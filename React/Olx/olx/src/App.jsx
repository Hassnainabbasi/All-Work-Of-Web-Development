import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./Component/Header"
import Login from "./pages/Auth/Login"
import Footer from "./component/Footer";
import Signup from "./pages/Auth/Signup";
import PostAd from "./pages/PostAdd";
import Auth from "./pages/Auth/Auth";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/auth" && <Header />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post-add" element={<PostAd />} />
      </Routes>
      <Footer />
      </>
  )
}

export default App
