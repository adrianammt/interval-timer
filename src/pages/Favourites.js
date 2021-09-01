import "./Favourites.css";
import ClassCard from "../components/ClassCard/ClassCard";
import { useHistory } from "react-router-dom";
import MessageBox from "../components/MessageBox/MessageBox";
import { IoHeart } from "react-icons/io5";

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

  return (
    <div className="ClassCard__wrapper">
      {filteredFavourites.length === 0 ? (
        <MessageBox icon={IoHeart} message="Add your favourite classes!" />
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
