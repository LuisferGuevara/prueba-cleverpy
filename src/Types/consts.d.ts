export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  author?: string;
};
export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};
