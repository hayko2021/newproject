import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

export default function HomeWrapper() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}
