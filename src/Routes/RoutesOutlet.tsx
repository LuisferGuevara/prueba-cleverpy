import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import PostInfoPage from "../Pages/PostInfoPage";
import PostEdit from "../Pages/PostEdit";
import Profile from "../Pages/Profile";
import NewPost from "../Pages/NewPost";

const RoutesOutlet: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/post/:id" element={<PostInfoPage />} />
      <Route path="post/edit/:id" element={<PostEdit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newpost" element={<NewPost/>}/>
    </Routes>
  );
};

export default RoutesOutlet;
