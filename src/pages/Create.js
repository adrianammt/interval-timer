import SettingsForm from "../components/SettingsForm";

export default function Create({
  handleSaveFormInput,
  handleEditClass,
  listOfClasses,
  classIdToEdit,
}) {
  const classToEdit = listOfClasses.filter(
    (savedClass) => savedClass.id === classIdToEdit
  );
  console.log(listOfClasses);
  console.log(classToEdit);
  console.log(classIdToEdit);

  return (
    <SettingsForm
      classToEdit={classToEdit[0]}
      handleSaveFormInput={handleSaveFormInput}
      handleEditClass={handleEditClass}
    />
  );
}
