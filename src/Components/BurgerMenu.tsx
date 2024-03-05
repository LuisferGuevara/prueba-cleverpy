import { FC } from "react";

const BurgerMenu: FC = () => {
  return (
    <div className="menu">
      <div className={"menu__burger"}>
        <div className="menu__burger">-</div>
        <div className="menu__burger">-</div>
        <div className="menu__burger">-</div>
      </div>
      <div className={"menu__list"}>
        <div className="btn-action btn-action--menu btn-action--logout">Log out</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
