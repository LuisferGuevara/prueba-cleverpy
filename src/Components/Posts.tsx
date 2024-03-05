import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import PostService from "../Services/CardsService";
import Frame from "./Frame";
import Card from "./Card";
import { Post } from "../Types/consts";

const Posts: FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.posts.posts);
  const getData = () => {
    PostService.getPosts(dispatch);
  };

  useEffect(getData, [dispatch]);

  return (
    <>
      <Frame>
        {posts && (
          <div className="card__wrapper">
            {posts
              .map((post: Post, i) => (
                <Card key={i}  posts={posts} post={post} />
              ))}
          </div>
        )}
      </Frame>
    </>
  );
};

export default Posts;
