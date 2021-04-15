import staffActionTypes from "./staffActionTypes";

const initialState = {
  staffs: [],
  loading: false,
  processing: false,
  staffsLoaded: false,
  message: null,
};

const staffReducer = (state = initialState, action) => {
  switch (action.type) {
    case staffActionTypes.LOADING_STAFFS:
      return {
        ...state,
        loading: true,
      };

    case staffActionTypes.PROCESSING:
      return {
        ...state,
        processing: true,
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
        processing: false,
        staffs: [...state.staffs, action.payload],
        message: "Successfully added a new staff.",
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
        processing: false,
        message: "Successfully edited a staff.",
      };

    case staffActionTypes.DELETE_STAFF:
      return {
        ...state,
        processing: false,
        staffs: state.staffs.filter((st) => st.id !== action.payload),
        message: "Successfully deleted a staff.",
      };

    case staffActionTypes.STAFF_ERROR:
      return {
        ...state,
        processing: false,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default staffReducer;
