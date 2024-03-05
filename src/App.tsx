import { FC, useEffect } from "react";
import Header from "./Components/Header";

import RoutesOutlet from "./Routes/RoutesOutlet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/types";
import checkSession from "./Middlewares/checkSession";
import "./Styles/styles.scss";
import GoBackButton from "./Components/GoBackButton";

const App: FC = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state: RootState) => state.login.checked);

  useEffect(() => {
    checkSession(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      {logged && <RoutesOutlet />}
      <GoBackButton/>
    </div>
  );
};

export default App;
