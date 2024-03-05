import { FC, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/types";
import PostService from "../Services/CardsService";
import Frame from "../Components/Frame";
import Card from "../Components/Card";
import { Post } from "../Types/consts";
import UserService from "../Services/UserSerice";

const Home: FC = () => {
  const [randomizedPosts, setRandomizedPosts] = useState<Post[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsError = useSelector((state: RootState) => state.posts.error);
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    const shuffleArray = (array: Post[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setRandomizedPosts(shuffleArray(posts));
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
    PostService.getPosts(dispatch);
    UserService.getUsers(dispatch);
  };
  useEffect(getData, [dispatch]);

  return (
    <>
      <Frame>
        <input
          className="input input--search"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {!postsError && posts && (
          <div className="card__wrapper">
            {randomizedPosts.filter(filterPosts).map((post: Post) => (
              <Card key={post.id} post={post} posts={posts} users={users} />
            ))}
          </div>
        )}
        {postsError && <h3>Error, data not found</h3>}
      </Frame>
    </>
  );
};

export default Home;
