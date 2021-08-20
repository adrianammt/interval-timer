import ClassCard from "../components/ClassCard/ClassCard";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./MyList.css";

export default function MyList() {
  const [savedClasses, setSavedClasses] = useState([]);
  const history = useHistory();

  function handleRemoveClass(id) {
    const newSavedClasses = savedClasses.filter(
      (savedClass) => savedClass.id !== id
    );
    setSavedClasses(newSavedClasses);
  }

  useEffect(() => {
    const savedClasses = JSON.parse(localStorage.getItem("classList")) || [];
    setSavedClasses(savedClasses);
  }, []);

  useEffect(() => {
    localStorage.setItem("classList", JSON.stringify(savedClasses));
  }, [savedClasses]);

  function handlePlayClass(id) {
    history.push(`/myList/${id}`);
    console.log("click");
  }

  return (
    <div className="ClassCard__wrapper">
      {savedClasses.map((savedClass) => {
        return (
          <ClassCard
            key={savedClass.id}
            id={savedClass.id}
            name={savedClass.name}
            duration={savedClass.duration}
            intervalTime={savedClass.intervalTime}
            onRemoveClassClick={handleRemoveClass}
            onPlayClassClick={handlePlayClass}
          />
        );
      })}
    </div>
  );
}
