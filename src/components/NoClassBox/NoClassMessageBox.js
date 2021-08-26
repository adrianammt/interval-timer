import React from "react";
import "./NoClassMessageBox.css";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NoClassMessageBox({
  message = "Let's create some classes!",
}) {
  return (
    <div className="MessageBox">
      <h2>{message}</h2>
      <Link to="/create">
        <IoAddCircle className="MessageBox-Icon" />
      </Link>
    </div>
  );
}
