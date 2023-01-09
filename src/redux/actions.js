import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENT_LOAD,
  COMMENT_DISPLAY_OFF,
  COMMENT_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const jsonData = await response.json();
      dispatch({
        type: COMMENT_LOAD,
        data: jsonData,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn("Error API"));
      dispatch(loaderOff());
    }
  };
}

export function loaderOn() {
  return {
    type: COMMENT_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: COMMENT_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 2000);
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
