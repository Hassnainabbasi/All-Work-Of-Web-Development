import { BrowserRouter,Routes , Route } from "react-router-dom";
import "./App.css"
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import Header from "./components/header";

function App(){
  return( 


<BrowserRouter>
<Header/>
<Routes>
  <Route path = "/auth" element = {<Auth/>}/>
  <Route path="/" element = {<Products/>}/>
  <Route path = "/:id" element = {<ProductDetail/>}/>
</Routes>

</BrowserRouter>

  )
}

export default App;