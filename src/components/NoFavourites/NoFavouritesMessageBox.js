import React from "react";
import "./NoFavouritesMessageBox.css";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NoFavouritesMessageBox({
  message = "Add your favourite classes!",
}) {
  return (
    <div className="MessageBox">
      <h2>{message}</h2>
      <Link to="/myList">
        <IoHeart className="MessageBox-Icon" />
      </Link>
    </div>
  );
}
