import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import toastSavedMessage from "./feedbackToUser/toastSavedMessage";

function App() {
  const savedClasses = JSON.parse(localStorage.getItem("classList")) || [];
  const [listOfClasses, setListOfClasses] = useState(savedClasses);

  useEffect(() => {
    localStorage.setItem("classList", JSON.stringify(listOfClasses));
  }, [listOfClasses]);

  function onSaveFormInput(listOfClassesData) {
    setListOfClasses([...listOfClasses, listOfClassesData]);
    toastSavedMessage("Class succesfully saved!");
  }

  function handleRemoveClass(id) {
    const newSavedClasses = listOfClasses.filter(
      (savedClass) => savedClass.id !== id
    );
    setListOfClasses(newSavedClasses);
  }

  function toggleFavourite(id) {
    const toToggleClass = listOfClasses.filter(
      (savedClass) => savedClass.id === id
    );
    toToggleClass[0].isFavourite = !toToggleClass[0].isFavourite;

    const toggledClassIndex = listOfClasses.findIndex(
      (savedClass) => savedClass.id === id
    );
    setListOfClasses([
      ...listOfClasses.slice(0, toggledClassIndex),
      toToggleClass[0],
      ...listOfClasses.slice(toggledClassIndex + 1),
    ]);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onSaveFormInput={onSaveFormInput}
        onRemoveClassClick={handleRemoveClass}
        listOfClasses={listOfClasses}
        toggleFavourite={toggleFavourite}
      />
      <Footer />
    </div>
  );
}

export default App;
