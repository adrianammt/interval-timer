import { useParams } from "react-router-dom";
import PlayClassCard from "../components/PlayClassCard/PlayClassCard";

export default function PlasClass({ data, toggleFavourite }) {
  const { id } = useParams();

  const classToPlay = data.filter((savedClass) => savedClass.id === id);

  return (
    <PlayClassCard
      id={id}
      classToPlay={classToPlay[0]}
      toggleFavourite={toggleFavourite}
    />
  );
}
