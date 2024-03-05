import { Dispatch } from "./types";
import serviceMethods from "./service.methods";
import { Post } from "../Types/consts";
import { config } from "./config";

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
  editPost(dispatch: Dispatch, data: Post): void {
    // FUNCTION JUST TO SHOW, NOT WORKING

    dispatch({
      type: "LOAD_POSTS",
      payload: null,
    });
    // "call" methodsServices -- PUT METHOD
    const result = [data] as unknown as [];
    dispatch({
      type: "EDIT_POSTS",
      payload: result,
    });
  },
  deletePost(dispatch: Dispatch, id: number, posts: []): void {
    // FUNCTION JUST TO SHOW, NOT WORKING
    dispatch({
      type: "ISLOADING_POSTS",
      payload: null,
    });
    // "call" methodsServices -- DELETE METHOD
    const postIndex: number = posts.findIndex((post: Post) => post.id === id);
    posts.splice(postIndex, 1);
    dispatch({
      type: "GET_POSTS",
      payload: posts,
    });
  },
};

export default PostApi;
