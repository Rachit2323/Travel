import { useState } from "react";

import "./App.css";
import Table from "./Components/Table/Table.jsx";
import SideBar from "./Components/SiderBar/SideBar.jsx";
import Nav from "./Components/Nav/Nav.jsx";

function App() {
  return (
    <div className="h-screen w-screen flex fixed">
      <SideBar />
      <div className="w-full h-full flex flex-col">
        <Nav />
        <Table />
      </div>
    </div>
  );
}

export default App;
