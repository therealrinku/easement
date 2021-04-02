import { createContext } from "react";

const Context = createContext({
  staffs: [],
  students: [],
  classes: [],
  message: "",
});

export default Context;
