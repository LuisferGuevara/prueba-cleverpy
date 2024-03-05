import { FC } from "react";
import BurgerMenu from "./BurgerMenu";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__toggler">
        <button>Cambio Color</button>
      </div>
      <BurgerMenu />
      <button className="icon icon--logout"> cerrar sesion??</button>
    </header>
  );
};

export default Header;
