import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Authentication/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./components/Authentication/Register";
import Singlepage from "./components/Singlepage/Singlepage";
import Cart from "./components/Cartpage/Cart";
import Checkout from "./Checkoutpage/Checkout";
import NotFound from "./components/Shared/NotFound/NotFound";
import Products from "./components/Home/Products/Products/Products";
import Blog from "./components/Home/Blogs/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/singlepage" element={<Singlepage />} />
            <Route path="/cartpage" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route exact path="*" element={<NotFound />}>
            </Route>
          

           
         </Routes> 
         
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
