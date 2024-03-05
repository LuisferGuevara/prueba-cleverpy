
import LoginAPI from '../Services/LoginApi';
import { Dispatch } from '../Services/types';

function checkSession(dispatch: Dispatch): void {
    const localUser: string | null = window.localStorage.getItem('token');
    LoginAPI.checkLogin(dispatch, localUser);
    dispatch({
        type: 'CHECKED_LOGIN'
    });
}

export default checkSession;
