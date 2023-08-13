import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Common Component/Footer Component/Footer"
import Home from "./Pages/Homepage/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/Aboutpage/About';
import Contact from './Pages/Contactpage/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
