import { LoggedUser } from "../Types/consts";
import { rootReducer } from "./store";

export type StateType = {
  isLoading: boolean;
  error: boolean;
  posts?: [] | null;
  users?: [] | null;
  comments?: [] | null;
  loggedUser?: LoggedUser | null;
  logged?: boolean;
  checked?: boolean;
};

export type ActionType = {
  type: string;
  payload?: [] | null;
  loggedUser?: LoggedUser | null;
};

export type RootState = ReturnType<typeof rootReducer>;
