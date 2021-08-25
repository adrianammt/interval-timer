import React from "react";
import "./PlayClassCard.css";
import { IoPlay, IoStop, IoPause, IoHeart } from "react-icons/io5";
import { useState, useRef } from "react";
import { useTimer } from "react-use-precision-timer";
import tibetanBowl from "../../assets/tibetanBowl.mp3";
import bellChime from "../../assets/bellChime.mp3";
import bigSingingBowl from "../../assets/bigSingingBowl.mp3";
import oceanWaves from "../../assets/oceanWaves.mp3";
import forest from "../../assets/forest.mp3";
import windbell from "../../assets/windbell.mp3";

export default function PlayClassCard({ classToPlay, toggleFavourite }) {
  const {
    id,
    name,
    prepTime,
    duration,
    intervalTime,
    startSound,
    endSound,
    intervalSound,
    backgroundMusic,
    isFavourite,
  } = classToPlay;
  const [formattedTime, setFormattedTime] = useState("00:00:00");

  const startSoundRef = useRef();
  const endSoundRef = useRef();
  const intervalSoundRef = useRef();
  const backgroundMusicRef = useRef();

  const prepTimer = useTimer({
    delay: prepTime * 1000,
    runOnce: true,
    callback() {
      mainTimer.start();
      intervalTimer.start();
      startSoundRef.current.play();
    },
  });

  const mainTimer = useTimer({
    fireImmediately: true,
    delay: 1000,

    callback() {
      if (mainTimer.isRunning()) {
        setFormattedTime(getFormattedTime());

        if (backgroundMusicRef.current.paused) {
          backgroundMusicRef.current.play();
        }
      }

      if (getTime().total >= duration - intervalTime) {
        intervalTimer.stop();
      }

      if (getTime().total >= duration) {
        mainTimer.stop();
        backgroundMusicRef.current.pause();
        endSoundRef.current.play();
      }
    },
  });

  const intervalTimer = useTimer({
    fireImmediately: false,
    delay: intervalTime * 1000,
    callback() {
      if (intervalTimer.isRunning()) {
        intervalSoundRef.current.play();
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
      mainTimer.pause();
      intervalTimer.pause();
      backgroundMusicRef.current.pause();
    }
  }

  function onPlayClick() {
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
    prepTimer.stop();
    mainTimer.stop();
    intervalTimer.stop();
    backgroundMusicRef.current.pause();
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

  function startingSound() {
    if (startSound === "bell") {
      return bellChime;
    } else if (startSound === "bowl") {
      return tibetanBowl;
    } else if (startSound === "bigBowl") {
      return bigSingingBowl;
    } else return windbell;
  }

  function startMuted() {
    if (startSound === "none") {
      return true;
    } else return false;
  }

  function endingSound() {
    if (endSound === "bell") {
      return bellChime;
    } else if (endSound === "bowl") {
      return tibetanBowl;
    } else if (endSound === "bigBowl") {
      return bigSingingBowl;
    } else return windbell;
  }

  function endMuted() {
    if (endSound === "none") {
      return true;
    } else return false;
  }

  function intervalsSound() {
    if (intervalSound === "bell") {
      return bellChime;
    } else if (intervalSound === "bowl") {
      return tibetanBowl;
    } else if (intervalSound === "bigBowl") {
      return bigSingingBowl;
    } else return windbell;
  }

  function intervalMuted() {
    if (intervalSound === "none") {
      return true;
    } else return false;
  }

  function backgroundSound() {
    if (backgroundMusic === "waves") {
      return oceanWaves;
    } else return forest;
  }

  function backgroundMuted() {
    if (backgroundMusic === "none") {
      return true;
    } else return false;
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
            mainTimer.isPaused() || prepTimer.isPaused()
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
        <IoPlay
          onClick={onPlayClick}
          className={
            mainTimer.isRunning() || prepTimer.isRunning()
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
        <IoStop
          onClick={onStopClick}
          className={
            mainTimer.isStopped() && prepTimer.isStopped()
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
      <audio
        ref={startSoundRef}
        preload="true"
        src={startingSound()}
        muted={startMuted()}
      />
      <audio
        ref={endSoundRef}
        preload="true"
        src={endingSound()}
        muted={endMuted()}
      />
      <audio
        ref={intervalSoundRef}
        preload="true"
        src={intervalsSound()}
        muted={intervalMuted()}
      />
      <audio
        ref={backgroundMusicRef}
        preload="true"
        loop={true}
        src={backgroundSound()}
        muted={backgroundMuted()}
      />
    </section>
  );
}
