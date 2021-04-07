import studentActionTypes from "./studentActionTypes";

const state = {
  students: [],
  loading: false,
  students_loaded: false,
  error: null,
};

const studentReducer = (action, type) => {
  switch (action.type) {
    case studentActionTypes.LOADING_STUDENTS:
      return {
        ...state,
        loading: true,
      };

    case studentActionTypes.LOADED_STUDENTS:
      return {
        ...state,
        loading: false,
        students_loaded: true,
        students: action.payload,
      };

    case studentActionTypes.ADD_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.payload),
      };

    case studentActionTypes.EDIT_STUDENT:
      return {
        ...state,
      };

    case studentActionTypes.DELETE_STUDENT:
      return {
        ...state,
      };

    case studentActionTypes.STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
