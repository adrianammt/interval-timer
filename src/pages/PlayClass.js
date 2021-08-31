import { useParams } from "react-router-dom";
import PlayClassCard from "../components/PlayClassCard/PlayClassCard";

export default function PlasClass({
  listOfClasses,
  toggleFavourite,
  handleEditClass,
}) {
  const { id } = useParams();

  const classToPlay = listOfClasses.filter(
    (savedClass) => savedClass.id === id
  );

  return (
    <PlayClassCard
      id={id}
      classToPlay={classToPlay[0]}
      toggleFavourite={toggleFavourite}
      handleEditClass={handleEditClass}
    />
  );
}
