import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { FiMail, FiLogOut } from "react-icons/fi";
import { AiOutlinePlusSquare, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";
import { selectSearch } from "../../store/slices/search/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../store/slices/search/searchSlice";

const NavBar = () => {
  const search = useSelector(selectSearch);

  const dispatch = useDispatch();

  return (
    <>
      <nav>
        <ul>
          <li
            className="instagram"
            style={{
              fontStyle: "italic",
              fontSize: "30px",
              ListStyle: "none",
            }}
          >
            <NavLink to="/">Instagram</NavLink>
          </li>
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => dispatch(toggleSearch(e.target.value))}
            className="Search"
            type="text"
          />
          <li>
            <NavLink to="/">
              <BiHomeAlt size="2rem" color="black" />
            </NavLink>
          </li>
          <li className="Menu2">
            <NavLink to="/message">
              <FiMail size="2rem" color="black" />
            </NavLink>
          </li>
          <li className="Menu3">
            <NavLink to="/posts">
              <AiOutlinePlusSquare size="2rem" color="black" />
            </NavLink>
          </li>
          <li className="Menu4">
            <NavLink to="/likes">
              <AiOutlineHeart size="2rem" color="black" />
            </NavLink>
          </li>
          <li className="Menu5">
            <NavLink to="/profile">
              <CgProfile size="2rem" color="black" />
            </NavLink>
          </li>
          <li className="Menu6">
            <NavLink to="/logout">
              <FiLogOut size="2rem" color="black" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />
    </>
  );
};
export default NavBar;
