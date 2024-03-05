import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import PostInfoPage from "../Pages/PostInfoPage";
import PostEdit from "../Pages/PostEdit";
import Profile from "../Pages/Profile";

const RoutesOutlet: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/post/:id" element={<PostInfoPage />} />
      <Route path="post/edit/:id" element={<PostEdit />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesOutlet;
