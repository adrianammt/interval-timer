import "./ClassCard.css";

export default function ClassCard() {
  const savedClasses = JSON.parse(localStorage.getItem("classList")) || [];

  function renderClasses() {
    return savedClasses.map((savedClass) => {
      const id = savedClass.id;
      return (
        <section key={id} className="ClassCard">
          <h2>{savedClass.name}</h2>
          <div className="ClassCard__input">
            <p>Duration</p>
            <p>{savedClass.duration} min</p>
          </div>
          <div className="ClassCard__input">
            <p>Intervals</p>
            <p>{savedClass.intervalTime} min</p>
          </div>
        </section>
      );
    });
  }

  return <div className="ClassCard--wrapper">{renderClasses()}</div>;
}
