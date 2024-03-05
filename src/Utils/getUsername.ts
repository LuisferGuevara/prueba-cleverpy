import { ReactNode } from "react";
import { Post, User } from "../Types/consts";

function getUsername(users: [] | null | undefined, post: Post): ReactNode {
  const user = users?.find((el: User) => el.id === post.userId) as unknown as User;

  if (typeof user !== "undefined") {
    return user.username;
  }
  return "Unknown author ";
}

export default getUsername;
