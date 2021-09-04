export default function totalSecondsToHours(object) {
  const durationHours = Math.floor(object.classDuration / (60 * 60));
  return durationHours;
}
