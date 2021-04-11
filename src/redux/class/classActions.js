import { addClass, deleteClass, getClasses } from "../../actions/classActions";
import classActionTypes from "./classActionTypes";

export const LOAD_CLASSES = (username) => async (dispatch) => {
  try {
    dispatch({ type: classActionTypes.LOADING_CLASSES });
    const classes = await getClasses(username);
    dispatch({ type: classActionTypes.LOADED_CLASSES, payload: classes });
  } catch (err) {
    dispatch({ type: classActionTypes.CLASS_ERROR, payload: err.message });
  }
};

export const ADD_CLASS = (data) => async (dispatch) => {
  try {
    const id = await addClass(data);
    dispatch({ type: classActionTypes.ADD_CLASS, payload: { ...data, id } });
  } catch (err) {
    dispatch({ type: classActionTypes.CLASS_ERROR, payload: err.message });
  }
};

export const DELETE_CLASS = (classId) => async (dispatch) => {
  try {
    await deleteClass(classId);
    dispatch({ type: classActionTypes.DELETE_CLASS, payload: classId });
  } catch (err) {
    dispatch({ type: classActionTypes.CLASS_ERROR, payload: err.message });
  }
};
