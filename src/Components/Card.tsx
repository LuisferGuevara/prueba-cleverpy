import React, { FC } from 'react';
import { Post } from '../Types/consts';



type PostCardType = {
    children?: React.ReactNode;
    post: Post;
    posts: [];
};

const Card: FC<PostCardType> = ({ post, posts }) => {

    return (
        <div className="card card-post">
        <div className="card__title">{post.title}</div>
          <div className="card__body">{post.body}</div>
          <div className="card__author">Author: {post.author}{post.id} </div>
          <div className="card__action">
            <div className="btn-action">
              Edit
            </div>
            <div className="btn-action">
              Delete
            </div>
          </div>
        </div>
    );
};

export default Card;
