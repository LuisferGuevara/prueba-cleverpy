import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Frame from "../Components/Frame";
import { Post } from "../Types/consts";
import PostAPI from "../Services/PostAPI";
import Navbar from "../Components/Navbar";
import AsideBar from "../Components/AsideBar";
import GoBackButton from "../Components/GoBackButton";

const NewPost: FC = () => {
  const dispatch = useDispatch();
  const [isPostCreated, setIsPostCreated] = useState(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Post = {
      id: parseInt(formData.get("id") as string),
      userId: parseInt(formData.get("userId") as string),
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    };
    setIsPostCreated(true);
    PostAPI.createPost(dispatch, data);
  };

  return (
    <>
      <Frame center>
        {isPostCreated && <h3>Post created successfully!</h3>}
        <form className="post--edit__form form" onSubmit={(e) => sendData(e)}>
          <h4 className="form__title">Create a New Post </h4>
          <label className="post--edit__label">Id:</label>
          <input name="id" className="post--edit__input" placeholder="id" />
          <label className="post--edit__label">User ID:</label>
          <input name="userId" className="post--edit__input" placeholder="User ID" />
          <label className="post--edit__label">Title:</label>
          <textarea name="title" className="post--edit__textarea" placeholder="title"></textarea>
          <label className="post--edit__label">Body:</label>
          <textarea
            name="body"
            className="post--edit__textarea textarea--body"
            placeholder="body"
          ></textarea>
          <button className="button button--success">- Save -</button>
        </form>
      </Frame>
      <Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
      <AsideBar showSearch={showSearch} setShowSearch={setShowSearch} />
      <GoBackButton />
    </>
  );
};

export default NewPost;
