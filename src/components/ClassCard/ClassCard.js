import React from "react";
import "./ClassCard.css";
import { IoRemoveCircle, IoHeart } from "react-icons/io5";

export default function ClassCard({
  classCard,
  onRemoveClassClick,
  onPlayClassClick,
  isFavourite,
  toogleHeartIcon,
}) {
  const durationHours = Math.floor(classCard.duration / (60 * 60));
  const durationMin = Math.floor((classCard.duration % (60 * 60)) / 60);

  const intervalHours = Math.floor(classCard.intervalTime / (60 * 60));
  const intervalMin = Math.floor((classCard.intervalTime % (60 * 60)) / 60);

  return (
    <section
      className="ClassCard"
      onClick={() => {
        onPlayClassClick(classCard.id);
      }}
    >
      <IoHeart
        className={
          isFavourite
            ? "FavIcon__ClassCard--active"
            : "FavIcon__ClassCard--inactive"
        }
        onClick={toogleHeartIcon}
      />
      <h2>{classCard.name}</h2>
      <div className="ClassCard__info">
        <h3>Duration</h3>
        <h3>
          {durationHours !== 0
            ? `${durationHours} h ${durationMin} min`
            : `${durationMin} min`}
        </h3>
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
        <h3>
          {intervalHours !== 0
            ? `${intervalHours} h ${intervalMin} min`
            : `${intervalMin} min`}
        </h3>
      </div>
    </section>
  );
}
