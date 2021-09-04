import "./ConfirmationBox.css";

export default function ConfirmationBox({
  onCancel,
  onConfirm,
  isHidden,
  name,
}) {
  return (
    <>
      <div className={isHidden ? "ConfirmationBox" : "ConfirmationBox-show"}>
        <p className="ConfirmationBox__title">Do you want to delete {name}?</p>
        <div className="Buttons-wrapper">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCancel();
            }}
            className="Buttons"
          >
            No
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onConfirm();
            }}
            className="Buttons"
          >
            Yes
          </button>
        </div>
      </div>
      <div
        className={
          isHidden ? "ConfirmationBox__bg" : "ConfirmationBox__bg--show"
        }
      ></div>
    </>
  );
}
