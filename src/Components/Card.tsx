import React, { FC } from "react";
import { Post } from "../Types/consts";
import { Link, useNavigate } from "react-router-dom";
import getUsername from "../Utils/getUsername";
import { useDispatch } from "react-redux";
import PostApi from "../Services/postApi";

type PostCardType = {
  children?: React.ReactNode;
  post: Post;
  posts: [];
  users: [] | null | undefined;
};

const Card: FC<PostCardType> = ({ post, users, posts }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletePost = (id: number, posts: []) => {
    PostApi.deletePost(dispatch, id, posts);
};

  return (
    <article className="card card-post">
      <header>
        <Link to={`/post/${post.id}`} className="card__link">
          <i className="fa-solid fa-angles-right"></i>
        </Link>
        <h3 className="card__title">{post.title}</h3>
      </header>
      <main>
        <p className="card__body">{post.body}</p>
        <p className="card__author">Author: {getUsername(users, post)}</p>
        <p className="card__id">Id:({post.userId}) </p>
      </main>
      <footer className="card__action">
        <div className="btn-action">
          Edit{" "}
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => navigate(`/post/edit/${post.id}`)}
          ></i>
        </div>
        <div className="btn-action">
          Delete <i className="fa-solid fa-delete-left"  onClick={() => deletePost(post.id, posts)}></i>
   
        </div>
      </footer>
    </article>
  );
};

export default Card;
