export default function getTimeInSeconds(timeInput) {
  const hours = timeInput.split(":")[0];
  const minutes = timeInput.split(":")[1];
  const timeInSeconds = Number(hours) * 3600 + Number(minutes) * 60;

  return timeInSeconds;
}
