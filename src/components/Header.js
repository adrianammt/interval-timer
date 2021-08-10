import "./Header.css";
import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <section className="Header">
      <Switch>
        <Route path="/create">
          <h2>Class Settings</h2>
        </Route>
        <Route path="/myList">
          <h2>My Saved Classes</h2>
        </Route>
        <Route path="/favourites">
          <h2>My Favourite Classes</h2>
        </Route>
      </Switch>
    </section>
  );
}
