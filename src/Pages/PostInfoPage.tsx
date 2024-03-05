import { FC, useEffect } from "react";
import Frame from "../Components/Frame";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import { Post } from "../Types/consts";
import getUsername from "../Utils/getUsername";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../Services/CardsService";
import UserService from "../Services/UserSerice";
type ParamsType = {
  id: string;
};

const PostInfoPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state: RootState) => state.posts);
  const users = useSelector((state: RootState) => state.users.users);
  const { id } = useParams<ParamsType>();

  const getPost = () => {
    if (id) {
      PostService.getPost(dispatch, id);
      UserService.getUsers(dispatch);
    }
  };
  useEffect(getPost, [dispatch, id]);
  return (
    <Frame>
      <div>
        {post.posts &&
          post.posts.map((post: Post) => (
            <>
              <div>
                <p className="card__author">Author: {getUsername(users, post)}</p>
                <p className="card__id">User ID:({post.userId}) </p>
              </div>
              <article key={post.id} className="card card-post">
                <header>
                  <h3 className="card__title">{post.title}</h3>
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
            </>
          ))}
        {post.error && <h3>Error, data not found</h3>}
      </div>
    </Frame>
  );
};
export default PostInfoPage;
