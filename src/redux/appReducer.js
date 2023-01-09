import {
  COMMENT_DISPLAY_ON,
  COMMENT_DISPLAY_OFF,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from "./types";

const initialState = {
  loading: false,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };
    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: action.text,
      };
    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
