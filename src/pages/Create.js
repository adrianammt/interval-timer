import SettingsForm from "../components/SettingsForm";

import useClassList from "../hooks/useClassList";

export default function Create() {
  const { addClass } = useClassList();

  function handleClassSubmit(savedClass) {
    addClass(savedClass);
  }

  return <SettingsForm onSubmit={handleClassSubmit} buttonName="Save" />;
}
