import logo from './logo.svg';
import './App.css';
import Footer from "./Common Component/Footer Component/Footer"
import Home from "./Pages/Homepage/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
