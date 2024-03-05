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

  const post = useSelector((state: RootState) => state.posts);
  const { id } = useParams<ParamsType>();

  const getPost = () => {
    if (id) {
      PostAPI.getPost(dispatch, id);
    }
  };
  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _id = e.currentTarget.id as unknown as HTMLInputElement;
    const userId = e.currentTarget.userId as unknown as HTMLInputElement;
    const title = e.currentTarget.title as unknown as HTMLInputElement;
    const body = e.currentTarget.body as unknown as HTMLInputElement;
    const data: Post = {
      id: parseInt(_id.value),
      userId: parseInt(userId.value),
      title: title.value,
      body: body.value,
    };
    PostAPI.editPost(dispatch, data);
  };

  useEffect(getPost, [dispatch, id]);
  return (
    <Frame>
      {post.posts &&
        post.posts?.map((post: Post) => (
          <form key={post.id} onSubmit={(e) => sendData(e)}>
            <label>Id:</label>
            <input name="id" className="" defaultValue={post.id} />
            <label>User ID:</label>
            <input name="userId" className="" defaultValue={post.userId} />
            <label>Title:</label>
            <textarea name="title" className="" defaultValue={post.title}></textarea>
            <label>Body:</label>
            <textarea name="body" className="" defaultValue={post.body}></textarea>
            <button className="">- Save -</button>
          </form>
        ))}
      {post.error && <h3>Error, post not found</h3>}
    </Frame>
  );
};

export default PostEdit;
