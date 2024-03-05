export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  author?: string;
}
export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
}

export type Comment = {
  id: number;
  postId: number;
  email: string;
  name: string;
  body: string;
}

export type LoggedUser = {
  username: string;
  token?: string;
  id?: number | string;
  password?: string;
}
