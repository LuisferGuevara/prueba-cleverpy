import React, { FC } from "react";
import { Post } from "../Types/consts";
import { Link, useNavigate } from "react-router-dom";
import getUsername from "../Middlewares/getUsername";

type PostCardType = {
  children?: React.ReactNode;
  post: Post;
  posts: [];
  users: [] | null | undefined;
};

const Card: FC<PostCardType> = ({ post, users }) => {
  const navigate = useNavigate();

  return (
    <article className="card card--post">
      <header className="card--header">
        <h3 className="card__title">{post.title}</h3>
        <Link to={`/post/${post.id}`} className="card--link" key={post.id}>
        <i className="fa-solid fa-plus"></i>
        </Link>
      </header>
      <main>
        <p className="card__body">{post.body}</p>
        <div className="">
        <p className="card__author">By: {getUsername(users, post)} </p>
        </div>
      </main>
      <footer className="card__action">
        <div className="btn-action" onClick={() => navigate(`/post/edit/${post.id}`)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="btn-action" >
        <i className="fa-solid fa-x"></i>
        </div>
      </footer>
    </article>
  );
};

export default Card;
