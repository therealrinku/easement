import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Sidebar} />
      <Route path="/" component={Topbar} />
    </BrowserRouter>
  );
};

export default App;
