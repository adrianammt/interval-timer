import React from "react";
import "../PlayClassCard/PlayClassCard.css";
import { IoPlay, IoStop, IoPause, IoHeart } from "react-icons/io5";
import { useState } from "react";

export default function PlayClassCard({
  id,
  name,
  prepTime,
  duration,
  intervalTime,
}) {
  const [isFavourite, setIsFavourite] = useState("false");
  const [isActive, setIsActive] = useState(0);

  const toggleHeartIcon = () => {
    setIsFavourite(!isFavourite);
  };

  function onPauseClick() {
    setIsActive(1);
  }

  function onPlayClick() {
    setIsActive(2);
  }

  function onStopClick() {
    setIsActive(3);
  }

  return (
    <section className="PlayClass">
      <IoHeart
        className={isFavourite ? "FavIcon--inactive" : "FavIcon--active"}
        onClick={toggleHeartIcon}
      />
      <h2>{name}</h2>
      <div className="PlayClass__controls">
        <IoPause
          onClick={onPauseClick}
          className={
            isActive === 1
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
        <IoPlay
          onClick={onPlayClick}
          className={
            isActive === 2
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
        <IoStop
          onClick={onStopClick}
          className={
            isActive === 3
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
      </div>
      <h3>Preparation Time</h3>
      <div className="PrepTime">
        <div className="PrepTime__line"></div>
        <div className="PrepTime__Line--time">
          <p>0</p>
          <p>{prepTime}</p>
        </div>
      </div>
      <h3>Class</h3>
      <div className="Circle">
        <p>{duration} min</p>
      </div>
    </section>
  );
}
