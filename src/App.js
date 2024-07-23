import logo from './logo.svg';
import './App.css';
import { Create } from './component/create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './component/read';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
     
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
     
      
     
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
