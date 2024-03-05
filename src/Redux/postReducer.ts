import { StateType, ActionType } from './types';

const initialState: StateType = {
    posts: [],
    loading: false,
    error: false
};

export const postReducer = (state = initialState, action: ActionType): StateType => {
  const cases: Record<string, StateType> = {
    LOAD_POSTS: { ...state, posts: [], loading: true, error: false },
    GET_POSTS: { ...state, posts: action.payload, loading: false, error: false },
    EDIT_POSTS: { ...state, posts: action.payload, loading: false, error: false },
    ADD_POSTS: { ...state, posts: action.payload, loading: false, error: false },
    ERROR_POSTS: { ...state, posts: [], loading: false, error: true }
  };

  return cases[action.type] || state;
};

