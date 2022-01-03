import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Authentication/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./components/Authentication/Register";
import Footer from "./components/Shared/Footer/Footer";

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
          </Routes>  
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
