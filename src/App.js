import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home/Home';
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           
        </Routes>
        <Footer></Footer>
      </BrowserRouter>,
    </div>
  );
}

export default App;
