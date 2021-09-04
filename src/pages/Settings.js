import SettingsForm from "../components/SettingsForm";
import { useParams } from "react-router-dom";
import useClassList from "../hooks/useClassList";
import { useHistory } from "react-router";
export default function EditSettings() {
  const { classList, updateClass } = useClassList();
  const { id } = useParams();

  const history = useHistory();

  const classToEdit = classList.find((savedClass) => savedClass.id === id);

  function handleUpdateClassSettings(updatedClass) {
    updateClass(id, updatedClass);
    history.goBack();
  }

  return (
    <SettingsForm
      initialClassInput={classToEdit}
      id={id}
      buttonName="Done"
      onSubmit={handleUpdateClassSettings}
    />
  );
}
