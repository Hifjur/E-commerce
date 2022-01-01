import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Shared/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
        <Routes>
          {/* <Route path="/" element={<App />} />
            <Route index element={<Home />} /> */}
           
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
