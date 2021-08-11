import "./SettingsForm.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function SettingsForm() {
  const savedClasses = JSON.parse(localStorage.getItem("classList")) || [];
  const [newClass, setNewClass] = useState(savedClasses);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const duration = form.duration.value;
    const phase = form.phase.value;
    const prepTime = form.prepTime.value;
    const intervalTime = form.intervalTime.value;
    const startSound = form.startSound.value;
    const endSound = form.endSound.value;
    const intervalSound = form.intervalSound.value;
    const backgroundMusic = form.backgroundMusic.value;
    const id = uuidv4();

    const newClassInput = {
      id,
      name,
      duration,
      phase,
      prepTime,
      intervalTime,
      startSound,
      endSound,
      intervalSound,
      backgroundMusic,
    };

    setNewClass([...newClass, newClassInput]);

    form.reset();
  }

  useEffect(() => {
    localStorage.setItem("classList", JSON.stringify(newClass));
  }, [newClass]);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-component">
          <label className="input-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-field name-field"
            placeholder="Morning Meditation"
            required
          />
        </div>
        <div className="form-component">
          <label className="input-label">Duration</label>
          <input
            type="time"
            name="duration"
            id="duration"
            className="time-select"
            step="1"
            required
            min="00:05:00"
            max="02:00:00"
          />
        </div>
        <div className="form-component">
          <label className="input-label">Nr of phases</label>
          <select className="phase-picker" name="phase" id="phase">
            <option value="1" className="option">
              1
            </option>
            <option value="3" className="option">
              3
            </option>
          </select>
        </div>
        <div className="form-component">
          <label className="input-label">Prep Time</label>
          <input
            type="time"
            name="prepTime"
            id="prepTime"
            className="time-select"
            step="1"
            required
            min="00:00:10"
            max="00:00:20"
          />
        </div>
        <div className="form-component">
          <label className="input-label">Interval Time</label>
          <input
            type="time"
            className="time-select"
            step="1"
            required
            name="intervalTime"
            id="intervalTIme"
          />
        </div>
        <div className="form-component">
          <label className="input-label ">Start sound</label>
          <select className="sound-select" name="startSound" id="startSound">
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="tibetan-bowl">Tibetan bowl</option>
            <option value="tingshas">Tingshas</option>
            <option value="cymbal">Cymbal</option>
          </select>
        </div>
        <div className="form-component">
          <label className="input-label ">End sound</label>
          <select className="sound-select" name="endSound" id="endSound">
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="tibetan-bowl">Tibetan bowl</option>
            <option value="tingshas">Tingshas</option>
            <option value="gong" selected="selected">
              Gong
            </option>
          </select>
        </div>
        <div className="form-component">
          <label className="input-label">Interval sound</label>
          <select
            className="sound-select"
            name="intervalSound"
            id="intervalSound"
          >
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="tibetan-bowl">Tibetan bowl</option>
            <option value="tingshas" selected="selected">
              Tingshas
            </option>
            <option value="cymbal">Cymbal</option>
          </select>
        </div>
        <div className="form-component">
          <label className="input-label">Background music</label>
          <select
            className="sound-select"
            name="backgroundMusic"
            id="backgroundMusic"
          >
            <option value="none">None</option>
            <option value="nature">Nature</option>
            <option value="sea">Sea</option>
            <option value="rain">Rain</option>
          </select>
        </div>
        <button type="submit" className="saveButton">
          Save
        </button>
      </form>
    </>
  );
}
