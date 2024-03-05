import { createStore } from "redux";
import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";
import { commentReducer } from "./commentReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  comments: commentReducer
});

export const store = createStore(rootReducer);
