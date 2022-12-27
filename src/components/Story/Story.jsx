import ImgStory from "./ImgStory/ImgStory";
import React from "react";
import "./Story.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { useRef } from "react";
import { addNewComment } from "../../store/slices/posts/postsSlice";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector(selectUsers);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="body">
      <div className="container">
        <div className="story-container">
          <div className="content">
            <div className="img-container">
              <img src={ImgStory.Nasa} alt="" />
            </div>
            <div className="text-container">NASA.Official</div>
          </div>
          <div className="content">
            <div className="img-container">
              <img src={ImgStory.Aram} alt="" />
            </div>
            <div className="text-container">Aram Asatryan</div>
          </div>

          <div className="content">
            <div className="img-container">
              <img src={ImgStory.Albert} alt="" />
            </div>
            <div className="text-container">Albert Einshtein</div>
          </div>

          <div className="content">
            <div className="img-container">
              <img src={ImgStory.Snoop} alt="" />
            </div>
            <div className="text-container">Snoop Dogg</div>
          </div>

          <div className="content">
            <div className="img-container">
              <img src={ImgStory.Biden} alt="" />
            </div>
            <div className="text-container">Joe Biden</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
