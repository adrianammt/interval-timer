import "./SettingsForm.css";
import { v4 as uuidv4 } from "uuid";

export default function SettingsForm({ onSaveFormInput }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const durationInput = form.durationInput.value;
    const tHours = durationInput.split(":")[0];
    const tMinutes = durationInput.split(":")[1];
    const duration = Number(tHours) * 3600 + Number(tMinutes) * 60;

    const prepTime = Number(form.prepTime.value);
    const intervalTimeInput = form.intervalTimeInput.value;
    const iHours = intervalTimeInput.split(":")[0];
    const iMinutes = intervalTimeInput.split(":")[1];
    const intervalTime = Number(iHours) * 3600 + Number(iMinutes) * 60;
    const startSound = form.startSound.value;
    const endSound = form.endSound.value;
    const intervalSound = form.intervalSound.value;
    const backgroundMusic = form.backgroundMusic.value;
    const id = uuidv4();

    const newClassInput = {
      id,
      name,
      duration,
      tHours,
      tMinutes,
      prepTime,
      intervalTime,
      startSound,
      endSound,
      intervalSound,
      backgroundMusic,
      isFavourite: false,
    };

    onSaveFormInput(newClassInput);

    form.reset();
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
          />
        </div>
        <div className="form-component">
          <label htmlFor="prepTime" className="input-label">
            Prep Time
          </label>
          <select name="prepTime" id="prepTime" className="time-select">
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
          >
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="tibetan-bowl">Tibetan bowl</option>
            <option value="tingshas">Tingshas</option>
            <option value="cymbal">Cymbal</option>
          </select>
        </div>
        <div className="form-component">
          <label htmlFor="endSound" className="input-label ">
            End sound
          </label>
          <select className="sound-select" name="endSound" id="endSound">
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="tibetan-bowl">Tibetan bowl</option>
            <option value="tingshas">Tingshas</option>
            <option value="gong">Gong</option>
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
          >
            <option value="none">None</option>
            <option value="bell">Bell</option>
            <option value="tibetan-bowl">Tibetan bowl</option>
            <option value="tingshas">Tingshas</option>
            <option value="cymbal">Cymbal</option>
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
          >
            <option value="none">None</option>
            <option value="nature">Nature</option>
            <option value="sea">Sea</option>
            <option value="rain">Rain</option>
          </select>
        </div>
      </form>

      <button type="submit" className="saveButton" form="settingsForm">
        Save
      </button>
    </>
  );
}
