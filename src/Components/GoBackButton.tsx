import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoBackButton: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [goBack, setGoBack] = useState<boolean>(true);

  const handleGoBack = () => {
    const route = location.pathname.replace(/^\//, "");
    if (route === "home" || route === "login") {
      setGoBack(false);
    } else {
      setGoBack(true);
    }
  };

  useEffect(() => {
    handleGoBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      {goBack && (
        <button onClick={() => navigate("/home")}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
    </>
  );
};

export default GoBackButton;
