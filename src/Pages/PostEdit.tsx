import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../Redux/types";
import Frame from "../Components/Frame";
import { Post } from "../Types/consts";
import PostAPI from "../Services/PostAPI";
import Navbar from "../Components/Navbar";
import AsideBar from "../Components/AsideBar";

type ParamsType = {
  id: string;
};

const PostEdit: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();
  const postState = useSelector((state: RootState) => state.posts);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const getPost = () => {
    if (id) {
      PostAPI.getPost(dispatch, id);
    }
  };

  useEffect(getPost, [dispatch, id]);

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Post = {
      id: parseInt(formData.get("id") as string),
      userId: parseInt(formData.get("userId") as string),
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    };
    PostAPI.editPost(dispatch, data);
  };

  return (
    <>
      <Frame center>
        {postState.posts &&
          postState.posts.map((post: Post) => (
            <form key={post.id ? post.id.toString() : ""} className="form post--edit" onSubmit={(e) => sendData(e)}>
              <h4>Edit this post</h4>
              <label className="post--edit__label">
                {" "}
                Post Id:
                <input name="id" className="post--edit__input" defaultValue={post.id ? post.id.toString() : ""} />
              </label>
              <label className="post--edit__label">
                User ID:
                <input
                  name="userId"
                  className="post--edit__input"
                  defaultValue={post.userId ? post.userId.toString() : ""}
                />
              </label>
              <label className="post--edit__label">Title:</label>
              <textarea
                name="title"
                className="post--edit__textarea"
                defaultValue={post.title ? post.title.toString() : ""}
              ></textarea>
              <label className="post--edit__label">Body:</label>
              <textarea
                name="body"
                className="post--edit__textarea textarea--body"
                defaultValue={post.body}
              ></textarea>
              <button className="button button--success">- Save -</button>
            </form>
          ))}
        {postState.error && <h3>Error, post not found</h3>}
        <Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
        <AsideBar showSearch={showSearch} setShowSearch={setShowSearch} />
      </Frame>
    </>
  );
};

export default PostEdit;
