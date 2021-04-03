import React from "react";
import Routes from "./routes";
import "./global.css";
import "./styles/styles.css";
import MenuBar from "./components/menubar";


function App() {
  return (
    <div className="container">
      <MenuBar />
      <Routes />
    </div>
  );
}

export default App;
