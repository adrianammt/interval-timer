import React from "react";
import "./ClassCard.css";
import { IoRemoveCircle } from "react-icons/io5";

export default function ClassCard({
  name,
  duration,
  intervalTime,
  handleRemoveClass,
}) {
  return (
    <section className="ClassCard">
      <h2>{name}</h2>
      <div className="ClassCard__input">
        <p>Duration</p>
        <p>{duration} min</p>
        <div className="ClassCard--removeItem">
          <IoRemoveCircle
            className="ClassCard-Icon"
            onClick={handleRemoveClass}
          />
        </div>
        <p>Intervals</p>
        <p>{intervalTime} min</p>
      </div>
    </section>
  );
}
