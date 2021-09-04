export default function totalSecondsToMin(object) {
  const durationMin = Math.floor((object.classDuration % (60 * 60)) / 60);
  return durationMin;
}
