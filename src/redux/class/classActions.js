import { deleteClass, getClasses } from "../../actions/classActions";
import classActionTypes from "./classActionTypes";

export const LOAD_STAFFS = (username) => async (dispatch) => {
  try {
    dispatch({ type: classActionTypes.LOADING_CLASSES });
    const classes = await getClasses(username);
    dispatch({ type: classActionTypes.LOADED_CLASSES, payload: classes });
  } catch (err) {
    dispatch({ type: classActionTypes.CLASS_ERROR, payload: err.message });
  }
};

export const DELETE_CLASS = (className) => async (dispatch) => {
  try {
    const response = await deleteClass(className);
    dispatch({ type: classActionTypes.DELETE_CLASS, payload: response });
  } catch (err) {
    dispatch({ type: classActionTypes.CLASS_ERROR, payload: err.message });
  }
};
