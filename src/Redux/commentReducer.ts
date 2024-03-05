import { ActionType, StateType } from "./types";

const INITAL_STATE: StateType = {
  comments: [],
  isLoading: false,
  error: false,
};

export const commentReducer = (state = INITAL_STATE, action: ActionType): StateType => {
    const cases: Record<string, StateType> = {
        ISLOADING_COMMENTS: { ...state, comments: [], isLoading: true, error: false},
        GET_COMMENTS: { ...state, comments: action.payload, isLoading: false, error: false},
        ERROR_COMMENTS: { ...state, comments: [], isLoading: false, error: true}
    }

    return cases[action.type] || state
};
