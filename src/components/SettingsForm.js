import "./SettingsForm.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function SettingsForm({ onSaveFormInput }) {
  const [classInput, setClassInput] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const id = uuidv4();

    const newClassInput = {
      id,
      isFavourite: false,
    };

    onSaveFormInput(newClassInput);
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
            defaultValue="00:30"
            onChange={handleOnChangeDuration}
            value={classInput.duration}
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
            defaultValue="00:01"
            onChange={handleOnChangeIntervalTime}
            value={classInput.intervalTime}
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
            defaultValue="Bell"
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
        Save
      </button>
    </>
  );
}
