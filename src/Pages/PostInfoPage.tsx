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
  const { id } = useParams<ParamsType>();

  const postState = useSelector((state: RootState) => state.posts);
  const usersState = useSelector((state: RootState) => state.users.users);
  const commentsState = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    if (id) {
      PostAPI.getPost(dispatch, id);
      UserAPI.getUsers(dispatch);
      CommentAPI.getComments(dispatch, id);
    }
  }, [dispatch, id]);

  const generateRandomDate = (): string => {
    const randomMilliseconds = Math.floor(Math.random() * 315360000000);
    const randomDate = new Date(Date.now() - randomMilliseconds);
    return `${randomDate.getDate()}/${randomDate.getMonth() + 1}/${randomDate.getFullYear()}`;
  };

  return (
    <Frame>
      <section className="post-info">
        {postState.posts &&
          postState.posts.map((post: Post) => (
            <div key={post.id} className="post-info__container">
              <div className="post-info__author-info">
                <p className="post-info__author">Author: {getUsername(usersState, post)}</p>
                <p className="post-info__user-id">User ID: ({post.userId})</p>
              </div>
              <article className="post-info__post card">
                <header>
                  <h3 className="post-info__title">{post.title}</h3>
                  <p className="post-info__id">{post.id}</p>
                  <div className="post-info__date">{generateRandomDate()}</div>
                </header>
                <main>
                  <p className="post-info__body">{post.body}</p>
                </main>
                <footer className="post-info__action">
                  <div className="post-info__btn-action btn-action">
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
        {postState.error && <h3>Error, data not found</h3>}
      </section>
      <section className="comments">
        <h3 className="comments__title">Comments: </h3>
        {commentsState.comments &&
          commentsState.comments.map((comment: Comment) => (
            <article key={comment.id} className="comments__comment card">
              <header>
                <h3 className="comments__name">{comment.name}</h3>
              </header>
              <main>
                <p className="comments__body">{comment.body}</p>
              </main>
              <footer>
                <p className="comments__author">Written by: {comment.email}</p>
              </footer>
            </article>
          ))}
        {commentsState.error && <h3>Error, comments not found</h3>}
      </section>
    </Frame>
  );
};

export default PostInfoPage;
