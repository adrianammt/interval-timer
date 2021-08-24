import React from "react";
import "./PlayClassCard.css";
import { IoPlay, IoStop, IoPause, IoHeart } from "react-icons/io5";
import { useState, useRef } from "react";
import { useTimer } from "react-use-precision-timer";
import tibetanBowl from "../../assets/tibetanBowl.mp3";
import bellChime from "../../assets/bellChime.mp3";
import bigSingingBowl from "../../assets/bigSingingBowl.mp3";
import oceanWaves from "../../assets/oceanWaves.mp3";

export default function PlayClassCard({ classToPlay, toggleFavourite }) {
  const [isActive, setIsActive] = useState(0);
  const {
    id,
    name,
    prepTime,
    duration,
    intervalTime,
    isFavourite,
  } = classToPlay;
  const [formattedTime, setFormattedTime] = useState("00:00:00");

  const tibetanBowlRef = useRef();
  const oceanRef = useRef();
  const bellChimeRef = useRef();
  const bigSingingBowlRef = useRef();

  const prepTimer = useTimer({
    delay: prepTime * 1000,
    runOnce: true,
    callback() {
      mainTimer.start();
      intervalTimer.start();
      bellChimeRef.current.play();
    },
  });

  const mainTimer = useTimer({
    fireImmediately: true,
    delay: 1000,

    callback() {
      if (mainTimer.isRunning()) {
        setFormattedTime(getFormattedTime());

        if (oceanRef.current.paused) {
          oceanRef.current.play();
        }
      }

      if (getTime().total >= duration - intervalTime) {
        intervalTimer.stop();
      }

      if (getTime().total >= duration) {
        mainTimer.stop();
        oceanRef.current.pause();
        bigSingingBowlRef.current.play();
      }
    },
  });

  const intervalTimer = useTimer({
    fireImmediately: false,
    delay: intervalTime * 1000,
    callback() {
      if (intervalTimer.isRunning()) {
        tibetanBowlRef.current.play();
      }
    },
  });

  function toggleHeartIcon() {
    toggleFavourite(id);
  }

  function onPauseClick() {
    if (prepTimer.isRunning()) {
      prepTimer.pause();
    } else {
      setIsActive(1);
      mainTimer.pause();
      intervalTimer.pause();
      oceanRef.current.pause();
    }
  }

  function onPlayClick() {
    setIsActive(2);
    if (!mainTimer.isStarted()) {
      prepTimer.start();
    }
    if (!mainTimer.isStarted()) {
      if (prepTimer.isPaused()) {
        prepTimer.resume();
      }
    } else {
      mainTimer.resume();
      intervalTimer.resume();
    }
  }

  function onStopClick() {
    setIsActive(3);
    mainTimer.stop();
    intervalTimer.stop();
    oceanRef.current.pause();
    setFormattedTime("00:00:00");
  }

  function getTime() {
    const time = mainTimer.getElapsedRunningTime();
    const total = Number.parseInt(time / 1000, 10);
    const hours = Number.parseInt(total / 3600, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }

  function getFormattedTime() {
    const time = getTime();
    const hoursString = time.hours.toString().padStart(2, "00");
    const minsString = time.minutes.toString().padStart(2, "00");
    const secondsString = time.seconds.toString().padStart(2, "00");
    return `${hoursString}:${minsString}:${secondsString}`;
  }

  return (
    <section className="PlayClass">
      <IoHeart
        className={isFavourite ? "FavIcon--active" : "FavIcon--inactive"}
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
          <p>{prepTime} sec</p>
        </div>
      </div>
      <h3>Class</h3>
      <div className="Circle">
        <p>{formattedTime}</p>
      </div>
      <audio ref={tibetanBowlRef} preload="true" src={tibetanBowl} />
      <audio ref={oceanRef} preload="true" src={oceanWaves} />
      <audio ref={bellChimeRef} preload="true" src={bellChime} />
      <audio ref={bigSingingBowlRef} preload="true" src={bigSingingBowl} />
    </section>
  );
}
