import { combineReducers } from "redux";
import studentReducer from "./student/studentReducer";
import staffReducer from "./staff/staffReducer";
import classReducer from "./class/classReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  classes: classReducer,
  staffs: staffReducer,
});

export default rootReducer;
