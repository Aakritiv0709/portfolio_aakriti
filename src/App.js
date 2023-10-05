import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Homepage/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/Aboutpage/About';
import Contact from './Pages/Contactpage/Contact';
import Project from './Pages/Projectpage/Project';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/projects" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
