import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function () {
    const responseUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const responsePosts = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=100"
    );
    const postsData = responsePosts.data;

    const data = responseUsers.data.map((user) => ({
      email: user.email.toLowerCase(),
      password: user.address.city.toLowerCase(),
      id: user.id,
      username: user.username.toLowerCase(),
      about: user.company.catchPhrase,
      name: user.name,
      posts: postsData
        .filter((post) => post.albumId === user.id)
        .map((post) => ({
          id: post.id,
          img: post.url,
          username: user.username,
          discription: post.title,
          comments: [],
        })),
    }));
    return data;
  }
);
