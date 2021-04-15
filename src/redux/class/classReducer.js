import classActionTypes from "./classActionTypes";

const initialState = {
  classes: [],
  loading: false,
  processing: false,
  classesLoaded: false,
  message: null,
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case classActionTypes.LOADING_CLASSES:
      return {
        ...state,
        loading: true,
      };

    case classActionTypes.PROCESSING:
      return {
        ...state,
        processing: true,
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
        processing: false,
        classes: [...state.classes, action.payload],
        message: "Successfully added a new class.",
      };

    case classActionTypes.DELETE_CLASS:
      return {
        processing: false,
        ...state,
      };

    case classActionTypes.CLASS_ERROR:
      return {
        ...state,
        processing: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default classReducer;
