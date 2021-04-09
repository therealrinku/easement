import { addStaff, deleteStaff, getStaffs, updateStaff } from "../../actions/staffActions";
import staffActionTypes from "./staffActionTypes";

export const LOAD_STAFFS = (username) => async (dispatch) => {
  try {
    dispatch({ type: staffActionTypes.LOADING_STAFFS });
    const students = await getStaffs(username);
    dispatch({ type: staffActionTypes.LOADED_STAFFS, payload: students });
  } catch (err) {
    dispatch({ type: staffActionTypes.STAFF_ERROR, payload: err.message });
  }
};

export const ADD_STAFF = (data) => async (dispatch) => {
  try {
    const id = await addStaff(data);
    dispatch({ type: staffActionTypes.ADD_STAFF, payload: { ...data, id } });
  } catch (err) {
    dispatch({ type: staffActionTypes.STAFF_ERROR, payload: err.message });
  }
};

export const EDIT_STAFF = (staffId, propName, propVal) => async (dispatch) => {
  try {
    updateStaff(staffId, { [propName]: propVal });
    dispatch({ type: staffActionTypes.EDIT_STAFF, payload: { staffId, propName, propVal } });
  } catch (err) {
    dispatch({ type: staffActionTypes.STAFF_ERROR, payload: err.message });
  }
};

export const DELETE_STAFF = (staffId) => async (dispatch) => {
  try {
    await deleteStaff(staffId);
    dispatch({ type: staffActionTypes.DELETE_STAFF, payload: staffId });
  } catch (err) {
    dispatch({ type: staffActionTypes.STAFF_ERROR, payload: err.message });
  }
};
