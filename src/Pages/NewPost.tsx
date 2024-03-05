import { FC, useState } from "react";
import Frame from "../Components/Frame";
import { useDispatch } from "react-redux";
import { Post } from "../Types/consts";
import PostApi from "../Services/postApi";

const NewPost: FC = () => {
  const dispatch = useDispatch();
  const [isPostCreated, setIsPostCreated] = useState(false);

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
    setIsPostCreated(true);
    PostApi.createPost(dispatch, data);
  };

  return (
    <Frame>
      {isPostCreated && <h3>Post created successfully</h3>}
      <form onSubmit={(e) => sendData(e)}>
        <label>Id:</label>
        <input name="id" className="" placeholder="id" />
        <label>User ID:</label>
        <input name="userId" className="" placeholder="User ID" />
        <label>Title:</label>
        <textarea name="title" className="" placeholder="title"></textarea>
        <label>Body:</label>
        <textarea name="body" className="" placeholder="body"></textarea>
        <button className="">- Save -</button>
      </form>
    </Frame>
  );
};

export default NewPost;
