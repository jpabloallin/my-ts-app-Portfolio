import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import Images from "./pages/Images/Images";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
      <nav className="navbar navbar-dark bg-light d-flex justify-content-around p-1">
        <Link to="/" className="link-dark">Main page</Link>
        <Link to="/images" className="btn btn-secondary btn-lg active p-2">Images</Link>
        <Link to="/portfolio/:username" className="btn btn-secondary btn-lg active p-2">Portfolio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/images" element={<Images />} />
        <Route path="/portfolio/:username" element={<Portfolio />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
