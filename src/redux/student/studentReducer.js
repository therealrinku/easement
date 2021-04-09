import studentActionTypes from "./studentActionTypes";

const initialState = {
  students: [],
  loading: false,
  students_loaded: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
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
        students: [...state.students, action.payload],
      };

    case studentActionTypes.EDIT_STUDENT:
      const studentIndex = state.students.findIndex((st) => st.id === action.payload.studentId);
      const studentsCopy = [...state.students];
      studentsCopy[studentIndex] = [...studentsCopy[studentIndex], action.payload.updatedData];
      return {
        ...state,
        students: studentsCopy,
      };

    case studentActionTypes.DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((st) => st.id !== action.payload),
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
