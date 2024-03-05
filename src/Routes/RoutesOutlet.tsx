import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import PostInfoPage from "../Pages/PostInfoPage";



const RoutesOutlet: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/post/:id" element={<PostInfoPage/>}/>
    </Routes>
  );
};

export default RoutesOutlet;
