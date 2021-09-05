import { Switch, Route, Redirect } from "react-router-dom";
import Create from "../pages/Create";
import MyList from "../pages/MyList";
import Favourites from "../pages/Favourites";
import PlayClass from "../pages/PlayClass";
import EditSettings from "../pages/Settings";
import Welcome from "../pages/Welcome";
import "./Main.css";
import { ToastContainer } from "react-toast";

export default function Main() {
  return (
    <main className="Content">
      <ToastContainer delay={2000} position={"top-center"} />
      <Switch>
        <Route path="/playClass/:id">
          <PlayClass />
        </Route>
        <Route path="/settings/:id">
          <EditSettings />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/myList">
          <MyList />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/">
          <Redirect to="/welcome" />
        </Route>
      </Switch>
    </main>
  );
}
