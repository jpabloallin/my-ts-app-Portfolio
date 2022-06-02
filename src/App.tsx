import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import Images from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
      <nav className="navbar navbar-dark bg-light d-flex justify-content-around p-1">
        <Link to="/" className="link-dark btn btn-secondary btn-lg active p-2">Main page</Link>
        <Link to="/about" className="btn btn-secondary btn-lg active p-2">About me</Link>
        <Link to="/portfolio/:username" className="btn btn-secondary btn-lg active p-2">Portfolio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio/:username" element={<Portfolio />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
