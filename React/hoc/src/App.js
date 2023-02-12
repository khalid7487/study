import React from "react";

import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
