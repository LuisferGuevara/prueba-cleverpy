import { FC } from "react";
import Header from "./Components/Header";

import "./Styles/styles.scss";
import RoutesOutlet from "./Routes/RoutesOutlet";

const App: FC = () => {
  // TODO: fetch post, render cards, filter?, find users and comments
  return (
    <div className="app">
      <Header />
      <RoutesOutlet />
    </div>
  );
};

export default App;
