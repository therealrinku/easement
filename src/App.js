import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Students from "./pages/Students/Students";
import Fees from "./pages/Fees/Fees";

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

        <div
          className="main"
          style={showSidebar ? { marginLeft: "17.5%" } : null}
        >
          <Route path="/students" exact component={Students} />
          <Route path="/fees" exact component={Fees} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
