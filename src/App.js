import React from "react";
import AppRouter from "../src/config/router/index.js";
import NavHeader from "./components/navHeader.jsx";

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
