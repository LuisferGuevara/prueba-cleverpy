export const config = {
  baseUrl: "https://jsonplaceholder.typicode.com/",
  endpoints: {
    posts: "posts",
    users: "users",
  },
  admin:{
    username: 'admin',
    password: 'admin',
    id: '123456789',
    token: "abcdefg123456"
  }
};

export const getUrl = (endpoint: keyof typeof config.endpoints) => {
  return config.baseUrl + endpoint;
};
