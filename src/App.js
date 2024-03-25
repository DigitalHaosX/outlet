import React from "react";
import PersonsList from "./components/PersonsList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Split screen with deteils</h1>
      <Outlet />
    </div>
  );
}

export default App;
