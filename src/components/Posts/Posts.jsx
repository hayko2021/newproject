/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { addNewPost } from "../../store/slices/posts/postsSlice";
import { addNewUserPost } from "../../store/slices/users/usersSlice";
import "./Posts.css";
export default function Posts() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const currentUser = useSelector(selectUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let img = formRef.current[0].value;
    let discription = formRef[1].value;
    let id = new Date().getTime().toString();
    let { username } = currentUser;

    if (img) {
      dispatch(addNewPost({ img, id, username, discription }));
      dispatch(addNewUserPost({ img, id, username, discription }));
      formRef.current.reset();
      navigate("/");
    }
  };
  return (
    <div>
      <h1 className="add">создать публикацию</h1>
      <IoMdPhotos className="Postpage" size="5rem" />

      <div className="input-add">
        <form ref={formRef} onSubmit={handleSubmit}>
          <button className="buttonadd">Add New Post</button>
          <input type="text" placeholder="url" /> <br /> <br />
          <input type="text" placeholder="discription" /> <br /> <br />
        </form>
      </div>
    </div>
  );
}
