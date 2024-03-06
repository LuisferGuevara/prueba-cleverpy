import { FC } from "react";

type ColorSwitcherProps = {
  onToggleTheme: () => void;
  isLightMode: boolean;
};

const ColorSwitcher: FC<ColorSwitcherProps> = ({ onToggleTheme, isLightMode }) => {
  return (
    <button onClick={onToggleTheme} className="icon color-switcher">
      {isLightMode ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
};

export default ColorSwitcher;