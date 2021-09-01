import ClassCard from "../components/ClassCard/ClassCard";
import { IoAddCircle } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import MessageBox from "../components/MessageBox/MessageBox";

export default function MyList({ data, handleRemoveClass, toggleFavourite }) {
  const history = useHistory();

  function handlePlayClass(id) {
    history.push(`/myList/${id}`);
  }

  return (
    <div className="ClassCard__wrapper">
      {data.length === 0 ? (
        <MessageBox icon={IoAddCircle} message="Let's add some classes!" />
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
