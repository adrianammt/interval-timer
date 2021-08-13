import ClassCard from "../components/ClassCard";
import { useEffect, useState } from "react";

export default function MyList() {
  const [savedClasses, setSavedClasses] = useState([]);

  useEffect(() => {
    const savedClasses = JSON.parse(localStorage.getItem("classList")) || [];
    setSavedClasses(savedClasses);
  }, []);

  return (
    <div className="ClassCard__wrapper">
      {savedClasses.map((savedClass) => {
        return (
          <ClassCard
            key={savedClass.id}
            name={savedClass.name}
            duration={savedClass.duration}
            intervalTime={savedClass.intervalTime}
          />
        );
      })}
    </div>
  );
}
