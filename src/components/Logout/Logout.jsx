import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { useEffect, useRef } from "react";
import { fetchUsers } from "../../store/slices/users/usersApi";
import {
  toggleCurrentUser,
  selectUsers,
} from "../../store/slices/users/usersSlice";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useDispatch();
  const formref = useRef(null);

  const { currentUser } = useSelector(selectUsers);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
    dispatch(fetchUsers());
  }, [currentUser]);

  useEffect(() => {
    dispatch(fetchUsers());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let log = formref.current[0].value;
    let password = formref.current[1].value;
    if (log && password) {
      dispatch(toggleCurrentUser({ log, password }));
    }
    formref.current.reset();
  };

  return (
    <div className="div-container">
      <div className="containerr">
        <div className="pages">
          <div className="title">Instagram</div>

          <form ref={formref} onSubmit={handleSubmit}>
            <input defaultValue={"bret"} type="text" placeholder="username" />
            <input
              defaultValue={"gwenborough"}
              type="password"
              placeholder="Password"
            />
            <button>Log in</button>
            <div className="option">OR</div>
          </form>
          <div className="fblink">
            <span className="fab fa-facebook"></span>
            <a href="#">Log in with facebook</a>
          </div>
          <div className="forget-id">
            <a href="#">Forget Password?</a>
          </div>
          <div className="signup">
            <p>
              Dont have a account <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
