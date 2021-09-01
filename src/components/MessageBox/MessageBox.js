import React from "react";
import "./MessageBox.css";
import { Link } from "react-router-dom";

export default function NoClassMessageBox({
  message = "",
  icon = "",
  path = "",
}) {
  const Icon = (props) => {
    const { icon } = props;
    const TheIcon = icon;
    return <TheIcon {...props} />;
  };

  return (
    <div className="MessageBox">
      <h2 className="MessageBox__title">{message}</h2>
      <Link to={`/${path}`}>
        <Icon icon={icon} className="MessageBox-Icon" />
      </Link>
    </div>
  );
}
