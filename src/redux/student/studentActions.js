import {
  addStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../../actions/studentActions";
import studentActionTypes from "./studentActionTypes";

export const LOAD_STUDENTS = (username) => async (dispatch) => {
  try {
    dispatch({ type: studentActionTypes.LOADING_STUDENTS });
    const students = await getStudents(username);
    dispatch({ type: studentActionTypes.LOADED_STUDENTS, payload: students });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};

export const ADD_STUDENT = (username, data) => async (dispatch) => {
  try {
    const res = await addStudent(username);
    dispatch({ type: studentActionTypes.ADD_STUDENT, payload: data });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};

export const EDIT_STUDENT = (studentId, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: studentActionTypes.LOADING_STUDENTS });
    const response = await updateStudent(studentId, updatedData);
    dispatch({ type: studentActionTypes.EDIT_STUDENT, payload: response });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};

export const DELETE_STUDENT = (studentId) => async (dispatch) => {
  try {
    dispatch({ type: studentActionTypes.LOADING_STUDENTS });
    const response = await deleteStudent(studentId);
    dispatch({ type: studentActionTypes.EDIT_STUDENT, payload: response });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};
