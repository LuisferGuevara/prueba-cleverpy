import { Dispatch, FC, SetStateAction} from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";
import LoginAPI from "../Services/LoginApi";
import { useDispatch } from "react-redux";


type NavbarProps = {
    showSearch: boolean;
    setShowSearch: Dispatch<SetStateAction<boolean>>;
};


const Navbar: FC<NavbarProps> = ({showSearch, setShowSearch }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const handleSearchInput = () =>{
        setShowSearch(!showSearch);
        window.scrollTo(0,0)
    }
    const logoutAction = () => {
      LoginAPI.logout(dispatch);
      navigate(ROUTES.LOGIN);
    };
  return (
    <nav className="navbar">
      <div>
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearchInput}></i>
      </div>
      <div>
        <i className="fa-solid fa-square-plus" onClick={() => navigate(ROUTES.NEW_POST)}></i>
      </div>
      
      <div>
        {" "}
        <i className="fa-solid fa-user" onClick={() => navigate(ROUTES.PROFILE)}></i>
      </div>
       <div className="icon icon--logout" onClick={logoutAction}>
        {" "}
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </nav>
  );
};

export default Navbar;
