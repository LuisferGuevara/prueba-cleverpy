import { FC } from "react";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import "./Styles/styles.scss"

const App: FC = () => {
  // TODO: fetch post, render cards, filter?, find users and comments
  return (
    <div className="app">
      <Header/>

      <Posts/>

    
    </div>
  );
};

export default App;
