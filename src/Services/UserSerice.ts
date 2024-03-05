import { config } from './config';
import methods from './service.methods';
import { Dispatch } from './types.d';
const UserService = { 
    getUsers(dispatch: Dispatch):void {
        dispatch({
            type: "ISLOADING_USERS",
            payload: null
        });
        methods.get( config.endpoints.users)
        .then((users) =>{
            dispatch({
                type: "GET_USERS",
                payload: users
            })
        })
        .catch(() =>{
            dispatch({
                type: "ERRO_USERS",
                payload: null
            })
        })
    }
    
}
export default UserService