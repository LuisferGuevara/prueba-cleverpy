import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Frame from "../Components/Frame";
import { Post } from "../Types/consts";
import PostAPI from "../Services/PostAPI";
import Navbar from "../Components/Navbar";
import AsideBar from "../Components/AsideBar";

const NewPost: FC = () => {
  const dispatch = useDispatch();
  const [isPostCreated, setIsPostCreated] = useState(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);


  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Post = {
      id: parseInt(formData.get('id') as string),
      userId: parseInt(formData.get('userId') as string),
      title: formData.get('title') as string,
      body: formData.get('body') as string,
    };
    setIsPostCreated(true);
    PostAPI.createPost(dispatch, data);
  };

  return (
    <>
    <Frame>
      {isPostCreated && <h3>Post created successfully</h3>}
      <form className="new-post__form form" onSubmit={(e) => sendData(e)}>
        <label className="new-post__label">Id:</label>
        <input name="id" className="new-post__input" placeholder="id" />
        <label className="new-post__label">User ID:</label>
        <input name="userId" className="new-post__input" placeholder="User ID" />
        <label className="new-post__label">Title:</label>
        <textarea name="title" className="new-post__textarea" placeholder="title"></textarea>
        <label className="new-post__label">Body:</label>
        <textarea name="body" className="new-post__textarea" placeholder="body"></textarea>
        <button className="new-post__button">- Save -</button>
      </form>
    </Frame>
    <Navbar showSearch={showSearch} setShowSearch={setShowSearch}/>
      <AsideBar showSearch={showSearch} setShowSearch={setShowSearch}/>
 
    </>
  );
};

export default NewPost;
