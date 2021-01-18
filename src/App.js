import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Sidebar} />
    </BrowserRouter>
  );
};

export default App;
