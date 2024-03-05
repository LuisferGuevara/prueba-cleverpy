import React, { FC } from 'react';
import { Post } from '../Types/consts';



type PostCardType = {
    children?: React.ReactNode;
    post: Post;
};

const Card: FC<PostCardType> = ({ post}) => {

    return (
        <div className="card card-post">
        <div className="card__title">{post.title}</div>
          <div className="card__body">{post.body}</div>
          <div className="card__author">Author: {post.author}</div>
          <div className="card__id">Id:({post.userId}) </div>
          <div className="card__action">
            <div className="btn-action">
              Edit <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="btn-action">
              Delete <i className="fa-solid fa-delete-left"></i>
            </div>
          </div>
        </div>
    );
};

export default Card;
