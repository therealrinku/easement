import { useEffect, useState, Fragment } from "react";
import { Route } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import FeesPage from "./pages/FeesPage";
import ResultsPage from "./pages/ResultsPage";
import StaffsPage from "./pages/StaffsPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import AddPage from "./pages/AddPage";
import Context from "./context/Context";
import StaffDetailsPage from "./pages/StaffDetailsPage";
import Layout from "./components/Layout";
import { connect } from "react-redux";
import * as classActions from "./redux/class/classActions";
import "./App.css";

const App = ({ LOAD_CLASSES, classesLoaded }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!classesLoaded) {
      LOAD_CLASSES("test");
    }
  }, []);

  //use effect to clear message after 3 sec
  //which run only if message is not empty
  useEffect(() => {
    if (message) setTimeout(() => setMessage(null), 3000);
  }, [message]);

  return (
    <Context.Provider value={{ message, setMessage }}>
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

const mapStateToProps = (state) => {
  return {
    classesLoaded: state.classes.classesLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_CLASSES: (username) => dispatch(classActions.LOAD_CLASSES(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
