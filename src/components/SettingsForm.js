import "./SettingsForm.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const initialInput = {
  name: "",
  duration: 600,
  prepTime: 5,
  intervalTime: 60,
  startSound: "none",
  endSound: "none",
  intervalSound: "none",
  backgroundMusic: "none",
};

export default function SettingsForm({
  handleSaveFormInput,
  isEdit,
  classIdToEdit,
  handleUpdateEntry,
  listOfClasses,
}) {
  const [classInput, setClassInput] = useState(initialInput);

  useEffect(() => {
    if (isEdit) {
      const classToEdit = listOfClasses.filter(
        (savedClass) => savedClass.id === classIdToEdit
      );

      setClassInput({
        id: classToEdit[0].id,
        name: classToEdit[0].name,
        duration: classToEdit[0].duration,
        prepTime: classToEdit[0].prepTime,
        intervalTime: classToEdit[0].intervalTime,
        startSound: classToEdit[0].startSound,
        endSound: classToEdit[0].endSound,
        intervalSound: classToEdit[0].intervalSound,
        backgroundMusic: classToEdit[0].backgroundMusic,
      });
    }
  }, [isEdit, classIdToEdit, listOfClasses]);

  function handleSubmit(event) {
    event.preventDefault();

    if (isEdit) {
      handleUpdateEntry(classIdToEdit, classInput);
      setClassInput(initialInput);
    } else {
      handleSaveFormInput({ ...classInput, id: uuidv4() });
      setClassInput(initialInput);
    }
  }

  function handleOnChangeName(e) {
    const name = e.target.value;
    setClassInput({ ...classInput, name });
  }

  function handleOnChangeDuration(e) {
    const durationInput = e.target.value;
    const tHours = durationInput.split(":")[0];
    const tMinutes = durationInput.split(":")[1];
    const duration = Number(tHours) * 3600 + Number(tMinutes) * 60;
    if (duration === 0) {
      alert("Duration can't be 00:00");
    }
    setClassInput({ ...classInput, duration });
  }

  function handleOnChangePrepTime(e) {
    const prepTime = Number(e.target.value);
    setClassInput({ ...classInput, prepTime });
  }

  function handleOnChangeIntervalTime(e) {
    const intervalTimeInput = e.target.value;
    const iHours = intervalTimeInput.split(":")[0];
    const iMinutes = intervalTimeInput.split(":")[1];
    const intervalTime = Number(iHours) * 3600 + Number(iMinutes) * 60;
    setClassInput({ ...classInput, intervalTime });
  }

  function handleOnChangeStartSound(e) {
    const startSound = e.target.value;
    setClassInput({ ...classInput, startSound });
  }
  function handleOnChangeEndSound(e) {
    const endSound = e.target.value;
    setClassInput({ ...classInput, endSound });
  }
  function handleOnChangeIntervalSound(e) {
    const intervalSound = e.target.value;
    setClassInput({ ...classInput, intervalSound });
  }
  function handleOnChangeBackgroundMusic(e) {
    const backgroundMusic = e.target.value;
    setClassInput({ ...classInput, backgroundMusic });
  }

  const classDuration = classInput.duration;
  const total = parseInt(classDuration, 10);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor(total / 60) % 60;

  const durationToString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes);

  const classIntervalTime = classInput.intervalTime;
  const intTotal = parseInt(classIntervalTime, 10);
  const iHours = Math.floor(intTotal / 3600);
  const iMinutes = Math.floor(intTotal / 60) % 60;

  const intervalToString =
    (iHours < 10 ? "0" + iHours : iHours) +
    ":" +
    (iMinutes < 10 ? "0" + iMinutes : iMinutes);

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
            onChange={handleOnChangeName}
            value={classInput.name}
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
            onChange={handleOnChangeDuration}
            value={durationToString}
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
            onChange={handleOnChangePrepTime}
            value={classInput.prepTime}
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
            onChange={handleOnChangeIntervalTime}
            value={intervalToString}
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
            onChange={handleOnChangeStartSound}
            value={classInput.startSound}
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
            onChange={handleOnChangeEndSound}
            value={classInput.endSound}
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
            onChange={handleOnChangeIntervalSound}
            value={classInput.intervalSound}
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
            onChange={handleOnChangeBackgroundMusic}
            value={classInput.backgroundMusic}
          >
            <option value="none">None</option>
            <option value="waves">Waves</option>
            <option value="forest">Forest</option>
          </select>
        </div>
      </form>

      <button type="submit" className="saveButton" form="settingsForm">
        {isEdit ? "Update Settings" : "Save Class"}
      </button>
    </>
  );
}
