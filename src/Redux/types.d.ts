import rootReducer from ".";

export type StateType = {
  posts?: [] | null;
  loading: boolean;
  error: boolean;
};

export type ActionType = {
  type: string;
  payload?: [] | null;
};

export type RootState = ReturnType<typeof rootReducer>;
