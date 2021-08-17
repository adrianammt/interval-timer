import React from "react";
import "./ClassCard.css";
import { IoRemoveCircle } from "react-icons/io5";

export default function ClassCard({
  id,
  name,
  duration,
  intervalTime,
  onRemoveClassClick,
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
            onClick={() => {
              onRemoveClassClick(id);
            }}
          />
        </div>
        <p>Intervals</p>
        <p>{intervalTime} min</p>
      </div>
    </section>
  );
}
