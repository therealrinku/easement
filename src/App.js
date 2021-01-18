import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sidebar} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
