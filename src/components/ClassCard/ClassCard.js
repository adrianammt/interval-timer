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

  function handleToogleHeartOnClick(e) {
    e.stopPropagation();
    toogleHeartIcon(classCard.id);
  }

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
        onClick={handleToogleHeartOnClick}
      />
      <h2 className="ClassCard__title">{classCard.name}</h2>
      <h3 className="ClassCard__duration">Duration</h3>
      <h3 className="ClassCard__duration--value">
        {durationHours !== 0
          ? `${durationHours} h ${durationMin} min`
          : `${durationMin} min`}
      </h3>

      <h3 className="ClassCard__intervals">Intervals</h3>
      <h3 className="ClassCard__intervals--value">
        {intervalHours !== 0
          ? `${intervalHours} h ${intervalMin} min`
          : `${intervalMin} min`}
      </h3>
      <IoRemoveCircle
        className="ClassCard-removeIcon"
        onClick={(e) => {
          e.stopPropagation();
          onRemoveClassClick(classCard.id);
        }}
      />
    </section>
  );
}
