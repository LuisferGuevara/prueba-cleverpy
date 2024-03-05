import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../Redux/types";
import Frame from "../Components/Frame";
import { Post } from "../Types/consts";
import PostAPI from "../Services/PostAPI";


type ParamsType = {
  id: string;
};

const PostEdit: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();
  const postState = useSelector((state: RootState) => state.posts);

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
      id: parseInt(formData.get('id') as string),
      userId: parseInt(formData.get('userId') as string),
      title: formData.get('title') as string,
      body: formData.get('body') as string,
    };
    PostAPI.editPost(dispatch, data);
  };

  return (
    <Frame>
      {postState.posts &&
        postState.posts.map((post: Post) => (
          <form key={post.id} className="post-edit__form" onSubmit={(e) => sendData(e)}>
            <label className="post-edit__label">Id:</label>
            <input name="id" className="post-edit__input" defaultValue={post.id.toString()} />
            <label className="post-edit__label">User ID:</label>
            <input name="userId" className="post-edit__input" defaultValue={post.userId.toString()} />
            <label className="post-edit__label">Title:</label>
            <textarea name="title" className="post-edit__textarea" defaultValue={post.title}></textarea>
            <label className="post-edit__label">Body:</label>
            <textarea name="body" className="post-edit__textarea" defaultValue={post.body}></textarea>
            <button className="post-edit__button">- Save -</button>
          </form>
        ))}
      {postState.error && <h3>Error, post not found</h3>}
    </Frame>
  );
};

export default PostEdit;
