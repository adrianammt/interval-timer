import ClassCard from "../components/ClassCard/ClassCard";
import { useHistory } from "react-router-dom";
import NoClassMessageBox from "../components/NoClassBox/NoClassMessageBox";

export default function MyList({ data, handleRemoveClass, toggleFavourite }) {
  const history = useHistory();

  function handlePlayClass(id) {
    history.push(`/myList/${id}`);
  }

  return (
    <div className="ClassCard__wrapper">
      {data.length === 0 ? (
        <NoClassMessageBox />
      ) : (
        data.map((savedClass) => {
          return (
            <ClassCard
              classCard={savedClass}
              key={savedClass.id}
              id={savedClass.id}
              name={savedClass.name}
              duration={savedClass.duration}
              intervalTime={savedClass.intervalTime}
              onRemoveClassClick={handleRemoveClass}
              onPlayClassClick={handlePlayClass}
              toogleHeartIcon={toggleFavourite}
              isFavourite={savedClass.isFavourite}
            />
          );
        })
      )}
    </div>
  );
}
