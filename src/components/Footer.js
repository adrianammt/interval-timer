import { NavLink } from "react-router-dom";
import "./Footer.css";
import { IoTimer, IoAddCircle, IoHeart } from "react-icons/io5";

export default function Footer() {
  return (
    <nav className="NavBar">
      <NavLink
        to="/create"
        className="NavIcon"
        activeClassName="NavIcon--active"
      >
        <IoAddCircle alt="Create icon" />
      </NavLink>
      <NavLink
        to="/myList"
        className="NavIcon"
        activeClassName="NavIcon--active"
      >
        <IoTimer alt="My List icon" />
      </NavLink>
      <NavLink
        to="/favourites"
        activeClassName="NavIcon--active"
        className="NavIcon"
      >
        <IoHeart alt="My Favourites icon" />
      </NavLink>
    </nav>
  );
}
