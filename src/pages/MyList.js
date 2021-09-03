import ClassCard from "../components/ClassCard/ClassCard";
import { IoAddCircle } from "react-icons/io5";

import MessageBox from "../components/MessageBox/MessageBox";
import useClassList from "../hooks/useClassList";
import useHistoryPush from "../hooks/useHistoryPush";

export default function MyList() {
  const { classList, removeClass, toggleFavourite } = useClassList();

  const goToPath = useHistoryPush("myList");

  function handleClassToPlayPath(id) {
    goToPath(id);
  }

  return (
    <div className="ClassCard__wrapper">
      {classList.length === 0 ? (
        <MessageBox
          icon={IoAddCircle}
          path="create"
          message="Let's add some classes!"
        />
      ) : (
        classList.map((savedClass) => {
          return (
            <ClassCard
              classCard={savedClass}
              key={savedClass.id}
              id={savedClass.id}
              name={savedClass.name}
              duration={savedClass.duration}
              intervalTime={savedClass.intervalTime}
              onRemoveClassClick={removeClass}
              onPlayClassClick={handleClassToPlayPath}
              toogleHeartIcon={toggleFavourite}
              isFavourite={savedClass.isFavourite}
            />
          );
        })
      )}
    </div>
  );
}
