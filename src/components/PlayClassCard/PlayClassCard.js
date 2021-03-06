import React from "react";
import "./PlayClassCard.css";
import { IoPlay, IoStop, IoPause, IoHeart, IoOptions } from "react-icons/io5";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTimer } from "react-use-precision-timer";
import tibetanBowl from "../../assets/tibetanBowl.mp3";
import bellChime from "../../assets/bellChime.mp3";
import bigSingingBowl from "../../assets/bigSingingBowl.mp3";
import oceanWaves from "../../assets/oceanWaves.mp3";
import forest from "../../assets/forest.mp3";
import windbell from "../../assets/windbell.mp3";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import totalSecondsToHours from "../../service/durationSecondsToHours";
import totalSecondsToMin from "../../service/durationSecondsToMin";
import numberToString from "../../service/numberToString";

export default function PlayClassCard({ classToPlay, toogleHeartIcon }) {
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
      if (getPrepTime().total >= classToPlay.prepTime) {
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

      if (
        getTime().total >=
        classToPlay.classDuration - classToPlay.classIntervalTime
      ) {
        intervalTimer.stop();
      }

      if (getTime().total >= classToPlay.classDuration) {
        mainTimer.stop();
        backgroundMusicRef.current.pause();
        endSoundRef.current.play();
      }
    },
  });

  const intervalTimer = useTimer({
    fireImmediately: false,
    delay: classToPlay.classIntervalTime * 1000,
    callback() {
      if (intervalTimer.isRunning()) {
        intervalSoundRef.current.play();
      }
    },
  });

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
    if (prepTimer.getElapsedRunningTime() === 0) {
      prepTimer.start();
    } else if (prepTimer.isPaused()) {
      prepTimer.resume();
    }

    if (mainTimer.isStarted()) {
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
    setPrepFormattedTime("00");
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
    const secondsString = numberToString(seconds);
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
    const hoursString = numberToString(time.hours);
    const minsString = numberToString(time.minutes);
    const secondsString = numberToString(time.seconds);
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
    if (classToPlay.backgroundMusic === "waves") {
      return oceanWaves;
    } else return forest;
  }

  const durationHours = totalSecondsToHours(classToPlay);
  const durationMin = totalSecondsToMin(classToPlay);

  const hoursString = numberToString(durationHours);
  const minsString = numberToString(durationMin);

  function handleToogleHeartOnClick(e) {
    e.stopPropagation();
    toogleHeartIcon(classToPlay.id);
  }
  return (
    <section className="PlayClass">
      <IoHeart
        className={
          classToPlay.isFavourite ? "FavIcon--active" : "FavIcon--inactive"
        }
        onClick={handleToogleHeartOnClick}
      />
      <h2 className="PlayClass__title">{classToPlay.name}</h2>
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
      <h3 className="PlayClass__subtitle">
        Preparation Time: {classToPlay.prepTime} sec
      </h3>

      <p className="PrepTime-line__time--text">{prepFormattedTime}</p>
      <div className="PrepTime-line"></div>
      <div className="PrepTime-line__time"></div>

      <h3 className="PlayClass__subtitle">
        Class:&nbsp;
        {durationHours !== 0
          ? `${hoursString} h ${minsString} min`
          : `${minsString} min`}
      </h3>
      <div className="Circle-wrapper">
        <CountdownCircleTimer
          key={resetAnimation}
          isPlaying={mainTimer.isRunning()}
          duration={classToPlay.classDuration}
          colors={[["#2b0080", 0.8], ["#2b0080", 0.8], ["#A30000"]]}
          size={160}
          strokeWidth={10}
        >
          <p className="Circle-wrapper__text">{formattedTime}</p>
        </CountdownCircleTimer>
      </div>
      <Link to={`/settings/${classToPlay.id}`}>
        <IoOptions className="PlayClass__editOptions" />
      </Link>
      <audio
        ref={startSoundRef}
        preload="true"
        src={getSound(classToPlay.startSound)}
        muted={classToPlay.startSound === "none" ? true : false}
      />
      <audio
        ref={endSoundRef}
        preload="true"
        src={getSound(classToPlay.endSound)}
        muted={classToPlay.endSound === "none" ? true : false}
      />
      <audio
        ref={intervalSoundRef}
        preload="true"
        src={getSound(classToPlay.intervalSound)}
        muted={classToPlay.intervalSound === "none" ? true : false}
      />
      <audio
        ref={backgroundMusicRef}
        preload="true"
        loop={true}
        src={backgroundSound()}
        muted={classToPlay.backgroundMusic === "none" ? true : false}
      />
    </section>
  );
}
