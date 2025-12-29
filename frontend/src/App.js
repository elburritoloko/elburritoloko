import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Menu from "./pages/Menu";
import Infos from "./pages/Infos";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/politique-confidentialite" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
