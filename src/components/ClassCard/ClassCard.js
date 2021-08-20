import React from "react";
import "./ClassCard.css";
import { IoRemoveCircle } from "react-icons/io5";

export default function ClassCard({
  classCard,
  onRemoveClassClick,
  onPlayClassClick,
}) {
  return (
    <section
      className="ClassCard"
      onClick={() => {
        onPlayClassClick(classCard.id);
      }}
    >
      <h2>{classCard.name}</h2>
      <div className="ClassCard__info">
        <h3>Duration</h3>
        <h3>{classCard.duration} min</h3>
        <div className="ClassCard--removeItem">
          <IoRemoveCircle
            className="ClassCard-Icon"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClassClick(classCard.id);
            }}
          />
        </div>
        <h3>Intervals</h3>
        <h3>{classCard.intervalTime} min</h3>
      </div>
    </section>
  );
}
