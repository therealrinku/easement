import { useEffect, useState, Fragment } from "react";
import { Route } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import FeesPage from "./pages/FeesPage";
import ResultsPage from "./pages/ResultsPage";
import StaffsPage from "./pages/StaffsPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import AddPage from "./pages/AddPage";
import getData from "./actions/getData";
import Context from "./context/Context";
import StaffDetailsPage from "./pages/StaffDetailsPage";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  const [classes, setClasses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getData("test", "classes", setClasses);
  }, []);

  //use effect to clear message after 3 sec
  //which run only if message is not empty
  useEffect(() => {
    if (message) setTimeout(() => setMessage(null), 3000);
  }, [message]);

  return (
    <Context.Provider value={{ classes, message, setMessage }}>
      <Layout>
        <Fragment>
          <Route path="/students" exact component={StudentsPage} />
          <Route path="/fees" exact component={FeesPage} />
          <Route path="/results" exact component={ResultsPage} />
          <Route path="/staffs" exact component={StaffsPage} />
          <Route path="/new" exact component={AddPage} />
          <Route path="/student/details/:studentId" component={StudentDetailsPage} />
          <Route path="/staff/details/:staffId" component={StaffDetailsPage} />
        </Fragment>
      </Layout>
    </Context.Provider>
  );
};

export default App;
