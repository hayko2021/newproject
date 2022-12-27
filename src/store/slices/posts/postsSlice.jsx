import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsApi";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addNewComment: (state, { payload }) => {
      let idx = state.findIndex((post) => post.id === payload.id);
      state[idx].comments.push({
        id: new Date().getTime(),
        username: payload.username,
        body: payload.txt,
      });
    },
    addNewPost(state, { payload }) {
      state.unshift({
        ...payload,
        comments: [],
      });
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      return payload;
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { addNewComment, addNewPost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
