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
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
  const [prepFormattedTime, setPrepFormattedTime] = useState("00");
  const [resetAnimation, setResetAnimation] = useState(0);

  const startSoundRef = useRef();
  const endSoundRef = useRef();
  const intervalSoundRef = useRef();
  const backgroundMusicRef = useRef();

  const prepTimer = useTimer({
    fireImmediately: true,
    delay: 1000,
    callback() {
      setPrepFormattedTime(getPrepFormattedTime());
      if (getPrepTime().total >= prepTime) {
        prepTimer.stop();
        mainTimer.start();
        intervalTimer.start();
        startSoundRef.current.play();
      }
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

  function handlePauseClick() {
    if (prepTimer.isRunning()) {
      prepTimer.pause();
    } else {
      mainTimer.pause();
      intervalTimer.pause();
      backgroundMusicRef.current.pause();
    }
  }

  function handlePlayClick() {
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

  function handleStopClick() {
    prepTimer.stop();
    mainTimer.stop();
    intervalTimer.stop();
    backgroundMusicRef.current.pause();
    setFormattedTime("00:00:00");
    setResetAnimation((prevAnim) => prevAnim + 1);
  }

  function getPrepTime() {
    const time = prepTimer.getElapsedRunningTime();
    const total = Number.parseInt(time / 1000, 10);
    const seconds = Number.parseInt(total % 60, 10);

    return {
      total,
      seconds,
    };
  }

  function getPrepFormattedTime() {
    const { seconds } = getPrepTime();
    const secondsString = seconds.toString().padStart(2, "00");
    return `${secondsString}`;
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

  function getSound(chosenSound) {
    if (chosenSound === "bell") {
      return bellChime;
    } else if (chosenSound === "bowl") {
      return tibetanBowl;
    } else if (chosenSound === "bigBowl") {
      return bigSingingBowl;
    } else return windbell;
  }

  function backgroundSound() {
    if (backgroundMusic === "waves") {
      return oceanWaves;
    } else return forest;
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
          onClick={handlePauseClick}
          className={
            mainTimer.isPaused() || prepTimer.isPaused()
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
        <IoPlay
          onClick={handlePlayClick}
          className={
            mainTimer.isRunning() || prepTimer.isRunning()
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
        <IoStop
          onClick={handleStopClick}
          className={
            mainTimer.isStopped() && prepTimer.isStopped()
              ? "PlayClass__controls--active"
              : "PlayClass__controls--inActive"
          }
        />
      </div>
      <h3>Preparation Time</h3>
      <div className="PrepTime">
        <div className="PrepTime-line"></div>
        <div className="PrepTime-line__time">
          <p className="PrepTime-line__time--text">0</p>
          <p className="PrepTime-line__time--text">
            {prepTime} sec ({prepFormattedTime})
          </p>
        </div>
      </div>
      <h3>Class</h3>
      <div className="Circle-wrapper">
        <CountdownCircleTimer
          key={resetAnimation}
          isPlaying={mainTimer.isRunning()}
          duration={duration}
          colors={[["#2b0080", 0.8], ["#2b0080", 0.8], ["#A30000"]]}
        >
          <p className="Circle-wrapper__text">{formattedTime}</p>
        </CountdownCircleTimer>
      </div>
      <audio
        ref={startSoundRef}
        preload="true"
        src={getSound(startSound)}
        muted={startSound === "none" ? true : false}
      />
      <audio
        ref={endSoundRef}
        preload="true"
        src={getSound(endSound)}
        muted={endSound === "none" ? true : false}
      />
      <audio
        ref={intervalSoundRef}
        preload="true"
        src={getSound(intervalSound)}
        muted={intervalSound === "none" ? true : false}
      />
      <audio
        ref={backgroundMusicRef}
        preload="true"
        loop={true}
        src={backgroundSound()}
        muted={backgroundMusic === "none" ? true : false}
      />
    </section>
  );
}
