import { FC } from "react";
import BurgerMenu from "./BurgerMenu";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1>My Cool Posts</h1>
      <div className="header__toggler">
        <button>Cambio Color</button>
      </div>
      <div className="header__toggler">
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}></i>
      </div>
      <div className="header__toggler">
      <i className="fa-solid fa-square-plus" onClick={() => navigate("/newpost")}></i>

      </div>
      <BurgerMenu />
      <button className="icon icon--logout"> cerrar sesion??</button>
    </header>
  );
};

export default Header;
