import { rootReducer } from "./store";

export type StateType = {
  posts?: [] | null;
  isLoading: boolean;
  error: boolean;
  users?: [] | null;
};

export type ActionType = {
  type: string;
  payload?: [] | null;
};

export type RootState = ReturnType<typeof rootReducer>;
