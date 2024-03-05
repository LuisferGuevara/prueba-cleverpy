import { ActionType, StateType } from "./types";

const initialState: StateType = {
  isLoading: false,
  logged: false,
  loggedUser: null,
  checked: false,
  error: false,
};

export const loginReducer = (state = initialState, action: ActionType): StateType => {
  const cases: Record<string, StateType> = {
    ISLOADING_LOGIN: { ...state, loggedUser: null, logged: false, isLoading: true, error: false },
    POST_LOGIN: {
      ...state,
      loggedUser: action.loggedUser,
      logged: true,
      isLoading: false,
      error: false,
    },
    CHECK_LOGIN: {
      ...state,
      loggedUser: action.loggedUser,
      logged: true,
      isLoading: false,
      error: false,
    },
    CHECKED_LOGIN: { ...state, isLoading: false, error: false, checked: true },
    LOGOUT_LOGIN: { ...state, loggedUser: null, logged: false, isLoading: false, error: false },
    ERROR_LOGIN: { ...state, loggedUser: null, logged: false, isLoading: false, error: true },
  };

  return cases[action.type] || state;
};
