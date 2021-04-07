import {
  deleteStaff,
  getStaffs,
  updateStaff,
} from "../../actions/staffActions";
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

export const EDIT_STAFF = (staffId, updatedData) => async (dispatch) => {
  try {
    const response = await updateStaff(staffId, updatedData);
    dispatch({ type: staffActionTypes.EDIT_STAFF, payload: response });
  } catch (err) {
    dispatch({ type: staffActionTypes.STAFF_ERROR, payload: err.message });
  }
};

export const DELETE_STAFF = (staffId) => async (dispatch) => {
  try {
    const response = await deleteStaff(staffId);
    dispatch({ type: staffActionTypes.DELETE_STAFF, payload: response });
  } catch (err) {
    dispatch({ type: staffActionTypes.STAFF_ERROR, payload: err.message });
  }
};
