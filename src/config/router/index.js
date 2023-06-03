import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../screens/home.jsx";
import About from "../../screens/about.jsx";
import Contact from "../../screens/contact.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abt" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
