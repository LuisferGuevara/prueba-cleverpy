import { ActionType, StateType } from "./types";

const initialState: StateType = {
  isLoading: false,
  logged: false,
  loggedUser: null,
  checked: false,
  error: false,
};

export const loginReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case "IS_LOADING_LOGIN":
      return { ...state, loggedUser: null, logged: false, isLoading: true, error: false };
    case "POST_LOGIN":
    case "CHECK_LOGIN":
      return {
        ...state,
        loggedUser: action.loggedUser,
        logged: true,
        isLoading: false,
        error: false,
      };
    case "CHECKED_LOGIN":
      return { ...state, isLoading: false, error: false, checked: true };
    case "LOGOUT_LOGIN":
      return { ...state, loggedUser: null, logged: false, isLoading: false, error: false };
    case "ERROR_LOGIN":
      return { ...state, loggedUser: null, logged: false, isLoading: false, error: true };
    default:
      return state;
  }
};
