import { createContext } from "react";

const Context = createContext({
  staffs: [],
  students: [],
  classes: [],
  message: "",
  setMessage: () => {},
});

export default Context;
