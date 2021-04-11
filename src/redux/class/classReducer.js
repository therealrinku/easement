import classActionTypes from "./classActionTypes";

const initialState = {
  classes: [],
  loading: false,
  classesLoaded: false,
  error: null,
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case classActionTypes.LOADING_CLASSES:
      return {
        ...state,
        loading: true,
      };

    case classActionTypes.LOADED_CLASSES:
      return {
        ...state,
        loading: false,
        classesLoaded: true,
        classes: action.payload,
      };

    case classActionTypes.ADD_CLASS:
      return {
        ...state,
        classes: state.classes.concat(action.payload),
      };

    case classActionTypes.DELETE_CLASS:
      return {
        ...state,
      };

    case classActionTypes.CLASS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default classReducer;
