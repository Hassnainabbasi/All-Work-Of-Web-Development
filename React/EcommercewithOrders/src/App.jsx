
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from "./pages/Auth/Signup";
import SignIn from "./pages/Auth/Signin";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Dashboard from "./pages/Dashboard"
import ProductDetail from "./pages/ProductDetail"
import Carts from "./pages/Carts"
import Orders from "./pages/Orders"


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/auth">
          <Route index element={<Auth />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>

        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cartitems" element={<Carts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/orders" element={<Orders />} />

        </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
