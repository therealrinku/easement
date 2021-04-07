import classActionTypes from "./classActionTypes";

const state = {
  classes: [],
  loading: false,
  classes_loaded: false,
  error: null,
};

const classReducer = (state = state, action) => {
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
        classes_loaded: true,
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
