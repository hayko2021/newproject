import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2, TbBrandTelegram } from "react-icons/tb";
import { BsSave } from "react-icons/bs";
import "./Postitem.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { useRef } from "react";
import { addNewComment } from "../../store/slices/posts/postsSlice";

export default function Postitem({ username, id, img, discription, comments }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { currentUser } = useSelector(selectUsers);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current[0].value) {
      dispatch(
        addNewComment({
          txt: formRef.current[0].value,
          username: currentUser.username,
          id,
        })
      );
    }
  };

  return (
    <div className="Parent">
      <div className="container">
        <div className="top_bar">
          <div className="profile_img">
            <img
              src="https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
              alt=""
            />
            <span>{username}</span>
          </div>
        </div>
        <div className="main_img">
          <img src={img} alt="" />
        </div>
        <div className="footer">
          <div className="icons">
            <div className="left_side">
              <AiOutlineHeart className="fa" />
              <TbMessageCircle2 className="fa" />
              <TbBrandTelegram className="fa" />
            </div>
            <div className="right_side">
              <BsSave />
            </div>
          </div>
          <div className="likeCount">
            <p>10,876 Likes</p>
            <b>{username}</b>
          </div>
          <div className="content">
            <p>{discription}</p>
          </div>
          <div className="comments">
            <p>View all 108 comments</p>
          </div>

          <div className="comments_box">
            {comments?.map((comment) => (
              <div key={comment.id}>
                <h1>{comment.username}</h1>
              </div>
            ))}
            <div className="icon">😀</div>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input_field">
                <input type="text" placeholder="Add a Comment" />
                <div className="btn">
                  <button>Post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
