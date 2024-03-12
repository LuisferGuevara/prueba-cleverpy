import { FC, useEffect, useState } from "react";
import ColorSwitcher from "./ColorSwitcher";

const Header: FC = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? savedMode === "light" : true;
  });

  useEffect(() => {
    const body$$ = document.querySelector("body");
    if (body$$) {
      if (isLightMode) {
        body$$.removeAttribute("data-dark-mode");
      } else {
        body$$.setAttribute("data-dark-mode", "true");
      }
    }
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);
  
  const toggleTheme = () => {
    setIsLightMode((prevIsLightMode) => !prevIsLightMode);
  };

  return (
    <header className="header">
      <div className="header--box">
        <div className="header--cool"></div>
        <h1>My Cool Posts</h1>
      </div>
      <div className="header__icon">
        <ColorSwitcher onToggleTheme={toggleTheme} isLightMode={isLightMode} />
      </div>
    </header>
  );
};

export default Header;
