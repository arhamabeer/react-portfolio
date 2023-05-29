import React from "react";
import AppRouter from "../src/config/router/index.js";
import NavHeader from "./components/navHeader.jsx";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavHeader />
        <AppRouter />
      </div>
    );
  }
}

export default App;
