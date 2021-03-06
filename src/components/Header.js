import "./Header.css";
import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <section className="Header">
      <Switch>
        <Route path="/settings">
          <h2>Update Class Settings</h2>
        </Route>
        <Route path="/create">
          <h2>Create a Class</h2>
        </Route>
        <Route path="/myList">
          <h2>My Saved Classes</h2>
        </Route>
        <Route path="/playClass">
          <h2>Play Class</h2>
        </Route>
        <Route path="/favourites">
          <h2>My Favourite Classes</h2>
        </Route>
      </Switch>
    </section>
  );
}
