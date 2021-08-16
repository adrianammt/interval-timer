import React from "react";
import "../PlayClassCard/PlayClassCard.css";
import { IoPlay, IoStop, IoPause, IoHeart } from "react-icons/io5";

export default function PlayClassCard(props) {
  const {
    name,
    isToggled,
    isPlayed,
    isStopped,
    isPaused,
    prepTime,
    duration,
    ...rest
  } = props;

  return (
    <section className="PlayClass" {...rest}>
      <IoHeart className="FavIcon" />
      <h2>{name}</h2>
      <div className="PlayClass__controls">
        <IoPause />
        <IoPlay />
        <IoStop />
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
        <p>30 min</p>
      </div>
    </section>
  );
}
