import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FooterComponent from "./components/FooterComponent";
import DarkModeToggle from "./components/DarkModeToggle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <DarkModeToggle />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <ScrollToTop />
      <FooterComponent />
    </Router>
  );
}

export default App;