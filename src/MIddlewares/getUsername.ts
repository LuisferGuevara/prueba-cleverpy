import { Post, User } from "../Types/consts";

function getUsername(users: User[] | null | undefined, post: Post): string {
  const user = users?.find((el: User) => el.id === post.userId);

  if (user) {
    return user.username;
  }

  return "Unknown author";
}

export default getUsername;
