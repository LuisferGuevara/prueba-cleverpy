import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/types";

const Loader: FC = () => {
  const loading = useSelector(
    (state: RootState) => state.login.isLoading || state.posts.isLoading || state.comments.isLoading
  );
  return (
    <>
      {loading &&
        <div className="loader--wrapper">
          <span className="loader"></span>
          <p>Loading...</p>
        </div>
      }
    </>
  );
};
export default Loader;
