import React, { useMemo } from "react";
import "./Home.css";
import Postitem from "../PostItem/Postitem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/slices/posts/postsApi";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import Story from "../Story/Story";
import { selectSearch } from "../../store/slices/search/searchSlice";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const navigate = useNavigate();

  const posts = useSelector(selectPosts);
  const { currentUser } = useSelector(selectUsers);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts());
    }
  }, []);

  const filteredPosts = useMemo(() => {
    if (!search.replaceAll(" ", "")) {
      return [...posts];
    } else {
      return [
        ...posts.filter((post) =>
          post.username.includes(search.replaceAll(" ", ""))
        ),
      ];
    }
  }, [posts, search]);
  return (
    <>
      <Story />
      {filteredPosts.map((post) => (
        <Postitem key={post.id} {...post} />
      ))}
      <Postitem />
      <Postitem />
      <Postitem />
      <Postitem />
    </>
  );
}
