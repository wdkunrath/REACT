import React from "react";
import ComponentHeader from "./components/ComponentHeader";
import ComponentBody from "./components/ComponentBody";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <ComponentHeader />
      <ComponentBody/>
    </div>
  );
}

export default App;
