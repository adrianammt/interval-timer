import { useParams } from "react-router-dom";
import PlayClassCard from "../components/PlayClassCard/PlayClassCard";
import useClassList from "../hooks/useClassList";
import useHistoryPush from "../hooks/useHistoryPush";

export default function PlayClass() {
  const { toggleFavourite, classList } = useClassList();
  const { id } = useParams();

  const goToPath = useHistoryPush("settings");

  function handleEditClassSettingsPath(id) {
    goToPath(id);
  }

  const classToPlay = classList.find((savedClass) => savedClass.id === id);

  return (
    <PlayClassCard
      id={id}
      classToPlay={classToPlay}
      toggleFavourite={toggleFavourite}
      onEditSettingsPage={handleEditClassSettingsPath}
    />
  );
}
