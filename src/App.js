import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} />
            <Route index element={<Home />} /> */}
           
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
