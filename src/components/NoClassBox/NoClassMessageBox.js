import React from "react";
import "./NoClassMessageBox.css";
import { IoAddCircle } from "react-icons/io5";

export default function NoClassMessageBox(props) {
  const { message } = props;

  return (
    <div className="MessageBox">
      <h2>{message}</h2>
      <a href="/create" className="MessageBox-Icon">
        <IoAddCircle />
      </a>
    </div>
  );
}
