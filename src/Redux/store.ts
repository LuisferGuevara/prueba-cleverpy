import { createStore } from "redux";
import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer);
export default rootReducer;
