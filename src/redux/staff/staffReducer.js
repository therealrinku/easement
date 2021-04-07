import staffActionTypes from "./staffActionTypes";

const state = {
  staffs: [],
  loading: false,
  staffs_loaded: false,
  error: null,
};

const staffReducer = (action, type) => {
  switch (action.type) {
    case staffActionTypes.LOADING_STAFFS:
      return {
        ...state,
        loading: true,
      };

    case staffActionTypes.LOADED_STAFFS:
      return {
        ...state,
        loading: false,
        staffs_loaded: true,
        staffs: action.payload,
      };

    case staffActionTypes.ADD_STAFF:
      return {
        ...state,
        staffs: state.staffs.concat(action.payload),
      };

    case staffActionTypes.EDIT_STAFF:
      return {
        ...state,
      };

    case staffActionTypes.DELETE_STAFF:
      return {
        ...state,
      };

    case staffActionTypes.STAFF_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default staffReducer;
