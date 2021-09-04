import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toastSavedMessage from "../service/toastSavedMessage";

export default function useClassList() {
  const [classList, setClassList] = useState(() => {
    return JSON.parse(localStorage.getItem("classList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("classList", JSON.stringify(classList));
  }, [classList]);

  function addClass(newClass) {
    const classToSave = {
      ...newClass,
      id: uuidv4(),
      isFavourite: false,
    };

    setClassList([...classList, classToSave]);
    toastSavedMessage("Class successfully created!");
  }

  function updateClass(id, updatedClass) {
    const newClassList = classList.map((savedClass) => {
      if (savedClass.id === id) {
        return {
          id,
          ...updatedClass,
          isFavourite: savedClass.isFavourite,
        };
      }

      return savedClass;
    });

    setClassList(newClassList);
    toastSavedMessage("Class successfully updated!");
  }

  function removeClass(id) {
    const newClassList = classList.filter((savedClass) => {
      return savedClass.id !== id;
    });

    setClassList(newClassList);
  }

  function toggleFavourite(id) {
    const toToggleClass = classList.filter(
      (savedClass) => savedClass.id === id
    );
    toToggleClass[0].isFavourite = !toToggleClass[0].isFavourite;

    const toggledClassIndex = classList.findIndex(
      (savedClass) => savedClass.id === id
    );
    setClassList([
      ...classList.slice(0, toggledClassIndex),
      toToggleClass[0],
      ...classList.slice(toggledClassIndex + 1),
    ]);
  }

  return {
    classList,
    addClass,
    updateClass,
    removeClass,
    toggleFavourite,
  };
}
