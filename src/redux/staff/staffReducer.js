import staffActionTypes from "./staffActionTypes";

const initialState = {
  staffs: [],
  loading: false,
  staffsLoaded: false,
  error: null,
};

const staffReducer = (state = initialState, action) => {
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
        staffsLoaded: true,
        staffs: action.payload,
      };

    case staffActionTypes.ADD_STAFF:
      return {
        ...state,
        staffs: [...state.staffs, action.payload],
      };

    case staffActionTypes.EDIT_STAFF:
      const staffIndex = state.staffs.findIndex((st) => st.id === action.payload.staffId);
      const staffsCopy = [...state.staffs];
      if (staffIndex >= 0) {
        staffsCopy[staffIndex][action.payload.propName] = action.payload.propVal;
      }
      return {
        ...state,
        students: staffsCopy,
      };

    case staffActionTypes.DELETE_STAFF:
      return {
        ...state,
        staffs: state.staffs.filter((st) => st.id !== action.payload),
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
