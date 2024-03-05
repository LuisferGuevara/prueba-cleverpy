import { ActionType, StateType } from "./types";

const INITIAL_STATE: StateType = {
  comments: [],
  isLoading: false,
  error: false,
};

export const commentReducer = (state = INITIAL_STATE, action: ActionType): StateType => {
  switch (action.type) {
    case "IS_LOADING_COMMENTS":
      return { ...state, comments: [], isLoading: true, error: false };
    case "GET_COMMENTS":
      return { ...state, comments: action.payload, isLoading: false, error: false };
    case "ERROR_COMMENTS":
      return { ...state, comments: [], isLoading: false, error: true };
    default:
      return state;
  }
};

