import React, { FC } from "react";
import { Post } from "../Types/consts";
import { Link, useNavigate } from "react-router-dom";
import getUsername from "../Utils/getUsername";

type PostCardType = {
  children?: React.ReactNode;
  post: Post;
  posts: [];
  users: [] | null | undefined;
};

const Card: FC<PostCardType> = ({ post, users }) => {
  const navigate = useNavigate();

  return (
    <div className="card card-post">
      <Link to={`/post/${post.id}`} className="card__link">
        <i className="fa-solid fa-angles-right"></i>
      </Link>
      <div className="card__title">{post.title}</div>
      <div className="card__body">{post.body}</div>
      <div className="card__author">Author: {getUsername(users, post)}</div>
      <div className="card__id">Id:({post.userId}) </div>
      <div className="card__action">
        <div className="btn-action">
          Edit{" "}
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => navigate(`/post/edit/${post.id}`)}
          ></i>
        </div>
        <div className="btn-action">
          {/* Delete <i className="fa-solid fa-delete-left" onClick={deletePost(post.id, posts)}></i> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
