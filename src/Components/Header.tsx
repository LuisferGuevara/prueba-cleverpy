import { FC, useState } from "react";
import ColorSwitcher from "./ColorSwitcher";

const Header: FC = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (isLightMode) {
    
      const body$$ = document.querySelector('body');
      body$$?.toggleAttribute('data-dark-mode');

    }
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
