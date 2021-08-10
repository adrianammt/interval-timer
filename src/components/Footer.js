import { NavLink } from "react-router-dom";
import "./Footer.css";
import circlePlus from "../images/circle-plus-fill.svg";
import timer from "../images/timer.svg";
import heart from "../images/heart.svg";

export default function Footer() {
  return (
    <nav className="NavBar">
      <NavLink to="/create">
        <img className="NavIcon AddIcon" src={circlePlus} alt="Create icon" />
      </NavLink>
      <NavLink to="/myList">
        <img className="NavIcon" src={timer} alt="My List icon" />
      </NavLink>
      <NavLink to="/favourites">
        <img className="NavIcon" src={heart} alt="My Favourites icon" />
      </NavLink>
    </nav>
  );
}
