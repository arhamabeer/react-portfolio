import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../screens/home.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
