import { FC } from "react";
import BurgerMenu from "./BurgerMenu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import LoginAPI from "../Services/LoginApi";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logged = useSelector((state: RootState) => state.login.logged);
  const logoutAction = () => {
    LoginAPI.logout(dispatch);
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>My Cool Posts</h1>
      <div className="header__toggler">
        <button>Cambio Color</button>
      </div>
      {logged && (
        <>
          <div className="header__toggler">
            <i className="fa-solid fa-user" onClick={() => navigate("/profile")}></i>
          </div>
          <div className="header__toggler">
            <i className="fa-solid fa-square-plus" onClick={() => navigate("/newpost")}></i>
          </div>
          <BurgerMenu />
          <button className="icon icon--logout" onClick={logoutAction}>
            {" "}
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
