import { Dispatch } from "./types";
import serviceMethods from "./service.methods";
import { Post } from "../Types/consts";
import { config } from "./config";

const PostAPI = {
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
      type: "ISLOADING_POSTS",
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
      type: "ISLOADING_POSTS",
      payload: null,
    });
    // "call" methodsServices -- PUT METHOD
    const result = [data] as unknown as [];
    dispatch({
      type: "PUT_POSTS",
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
  createPost(dispatch: Dispatch, data: Post): void {
    dispatch({
      type: "ISLOADING_POST",
      payload: null,
    });
    const localStoragePosts: [] = JSON.parse(localStorage.getItem("posts") || "[]");
    const newLocalPosts = [...localStoragePosts, data];
    localStorage.setItem("posts", JSON.stringify(newLocalPosts));
    const result = [data] as unknown as [];
    dispatch({
      type: "CREATE_POST",
      payload: result,
    });
  },
};

export default PostAPI;
