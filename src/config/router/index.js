import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../screens/home.jsx";
import About from "../../screens/about.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abt" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
