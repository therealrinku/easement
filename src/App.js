import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StudentsPage from "./pages/StudentsPage";
import FeesPage from "./pages/FeesPage";
import ResultsPage from "./pages/ResultsPage";
import StaffsPage from "./pages/StaffsPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import AddPage from "./pages/AddPage";
import getData from "./actions/getData";
import Context from "./context/Context";
import StaffDetailsPage from "./pages/StaffDetailsPage";
import Alert from "./components/Alert";
import ClassesPage from "./pages/ClassesPage";
import ClassDetailsPage from "./pages/ClassDetailsPage";
import Breadcrumb from "./components/Breadcrumb";
import "./App.css";
import { Fragment } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [students, setStudents] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [classes, setClasses] = useState([]);
  const [message, setMessage] = useState("");
  const loc = useLocation();

  useEffect(() => {
    getData("test", "students", setStudents);
    getData("test", "staffs", setStaffs);
    getData("test", "classes", setClasses);
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="app">
      {message ? <Alert msg={message} /> : null}
      <Context.Provider
        value={{ students, staffs, classes, message, setMessage }}
      >
        <Fragment>
          <Sidebar hideSidebar={!showSidebar} />
          <Topbar
            toggleSidebar={() => setShowSidebar((prev) => !prev)}
            sideBarIsClosed={!showSidebar}
          />
          <div
            className="page"
            style={showSidebar ? { marginLeft: "17.5%" } : null}
          >
            <Breadcrumb />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/fees" exact component={FeesPage} />
            <Route path="/results" exact component={ResultsPage} />
            <Route path="/staffs" exact component={StaffsPage} />
            <Route path="/new" exact component={AddPage} />
            <Route path="/classes" exact component={ClassesPage} />
            <Route
              path="/class/:className"
              exact
              component={ClassDetailsPage}
            />
            <Route
              path="/student/details/:studentId"
              component={StudentDetailsPage}
            />
            <Route
              path="/staff/details/:staffId"
              component={StaffDetailsPage}
            />
          </div>
        </Fragment>
      </Context.Provider>
    </div>
  );
};

export default App;
