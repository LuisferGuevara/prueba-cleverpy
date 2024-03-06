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
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

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
    <Frame>

      <form className="login-form form"  onSubmit={onSubmit}>
        <p> Please Log in to Dashboard</p>
        {loginError && <div className="login-form__error">User not found!</div>}
        <input placeholder="Username" {...register("username", { required: true })} className="login-form__input" />
        {errors.username && <span className="login-form__error-message">Username Required</span>}
        <input placeholder="Password" {...register("password", { required: true })} type="password" className="login-form__input" />
        {errors.password && <span className="login-form__error-message">Password Required</span>}
        <button className="login-form__button">Go in!</button>
      </form>
    </Frame>
  );
};

export default LoginPage;
