import "./ClassCard.css";

export default function ClassCard({ name, duration, intervalTime }) {
  return (
    <section className="ClassCard">
      <h2>{name}</h2>
      <div className="ClassCard__input">
        <p>Duration</p>
        <p>{duration} min</p>
      </div>
      <div className="ClassCard__input">
        <p>Intervals</p>
        <p>{intervalTime} min</p>
      </div>
    </section>
  );
}
