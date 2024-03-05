import { FC, useState } from "react";
import Frame from "../Components/Frame";
import { useForm } from "react-hook-form";
import LoginAPI from "../Services/LoginApi";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

type FormData = {
  username: string;
  password: string;
};

const LoginPage: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

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
      <h1>MY COOL POST</h1>
      <form onSubmit={onSubmit}>
        <p> Please Log in to Dashboard</p>
        {loginError && <div className="form__error">User not found!</div>}
        <input placeholder="Username" {...register("username", { required: true })} />
        {errors.username && <span>Username Required</span>}
        <input
          placeholder="Password"
          {...register("password", { required: true })}
          type="password"
        />
        {errors.password && <span>Password Required</span>}
        <button>Go in!</button>
      </form>
    </Frame>
  );
};

export default LoginPage;
