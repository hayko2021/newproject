import React from "react";
import { selectUsers } from "../../store/slices/users/usersSlice";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { currentUser } = useSelector(selectUsers);
  const navigate = useNavigate();

  console.log(currentUser);
  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser]);

  return (
    <>
      <div>
        <div className="container1">
          <div className="profile">
            <div className="profile-image">
              <img
                src={
                  "https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
                }
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{currentUser.username}</h1>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p className="lorem">
                <span className="profile-real-name">{currentUser.name}</span>
                {currentUser.about}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="gallery-item">
          {currentUser.posts.map((post) => (
            <div className="parent1" key={post.id}>
              {" "}
              <img src={post.img} className="gallery-image" alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
