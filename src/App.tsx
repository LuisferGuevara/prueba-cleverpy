import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/types";
import verifySession from "./Middlewares/checkSession";
import Header from "./Components/Header";
import RoutesOutlet from "./Routes/RoutesOutlet";
import GoBackButton from "./Components/GoBackButton";
import "./Styles/styles.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state: RootState) => state.login.checked);

  useEffect(() => {
    verifySession(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      {logged && <RoutesOutlet />}
      <GoBackButton />
    </div>
  );
};

export default App;
