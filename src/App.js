import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import StudentsPage from "./pages/StudentsPage";
import FeesPage from "./pages/FeesPage";
import ResultsPage from "./pages/ResultsPage";
import TrashPage from "./pages/TrashPage";
import StaffsPage from "./pages/StaffsPage";

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
          <Route path="/students" exact component={StudentsPage} />
          <Route path="/fees" exact component={FeesPage} />
          <Route path="/results" exact component={ResultsPage} />
          <Route path="/trash" exact component={TrashPage} />
          <Route path="/staffs" exact component={StaffsPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
