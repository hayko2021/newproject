import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    search: searchReducer,
    users: usersReducer,
  },
});

export default store;
