import { Dispatch } from "./types";

import { config } from "./config";

import { Post } from "../Types/consts";
import serviceMethods from "./service.methods";

const PostApi = {
  getPosts(dispatch: Dispatch): void {
    dispatch({
      type: "ISLOADING_POSTS",
      payload: null,
    });
    serviceMethods
      .get(config.endpoints.posts)
      .then((posts: []) => {
        const localPosts: [] = JSON.parse(localStorage.getItem("posts") || "[]");
        const result = [...posts, ...localPosts] as [];
        dispatch({
          type: "GET_POSTS",
          payload: result,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR_POSTS",
          payload: null,
        });
      });
  },
  getPost(dispatch: Dispatch, id: string): void {
    dispatch({
      type: "LOAD_POSTS",
      payload: null,
    });
    serviceMethods
      .get(config.endpoints.posts + `/${id}`)
      .then((post: Post) => {
        const result = [];
        result.push(post);
        dispatch({
          type: "GET_POSTS",
          payload: result as [],
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR_POSTS",
          payload: null,
        });
      });
  },
};

export default PostApi;
