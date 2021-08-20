import React from "react";
import "./ClassCard.css";
import { IoRemoveCircle } from "react-icons/io5";

export default function ClassCard({
  id,
  name,
  duration,
  intervalTime,
  onRemoveClassClick,
  onPlayClassClick,
}) {
  return (
    <section
      className="ClassCard"
      onClick={() => {
        onPlayClassClick(id);
      }}
    >
      <h2>{name}</h2>
      <div className="ClassCard__info">
        <h3>Duration</h3>
        <h3>{duration} min</h3>
        <div className="ClassCard--removeItem">
          <IoRemoveCircle
            className="ClassCard-Icon"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClassClick(id);
            }}
          />
        </div>
        <h3>Intervals</h3>
        <h3>{intervalTime} min</h3>
      </div>
    </section>
  );
}
