import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

import HomePage from "../Pages/Home";
import PostInfoPage from "../Pages/PostInfoPage";
import PostEdit from "../Pages/PostEdit";
import Profile from "../Pages/Profile";
import NewPost from "../Pages/NewPost";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const RoutesOutlet: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<PrivateRoute><HomePage/></PrivateRoute>} />
      <Route path={ROUTES.POST_INFO} element={<PrivateRoute><PostInfoPage/></PrivateRoute>} />
      <Route path={ROUTES.POST_EDIT} element={<PrivateRoute><PostEdit/></PrivateRoute>}/>
      <Route path={ROUTES.PROFILE} element={<PrivateRoute><Profile/></PrivateRoute>} />
      <Route path={ROUTES.NEW_POST} element={<PrivateRoute><NewPost/></PrivateRoute>} />
      <Route path={ROUTES.LOGIN} element={<PublicRoute><LoginPage/></PublicRoute>} />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
    </Routes>
  );
};

export default RoutesOutlet;
