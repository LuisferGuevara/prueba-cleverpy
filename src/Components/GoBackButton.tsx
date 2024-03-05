import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";


const GoBackButton: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showGoBackButton, setShowGoBackButton] = useState<boolean>(true);

  useEffect(() => {
    const route = location.pathname.replace(/^\//, "");
    const shouldShowButton = ![ROUTES.HOME, ROUTES.LOGIN].includes(route);
    setShowGoBackButton(shouldShowButton);
  }, [location]);

  return (
    <>
      {showGoBackButton && (
        <button onClick={() => navigate(ROUTES.HOME)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
    </>
  );
};

export default GoBackButton;
