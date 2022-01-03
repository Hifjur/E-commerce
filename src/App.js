import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Authentication/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./components/Authentication/Register";
import Singlepage from "./components/Singlepage/Singlepage";
import Cart from "./components/Cartpage/Cart";
import Checkout from "./Checkoutpage/Checkout";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/singlepage" element={<Singlepage />} />
            <Route path="/cartpage" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

            <Route exact path="*" element={<NotFound />}>
            </Route>
          
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
