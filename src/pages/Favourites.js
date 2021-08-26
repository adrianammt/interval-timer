import "./Favourites.css";
import ClassCard from "../components/ClassCard/ClassCard";
import { useHistory } from "react-router-dom";
import NoFavouritesMessageBox from "../components/NoFavourites/NoFavouritesMessageBox";

export default function Favourites({
  data,
  handleRemoveClass,
  toggleFavourite,
}) {
  const history = useHistory();

  function handlePlayClass(id) {
    history.push(`/myList/${id}`);
  }

  const filteredFavourites = data.filter(
    (savedClass) => savedClass.isFavourite
  );

  // {data
  //   .filter((savedClass) => savedClass.isFavourite)
  //   .map((filteredClass) => {
  //     return

  return (
    <div className="ClassCard__wrapper">
      {filteredFavourites.length === 0 ? (
        <NoFavouritesMessageBox />
      ) : (
        filteredFavourites.map((filteredClass) => {
          return (
            <ClassCard
              classCard={filteredClass}
              key={filteredClass.id}
              id={filteredClass.id}
              name={filteredClass.name}
              duration={filteredClass.duration}
              intervalTime={filteredClass.intervalTime}
              onRemoveClassClick={handleRemoveClass}
              onPlayClassClick={handlePlayClass}
              toogleHeartIcon={toggleFavourite}
              isFavourite={filteredClass.isFavourite}
            />
          );
        })
      )}
    </div>
  );
}
