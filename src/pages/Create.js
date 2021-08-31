import SettingsForm from "../components/SettingsForm";

export default function Create({
  handleSaveFormInput,
  handleEditClass,
  listOfClasses,
  classIdToEdit,
  isEdit,
  handleUpdateEntry,
}) {
  return (
    <SettingsForm
      handleSaveFormInput={handleSaveFormInput}
      handleEditClass={handleEditClass}
      classIdToEdit={classIdToEdit}
      listOfClasses={listOfClasses}
      isEdit={isEdit}
      handleUpdateEntry={handleUpdateEntry}
    />
  );
}
