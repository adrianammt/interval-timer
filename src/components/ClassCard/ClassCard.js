import React from "react";
import "./ClassCard.css";
import { useState } from "react";
import { IoRemoveCircle, IoHeart } from "react-icons/io5";
import ConfirmationBox from "../ConfirmationBox";
import totalSecondsToHours from "../../service/durationSecondsToHours";
import totalSecondsToMin from "../../service/durationSecondsToMin";
import numberToString from "../../service/numberToString";

export default function ClassCard({
  classCard,
  onRemoveClassClick,
  onPlayClassClick,
  isFavourite,
  toogleHeartIcon,
}) {
  const [isHidden, setIsHidden] = useState(true);

  const durationHours = totalSecondsToHours(classCard);
  const durationMin = totalSecondsToMin(classCard);
  console.log(durationMin);

  const intervalHours = Math.floor(classCard.classIntervalTime / (60 * 60));
  const intervalMin = Math.floor(
    (classCard.classIntervalTime % (60 * 60)) / 60
  );

  const hoursString = numberToString(durationHours);
  const minsString = numberToString(durationMin);

  const iHoursString = numberToString(intervalHours);
  const iMinsString = numberToString(intervalMin);

  function handleToogleHeartOnClick(e) {
    e.stopPropagation();
    toogleHeartIcon(classCard.id);
  }

  function handleConfirmationBox() {
    setIsHidden(false);
  }

  function handleCancelDelete() {
    setIsHidden(true);
  }

  function handleConfirmDelete() {
    onRemoveClassClick(classCard.id);
    setIsHidden(true);
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
      <h3 className="ClassCard__duration ClassCard__contentText">Duration</h3>
      <h3 className="ClassCard__duration--value ClassCard__contentText">
        {durationHours !== 0
          ? `${hoursString} h ${minsString} min`
          : `${minsString} min`}
      </h3>

      <h3 className="ClassCard__intervals ClassCard__contentText">Intervals</h3>
      <h3 className="ClassCard__intervals--value ClassCard__contentText">
        {intervalHours !== 0
          ? `${iHoursString} h ${iMinsString} min`
          : `${iMinsString} min`}
      </h3>
      <IoRemoveCircle
        className="ClassCard-removeIcon"
        onClick={(e) => {
          e.stopPropagation();
          handleConfirmationBox();
        }}
      />
      <ConfirmationBox
        isHidden={isHidden}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        name={classCard.name}
      />
    </section>
  );
}
