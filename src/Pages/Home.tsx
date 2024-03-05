import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import Frame from "../Components/Frame";
import Card from "../Components/Card";
import UserService from "../Services/UserAPI";
import PostAPI from "../Services/PostAPI";
import { Post } from "../Types/consts";
import { shuffleAPI } from "../Utils/shuffleApi";

const HomePage: FC = () => {
  const [randomizedPosts, setRandomizedPosts] = useState<Post[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsError = useSelector((state: RootState) => state.posts.error);
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    posts && setRandomizedPosts(shuffleAPI(posts));
  }, [posts]);

  const filterPosts = (post: Post) => {
    const normalizedSearchText = searchText.toLowerCase();
    return (
      post.title?.toLowerCase().includes(normalizedSearchText) ||
      post.body?.toLowerCase().includes(normalizedSearchText) ||
      post.author?.toLowerCase().includes(normalizedSearchText) ||
      post.userId?.toString().includes(normalizedSearchText)
    );
  };

  const getData = () => {
    PostAPI.getPosts(dispatch);
    UserService.getUsers(dispatch);
  };

  useEffect(getData, [dispatch]);

  return (
    <Frame>
      <input
        className="input input--search"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <p className="total-posts">Total:{posts?.length}</p>
      {!postsError && posts && (
        <div className="card-wrapper">
          {randomizedPosts.filter(filterPosts).map((post: Post) => (
            <Card key={post.id} post={post} posts={posts} users={users} />
          ))}
        </div>
      )}
      {postsError && <h3>Error, data not found</h3>}
    </Frame>
  );
};

export default HomePage;
