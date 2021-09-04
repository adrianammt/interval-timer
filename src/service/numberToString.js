export default function numberToString(duration) {
  const numberToString = duration.toString().padStart(2, "00");
  return numberToString;
}
