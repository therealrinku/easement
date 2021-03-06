import { addStudent, deleteStudent, getStudents, updateStudent } from "../../actions/studentActions";
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

export const ADD_STUDENT = (data) => async (dispatch) => {
  try {
    dispatch({ type: studentActionTypes.PROCESSING_STUDENT });
    const id = await addStudent(data);
    dispatch({ type: studentActionTypes.ADD_STUDENT, payload: { ...data, id } });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};

export const EDIT_STUDENT = (studentId, propName, propVal) => async (dispatch) => {
  try {
    dispatch({ type: studentActionTypes.PROCESSING_STUDENT });
    await updateStudent(studentId, { [propName]: propVal });
    dispatch({ type: studentActionTypes.EDIT_STUDENT, payload: { studentId, propName, propVal } });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};

export const DELETE_STUDENT = (studentId) => async (dispatch) => {
  try {
    dispatch({ type: studentActionTypes.PROCESSING_STUDENT });
    await deleteStudent(studentId);
    dispatch({ type: studentActionTypes.DELETE_STUDENT, payload: studentId });
  } catch (err) {
    dispatch({ type: studentActionTypes.STUDENT_ERROR, payload: err.message });
  }
};
