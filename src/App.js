import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Home/Shared/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
