import { rootReducer } from "./store";

export type StateType = {
  isLoading: boolean;
  error: boolean;
  posts?: [] | null;
  users?: [] | null;
  comments?: [] | null;
};

export type ActionType = {
  type: string;
  payload?: [] | null;
};

export type RootState = ReturnType<typeof rootReducer>;
