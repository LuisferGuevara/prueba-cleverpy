import { config } from "./config";
import serviceMethods from "./service.methods";
import { Dispatch } from "./types.d";

const CommentAPI = {
  getComments(dispatch: Dispatch, id: number | string): void {
    dispatch({
      type: "IS_LOADING_COMMENTS",
      payload: null,
    });
    serviceMethods
      .get(config.endpoints.posts + `/${id}/comments`)
      .then((comments: []) => {
        dispatch({
          type: "GET_COMMENTS",
          payload: comments,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR_COMMENTS",
          payload: null,
        });
      });
  },
};
export default CommentAPI;
