import "./Favourites.css";
import ClassCard from "../components/ClassCard/ClassCard";
import MessageBox from "../components/MessageBox/MessageBox";
import { IoHeart } from "react-icons/io5";
import useClassList from "../hooks/useClassList";
import useHistoryPush from "../hooks/useHistoryPush";

export default function Favourites() {
  const { classList, removeClass, toggleFavourite } = useClassList();

  const goToPath = useHistoryPush("myList");

  function handlePlayClass(id) {
    goToPath(id);
  }

  const filteredFavourites = classList.filter(
    (savedClass) => savedClass.isFavourite
  );

  return (
    <div className="ClassCard__wrapper">
      {filteredFavourites.length === 0 ? (
        <MessageBox
          icon={IoHeart}
          path="myList"
          message="Add your favourite classes!"
        />
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
              onRemoveClassClick={removeClass}
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
