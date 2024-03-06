import { FC, useState } from "react";
import ColorSwitcher from "./ColorSwitcher";

const Header: FC = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (isLightMode) {
      document.body.classList.add("dark-theme");

      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <header className="header">
      <h1>My Cool Posts</h1>
      <div className="header__icons">
        <div className="header__toggler icon-show ">
          <ColorSwitcher onToggleTheme={toggleTheme} isLightMode={isLightMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
