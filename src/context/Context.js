import { createContext } from "react";

const Context = createContext({
  staffs: [],
  students: [],
  classes: [],
  message: "",
  setMessage: () => {},
  stackedRoutes: [],
  setStackedRoutes: () => {},
});

export default Context;
