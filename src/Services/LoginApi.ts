import { LoggedUser } from "../Types/consts.d"; 
import { config } from "./config";
import { Dispatch } from "./types";

const LoginAPI = {
  login(dispatch: Dispatch, user: LoggedUser): void {
    dispatch({
      type: "IS_LOADING_LOGIN", 
      loggedUser: null,
    });

    if (user.username === config.admin.username && user.password === config.admin.password) {
      setTimeout(() => {
        window.localStorage.setItem("token", config.admin.token);
        dispatch({
          type: "POST_LOGIN",
          loggedUser: user,
        });
      }, 1000);

    } else {
      dispatch({
        type: "ERROR_LOGIN",
        loggedUser: null,
      });
    }
  },

  checkLogin(dispatch: Dispatch, token?: string | null): void {
    if (token) {
      dispatch({
        type: "CHECK_LOGIN",
        loggedUser: { username: config.admin.username, id: config.admin.id },
      });
    }
  },

  logout(dispatch: Dispatch): void {
    window.localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT_LOGIN",
    });
  },
};

export default LoginAPI;
