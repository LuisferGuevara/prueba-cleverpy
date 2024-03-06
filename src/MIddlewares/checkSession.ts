import LoginAPI from "../Services/LoginApi";
import { Dispatch } from "../Services/types";

function verifySession(dispatch: Dispatch): void {
  try {
    const localUser: string | null = window.localStorage.getItem("token");
    LoginAPI.checkLogin(dispatch, localUser);
    dispatch({
      type: "CHECKED_LOGIN",
    });
  } catch (error) {
    console.error("Error verifying session:", error);
  }
}
export default verifySession;
