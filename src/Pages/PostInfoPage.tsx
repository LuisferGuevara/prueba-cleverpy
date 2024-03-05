import { FC, useEffect } from "react";
import Frame from "../Components/Frame";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import { Comment, Post } from "../Types/consts";
import getUsername from "../Middlewares/getUsername";
import { useNavigate, useParams } from "react-router-dom";

import UserAPI from "../Services/UserAPI";
import CommentAPI from "../Services/CommentAPI";
import PostAPI from "../Services/PostAPI";
type ParamsType = {
  id: string;
};

const PostInfoPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state: RootState) => state.posts);
  const users = useSelector((state: RootState) => state.users.users);
  const comments = useSelector((state: RootState) => state.comments);
  const { id } = useParams<ParamsType>();

  const getPost = () => {
    if (id) {
      PostAPI.getPost(dispatch, id);
      UserAPI.getUsers(dispatch);
      CommentAPI.getComments(dispatch, id);
    }
  };
  const generateRandomDate = (): string => {
    const randomMilliseconds = Math.floor(Math.random() * 315360000000);
    const randomDate = new Date(Date.now() - randomMilliseconds);
    const formattedDate = `${randomDate.getDate()}/${
      randomDate.getMonth() + 1
    }/${randomDate.getFullYear()}`;
    return formattedDate;
  };

  useEffect(getPost, [dispatch, id]);
  return (
    <Frame>
      <section>
        {post.posts &&
          post.posts.map((post: Post) => (
            <div key={post.id}>
              <div>
                <p className="card__author">Author: {getUsername(users, post)}</p>
                <p className="card__id">User ID:({post.userId}) </p>
              </div>
              <article className="card card-post">
                <header>
                  <h3 className="card__title">{post.title}</h3>
                  <p>{post.id}</p>
                  <div className="post__date">{generateRandomDate()}</div>
                </header>
                <main>
                  <p className="card__body">{post.body}</p>
                </main>
                <footer className="card__action">
                  <div className="btn-action">
                    Edit{" "}
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => navigate(`/post/edit/${post.id}`)}
                    ></i>
                  </div>
                </footer>
              </article>
            </div>
          ))}
        {post.error && <h3>Error, data not found</h3>}
      </section>
      <section>
        <h3>Coments: </h3>

        {comments.comments &&
          comments.comments?.map((comment: Comment) => (
            <article key={comment.id} className="card ">
              <header>
                <h3>{comment.name}</h3>
              </header>
              <main>
                <p>{comment.body}</p>
              </main>
              <footer>
                <p>Written by: {comment.email}</p>
              </footer>
            </article>
          ))}
        {comments.error && <h3>Error, comments not found</h3>}
      </section>
    </Frame>
  );
};
export default PostInfoPage;
