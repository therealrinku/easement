import studentActionTypes from "./studentActionTypes";

const initialState = {
  students: [],
  loading: false,
  students_loaded: false,
  processing: false,
  message: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case studentActionTypes.LOADING_STUDENTS:
      return {
        ...state,
        loading: true,
      };

    case studentActionTypes.PROCESSING:
      return {
        ...state,
        processing: true,
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
        processing: false,
        students: [...state.students, action.payload],
        message: "Successfully added a new student.",
      };

    case studentActionTypes.EDIT_STUDENT:
      const studentIndex = state.students.findIndex((st) => st.id === action.payload.studentId);
      const studentsCopy = [...state.students];
      if (studentIndex >= 0) {
        studentsCopy[studentIndex][action.payload.propName] = action.payload.propVal;
      }
      return {
        ...state,
        processing: false,
        students: studentsCopy,
        message: "Successfully edited a student.",
      };

    case studentActionTypes.DELETE_STUDENT:
      return {
        ...state,
        processing: false,
        students: state.students.filter((st) => st.id !== action.payload),
        message: "Successfully deleted a student.",
      };

    case studentActionTypes.STUDENT_ERROR:
      return {
        ...state,
        processing: false,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
