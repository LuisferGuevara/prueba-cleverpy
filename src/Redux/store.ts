import { createStore } from "redux";
import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";
import { commentReducer } from "./commentReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  comments: commentReducer,
  loging: loginReducer
});

export const store = createStore(rootReducer);
