import { ActionType, StateType } from "./types";

const INITIAL_STATE: StateType = {
  users: [],
  isLoading: true,
  error: false,
};

export const userReducer = (state = INITIAL_STATE, action: ActionType): StateType => {
  switch (action.type) {
    case "IS_LOADING_USERS":
      return { ...state, users: [], isLoading: true, error: false };
    case "GET_USERS":
      return { ...state, users: action.payload, isLoading: false, error: false };
    case "ERROR_USERS":
      return { ...state, users: [], isLoading: false, error: true };
    default:
      return state;
  }
};
