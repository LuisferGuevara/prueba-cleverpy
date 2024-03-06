import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Frame from "../Components/Frame";
import LoginAPI from "../Services/LoginApi";

type FormData = {
  username: string;
  password: string;
};

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    try {
      LoginAPI.login(dispatch, data);
      setLoggedIn(true);
    } catch (error) {
      setLoginError(true);
    }
  });

  if (loggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <Frame center>
      <form className="form--login form" onSubmit={onSubmit}>
        <p className="form__title form__title--login"> Login to Dashboard</p>
        {loginError && <div className="form__error">User not found!</div>}
        <input
          placeholder="Username"
          {...register("username", { required: true })}
          className="form--login__input"
        />
        {errors.username && <span className="form__error">Username Required</span>}
        <input
          placeholder="Password"
          {...register("password", { required: true })}
          type="password"
          className="form--login__input"
        />
        {errors.password && <span className="form__error">Password Required</span>}
        <div className="button__wrapper">
          <button className="button button--login">Go in!</button>
        </div>
      </form>
    </Frame>
  );
};

export default LoginPage;
