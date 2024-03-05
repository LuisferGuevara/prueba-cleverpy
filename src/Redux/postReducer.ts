import { ActionType, StateType } from "./types";

const INITIAL_STATE: StateType = {
  posts: [],
  isLoading: false,
  error: false,
};

export const postReducer = (state = INITIAL_STATE, action: ActionType): StateType => {
  switch (action.type) {
    case "IS_LOADING_POSTS":
      return { ...state, posts: [], isLoading: true, error: false };
    case "GET_POSTS":
      return { ...state, posts: action.payload, isLoading: false, error: false };
    case "PUT_POSTS": 
    case "CREATE_POSTS": 
      return { ...state, posts: action.payload, isLoading: false, error: false };
    case "ERROR_POSTS":
      return { ...state, posts: [], isLoading: false, error: true };
    default:
      return state;
  }
};
