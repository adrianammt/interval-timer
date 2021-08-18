import React from "react";
import "./NoClassMessageBox.css";
import { IoAddCircle } from "react-icons/io5";

export default function NoClassMessageBox(props) {
  const { message } = props;

  return (
    <div className="MessageBox">
      <h2>{message}</h2>
      <IoAddCircle className="MessageBox-Icon" />
    </div>
  );
}
