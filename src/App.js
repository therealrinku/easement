import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Topbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
