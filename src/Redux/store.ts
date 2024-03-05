import { createStore } from "redux";
import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

export const store = createStore(rootReducer);
export default rootReducer;
