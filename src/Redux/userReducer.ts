import { ActionType, StateType } from './types.d';

const initialState: StateType = {
    users: [],
    isLoading: true,
    error: false
}

export const userReducer = (state = initialState, action: ActionType): StateType =>{
    const cases: Record<string, StateType> = {
        ISLOADING_USERS: { ...state, users: [], isLoading: true, error: false},
        GET_USERS: { ...state, users: action.payload, isLoading: false, error: false},
        ERROR_USERS: { ...state, users: [], isLoading: false, error: true}
    }
    return cases[action.type] || state;
}
