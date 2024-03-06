import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

import HomePage from "../Pages/Home";
import PostInfoPage from "../Pages/PostInfoPage";
import PostEdit from "../Pages/PostEdit";
import Profile from "../Pages/Profile";
import NewPost from "../Pages/NewPost";
import LoginPage from "../Pages/LoginPage";

const RoutesOutlet: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.POST_INFO} element={<PostInfoPage />} />
      <Route path={ROUTES.POST_EDIT} element={<PostEdit />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.NEW_POST} element={<NewPost />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
    </Routes>
  );
};

export default RoutesOutlet;
