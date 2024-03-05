import { ActionType, StateType } from "./types";

const initialState: StateType = {
  posts: [],
  isLoading: false,
  error: false,
};

export const postReducer = (state = initialState, action: ActionType): StateType => {
  const cases: Record<string, StateType> = {
    ISLOADING_POSTS: { ...state, posts: [], isLoading: true, error: false },
    GET_POSTS: { ...state, posts: action.payload, isLoading: false, error: false },
    PUT_USERS: { ...state, posts: action.payload, isLoading: false, error: false },
    POST_POSTS: { ...state, posts: action.payload, isLoading: false, error: false },
    ERROR_POSTS: { ...state, posts: [], isLoading: false, error: true },
  };

  return cases[action.type] || state;
};
