import "./SettingsForm.css";
import { useState, useEffect, useRef } from "react";
import tibetanBowl from "../assets/tibetanBowl.mp3";
import bellChime from "../assets/bellChime.mp3";
import bigSingingBowl from "../assets/bigSingingBowl.mp3";
import oceanWaves from "../assets/oceanWaves.mp3";
import forest from "../assets/forest.mp3";
import windbell from "../assets/windbell.mp3";
import getTimeInSeconds from "../service/durationInSeconds";

export default function SettingsForm({
  initialClassInput = {
    name: "",
    classDuration: 600,
    prepTime: 5,
    intervalTime: 120,
    startSound: "none",
    endSound: "none",
    intervalSound: "none",
    backgroundMusic: "none",
  },
  buttonName,
  onSubmit,
}) {
  const [classNameInput, setClassNameInput] = useState(initialClassInput.name);
  const [classDurationInput, setClassDurationInput] = useState(() => {
    const time = new Date(initialClassInput.classDuration * 1000).toISOString();
    // .substr(14, 5);
    console.log(time);
    return time;
  });
  const [classPrepTimeInput, setClassprepTimeInput] = useState(
    initialClassInput.prepTime
  );
  const [classIntervalTimeInput, setClassIntervalTimeInput] = useState(() => {
    // let hh = initialClassInput.intervalTime * 1000;
    // console.log(hh);
    const time = new Date(initialClassInput.classDuration * 1000)
      .toISOString()
      .substr(14, 5);
    console.log(time);
    return time;
  });
  const [selectedStartSound, setSelectedStartSound] = useState(
    initialClassInput.startSound
  );
  const [selectedEndSound, setSelectedEndSound] = useState(
    initialClassInput.endSound
  );
  const [selectedIntervalSound, setSelectedIntervalSound] = useState(
    initialClassInput.intervalSound
  );
  const [selectedBackgroundMusic, setSelectedBackgroundMusic] = useState(
    initialClassInput.backgroundMusic
  );

  const startSoundRef = useRef();
  const endSoundRef = useRef();
  const intervalSoundRef = useRef();
  const backgroundMusicRef = useRef();

  useEffect(() => {
    startSoundRef.current.pause();
    startSoundRef.current.play();
  }, [selectedStartSound]);

  useEffect(() => {
    endSoundRef.current.pause();
    endSoundRef.current.play();
  }, [selectedEndSound]);

  useEffect(() => {
    intervalSoundRef.current.pause();
    intervalSoundRef.current.play();
  }, [selectedIntervalSound]);

  useEffect(() => {
    backgroundMusicRef.current.pause();
    backgroundMusicRef.current.play();
  }, [selectedBackgroundMusic]);

  function getSound(chosenSound) {
    if (chosenSound === "bell") {
      return bellChime;
    } else if (chosenSound === "bowl") {
      return tibetanBowl;
    } else if (chosenSound === "bigBowl") {
      return bigSingingBowl;
    } else if (chosenSound === "windbell") {
      return windbell;
    }
  }

  function backgroundSound() {
    if (selectedBackgroundMusic === "waves") {
      return oceanWaves;
    } else return forest;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const classDuration = getTimeInSeconds(classDurationInput);

    const classIntervalTime = getTimeInSeconds(classIntervalTimeInput);
    console.log(classIntervalTime);

    onSubmit({
      name: classNameInput,
      classDuration,
      prepTime: classPrepTimeInput,
      classIntervalTime,
      startSound: selectedStartSound,
      endSound: selectedEndSound,
      intervalSound: selectedIntervalSound,
      backgroundMusic: selectedBackgroundMusic,
    });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit} id="settingsForm">
        <div className="form-component">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-field name-field"
            placeholder='"Morning Meditation"'
            required
            onChange={(e) => setClassNameInput(e.target.value)}
            value={classNameInput}
            maxLength="20"
          />
        </div>
        <div className="form-component">
          <div className="form-component__time">
            <label htmlFor="durationInput" className="input-label">
              Duration
            </label>
            <p>(hh:mm)</p>
          </div>
          <input
            type="time"
            name="durationInput"
            id="durationInput"
            className="time-select"
            required
            onChange={(e) => setClassDurationInput(e.target.value)}
            value={classDurationInput}
          />
        </div>
        <div className="form-component">
          <label htmlFor="prepTime" className="input-label">
            Prep Time
          </label>
          <select
            name="prepTime"
            id="prepTime"
            className="time-select"
            onChange={(e) => setClassprepTimeInput(e.target.value)}
            value={classPrepTimeInput}
          >
            <option value="05">05 sec</option>
            <option value="10">10 sec</option>
            <option value="15">15 sec</option>
            <option value="20">20 sec</option>
          </select>
        </div>
        <div className="form-component">
          <div className="form-component__time">
            <label htmlFor="intervalTimeInput" className="input-label">
              Interval Time
            </label>
            <p>(hh:mm)</p>
          </div>
          <input
            type="time"
            className="time-select"
            required
            name="intervalTimeInput"
            id="intervalTimeInput"
            onChange={(e) => setClassIntervalTimeInput(e.target.value)}
            value={classIntervalTimeInput}
          />
        </div>
        <div className="form-component">
          <label htmlFor="startSound" className="input-label ">
            Start sound
          </label>
          <select
            className="sound-select"
            name="startSound"
            id="startSound"
            onChange={(e) => setSelectedStartSound(e.target.value)}
            value={selectedStartSound}
            onBlur={() => {
              startSoundRef.current.pause();
            }}
          >
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="bowl">Bowl</option>
            <option value="bigBowl">Big Bowl</option>
            <option value="windbell">Windbell</option>
          </select>
        </div>
        <div className="form-component">
          <label htmlFor="endSound" className="input-label ">
            End sound
          </label>
          <select
            className="sound-select"
            name="endSound"
            id="endSound"
            onChange={(e) => setSelectedEndSound(e.target.value)}
            value={selectedEndSound}
            onBlur={() => {
              endSoundRef.current.pause();
            }}
          >
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="bowl">Bowl</option>
            <option value="bigBowl">Big Bowl</option>
            <option value="windbell">Windbell</option>
          </select>
        </div>
        <div className="form-component">
          <label htmlFor="intervalSound" className="input-label">
            Interval sound
          </label>
          <select
            className="sound-select"
            name="intervalSound"
            id="intervalSound"
            onChange={(e) => setSelectedIntervalSound(e.target.value)}
            value={selectedIntervalSound}
            onBlur={() => {
              intervalSoundRef.current.pause();
            }}
          >
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="bowl">Bowl</option>
            <option value="bigBowl">Big Bowl</option>
            <option value="windbell">Windbell</option>
          </select>
        </div>
        <div className="form-component">
          <label htmlFor="backgroundMusic" className="input-label">
            Background music
          </label>
          <select
            className="sound-select"
            name="backgroundMusic"
            id="backgroundMusic"
            onChange={(e) => setSelectedBackgroundMusic(e.target.value)}
            value={selectedBackgroundMusic}
            onBlur={() => {
              backgroundMusicRef.current.pause();
            }}
          >
            <option value="none">None</option>
            <option value="waves">Waves</option>
            <option value="forest">Forest</option>
          </select>
        </div>
      </form>

      <button type="submit" className="saveButton" form="settingsForm">
        {buttonName}
      </button>
      <audio
        ref={startSoundRef}
        preload="true"
        src={getSound(selectedStartSound)}
        muted={selectedStartSound === "none" ? true : false}
      />
      <audio
        ref={endSoundRef}
        preload="true"
        src={getSound(selectedEndSound)}
        muted={selectedEndSound === "none" ? true : false}
      />
      <audio
        ref={intervalSoundRef}
        preload="true"
        src={getSound(selectedIntervalSound)}
        muted={selectedIntervalSound === "none" ? true : false}
      />
      <audio
        ref={backgroundMusicRef}
        preload="true"
        loop={true}
        src={backgroundSound()}
        muted={selectedBackgroundMusic === "none" ? true : false}
      />
    </>
  );
}
