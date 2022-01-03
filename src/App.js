<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import Home from "./components/Home/Home/Home";

import Login from "./components/Authentication/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./components/Authentication/Register";
=======
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home/Home';
import Footer from "./components/Shared/Footer/Footer";
>>>>>>> shared

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      ,
=======
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           
        </Routes>
        <Footer></Footer>
      </BrowserRouter>,
>>>>>>> shared
    </div>
  );
}

export default App;
