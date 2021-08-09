import { Switch, Route } from "react-router-dom";
import Create from "../pages/Create";
import MyList from "../pages/MyList";
import Favourites from "../pages/Favourites";
import "./Main.css";

export default function Main() {
  return (
    <main className="Content">
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/myList">
          <MyList />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </main>
  );
}
