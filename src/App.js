import React from "react";
import './app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacto from "./Components/Contacto";
import Educacion from "./Components/Educacion";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-nav">
          <h1>ch_B</h1>
          <div>
            <Nav />
          </div>
        </header>
        <Routes> 
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Error />} />
          <Route path="/"exact element={<Home/>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
