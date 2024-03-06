import { Dispatch, FC, SetStateAction, useState } from "react";
import ColorSwitcher from "./ColorSwitcher";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginAPI from "../Services/LoginApi";
import { ROUTES } from "../Routes/routes";

type AsideBarProps = {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
};

export const AsideBar: FC<AsideBarProps> = ({ showSearch, setShowSearch }) => {
  const [isLightMode, setIsLightMode] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchInput = () => {
    setShowSearch(!showSearch);
    window.scrollTo(0, 0);
  };

  const logoutAction = () => {
    LoginAPI.logout(dispatch);
    navigate(ROUTES.LOGIN);
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (isLightMode) {
      const body$$ = document.querySelector('body');
      body$$?.toggleAttribute('data-dark-mode');

    }
  };
  return (
    <ul className="sidebar">
      <li>
      < i className="fa-solid fa-house" onClick={() => navigate(ROUTES.HOME)} />
      </li>
      <li>
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearchInput} />
      </li>
      <li>
        <i className="fa-solid fa-square-plus" onClick={() => navigate(ROUTES.NEW_POST)} />
      </li>
      <li>
        <i className="fa-solid fa-user" onClick={() => navigate(ROUTES.PROFILE)} />
      </li>
      <li>
        <ColorSwitcher onToggleTheme={toggleTheme} isLightMode={isLightMode} />
      </li>
      <li>
        <i className="fa-solid fa-right-from-bracket" onClick={logoutAction} />
      </li>
    </ul>
  );
};

export default AsideBar;
