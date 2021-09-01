import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";
import toastSavedMessage from "./service/toastSavedMessage";

function App() {
  const savedClasses = JSON.parse(localStorage.getItem("classList")) || [];
  const [listOfClasses, setListOfClasses] = useState(savedClasses);
  const [classIdToEdit, setClassIdToEdit] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("classList", JSON.stringify(listOfClasses));
  }, [listOfClasses]);

  function handleSaveFormInput(listOfClassesData) {
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

  function handleEditClass(id) {
    setIsEdit(true);
    setClassIdToEdit(id);
  }

  function toggleIsEdit() {
    setIsEdit(!isEdit);
  }

  function handleUpdateEntry(id, updatedEntry) {
    const index = listOfClasses.findIndex((savedClass) => savedClass.id === id);
    setListOfClasses([
      ...listOfClasses.slice(0, index),
      updatedEntry,
      ...listOfClasses.slice(index + 1),
    ]);
    toggleIsEdit();
    toastSavedMessage("Class updated!");
  }

  return (
    <Div100vh className="App">
      <Header />
      <Main
        handleSaveFormInput={handleSaveFormInput}
        onRemoveClassClick={handleRemoveClass}
        listOfClasses={listOfClasses}
        toggleFavourite={toggleFavourite}
        toggleIsEdit={toggleIsEdit}
        handleUpdateEntry={handleUpdateEntry}
        isEdit={isEdit}
        classIdToEdit={classIdToEdit}
        handleEditClass={handleEditClass}
      />
      <Footer />
    </Div100vh>
  );
}

export default App;
