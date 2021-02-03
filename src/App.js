import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StudentsPage from "./pages/StudentsPage";
import FeesPage from "./pages/FeesPage";
import ResultsPage from "./pages/ResultsPage";
import TrashPage from "./pages/TrashPage";
import StaffsPage from "./pages/StaffsPage";
import AddPage from "./pages/AddPage";
import getData from "./functions/getData";
import Context from "./context/Context";
import "./App.css";
import EditOrDeletePage from "./pages/EditOrDeletePage";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [students, setStudents] = useState([]);
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    getData("test", "students", setStudents);
    getData("test", "staffs", setStaffs);
  }, []);

  return (
    <div className="app">
      <Context.Provider value={{ students, staffs }}>
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
            <Route path="/staffs" exact component={StaffsPage} />
            <Route path="/new" exact component={AddPage} />
            <Route path="/editordelete" exact component={EditOrDeletePage} />
          </div>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
