import { LoggedUser } from './../Types/consts.d';
import { config } from './config';

import { Dispatch } from "./types";

const LoginAPI = {
  login(dispatch: Dispatch, user: LoggedUser): void {
    dispatch({
      type: "ISLOADING_LOGIN",
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
      console.log("usuario logeado con exito!")
    } else {
      dispatch({
        type: "ERROR_LOGIN",
        loggedUser: null,
      });
    }
  },
  checkSession(dispatch: Dispatch, token?: string | null): void {
    if (token) {
      dispatch({
        type: "CHECK_LOGIN",
        loggedUser: { username: config.admin.username, id: config.admin.id },
      });
    }
  },
  
};

export default LoginAPI;
