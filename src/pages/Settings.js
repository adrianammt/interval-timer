import SettingsForm from "../components/SettingsForm";
import { useParams } from "react-router-dom";
import useClassList from "../hooks/useClassList";

export default function EditSettings() {
  const { classList, updateClass } = useClassList();
  const { id } = useParams();

  const classToEdit = classList.find((savedClass) => savedClass.id === id);

  function handleUpdateClassSettings(updatedClass) {
    updateClass(id, updatedClass);
  }

  return (
    <SettingsForm
      initialClassInput={classToEdit}
      id={id}
      buttonName="Update
  Class"
      onSubmit={handleUpdateClassSettings}
    />
  );
}
