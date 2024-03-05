import { FC } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";

import "./Styles/styles.scss"

const App: FC = () => {
  // TODO: fetch post, render cards, filter?, find users and comments
  return (
    <div className="app">
      <Header/>

      <Home/>

    
    </div>
  );
};

export default App;
