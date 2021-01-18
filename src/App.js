import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar hideSidebar={!showSidebar} />
        <Topbar
          toggleSidebar={() => setShowSidebar((prev) => !prev)}
          sideBarIsClosed={!showSidebar}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
