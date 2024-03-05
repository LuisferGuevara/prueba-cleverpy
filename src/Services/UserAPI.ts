import { config } from "./config";
import serviceMethods from "./service.methods";

import { Dispatch } from "./types";
const UserAPI = {
  getUsers(dispatch: Dispatch): void {
    dispatch({
      type: "ISLOADING_USERS",
      payload: null,
    });
    serviceMethods
      .get(config.endpoints.users)
      .then((users) => {
        dispatch({
          type: "GET_USERS",
          payload: users,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR_USERS",
          payload: null,
        });
      });
  },
};
export default UserAPI;
