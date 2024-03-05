import { Dispatch } from "./types.d";

import { config } from "./config";
import methods from "./service.methods";

const PostService = {
  getPosts(dispatch: Dispatch): void {
    dispatch({
      type: "ISLOADING_POSTS",
      payload: null,
    });
    methods
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
};

export default PostService;
