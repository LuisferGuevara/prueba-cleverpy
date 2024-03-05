export const config = {
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    endpoints: {
      posts: "posts",
      users: "users",
    },

  };
  
  export const getUrl = (endpoint: keyof typeof config.endpoints) => {
    return config.baseUrl + endpoint;
  };
  