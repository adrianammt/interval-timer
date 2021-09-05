import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logoAFL.svg";
import "./Welcome.css";

export default function Welcome() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/myList");
  }, 4000);

  return (
    <div className="welcomeMessage__wrapper">
      <Logo className="welcomeMessage__logo" />
      <h1 className="welcomeMessage__text">Your daily practice companion.</h1>
      <div className="welcomeMessage__bg"></div>
    </div>
  );
}
