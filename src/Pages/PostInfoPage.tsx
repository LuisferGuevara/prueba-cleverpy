import { FC, useEffect, useState } from "react";
import Frame from "../Components/Frame";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import { Comment, Post } from "../Types/consts";
import getUsername from "../Middlewares/getUsername";
import { useNavigate, useParams } from "react-router-dom";
import UserAPI from "../Services/UserAPI";
import CommentAPI from "../Services/CommentAPI";
import PostAPI from "../Services/PostAPI";
import Navbar from "../Components/Navbar";
import AsideBar from "../Components/AsideBar";

type ParamsType = {
  id: string;
};

const PostInfoPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();

  const [showSearch, setShowSearch] = useState<boolean>(false);

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
    <>
      <Frame>
        <section className="post--info__wrapper">
          {postState.posts &&
            postState.posts.map((post: Post) => (
              <article className="post--info__post card">
                <header className="post--info__header">
                  <h3 className="post--info__title">{post.title}</h3>
                  <p className="post--info__id">
                    <span>Post: #{post.id}</span>
                  </p>
                  <div className="post--info__date">
                    Date: <span>{generateRandomDate()}</span>
                  </div>
                  <div className="post--info__author-info ">
                    <p>
                      Post Author: <span>{getUsername(usersState, post)}</span>
                    </p>
                    <p>
                      Author ID: <span>{post.userId}</span>
                    </p>
                  </div>
                </header>
                <main>
                  <p className="post--info__body">{post.body}</p>
                </main>
                <footer className="post--info__action">
                  <div className="post--info__btn-action btn-action">
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => navigate(`/post/edit/${post.id}`)}
                    ></i>
                  </div>
                </footer>
              </article>
            ))}
          {postState.error && <h3>Error, data not found</h3>}
        </section>

        <section className="comments">
          <h3 className="comments__title">Comments: </h3>
          {commentsState.comments &&
            commentsState.comments.map((comment: Comment) => (
              <article key={`${comment.id}-${comment.name}`} className="comments comments__card ">
                <header className="comments__header">
                  <h4 className="comments__author">Written by: {comment.email}</h4>
                  <h4 className="comments__name">{comment.name}</h4>
                </header>
                <main className="comments__body">
                  <p >{comment.body}</p>
                </main>
                <footer className="comments__action">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <i className="fa-solid fa-reply"></i>
                  <i className="fa-solid fa-paper-plane"></i>
                </footer>
              </article>
            ))}
          {commentsState.error && <h3>Error, comments not found</h3>}
        </section>
      </Frame>
      <Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
      <AsideBar showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default PostInfoPage;
