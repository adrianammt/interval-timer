import { Switch, Route, Redirect } from "react-router-dom";
import Create from "../pages/Create";
import MyList from "../pages/MyList";
import Favourites from "../pages/Favourites";
import PlayClass from "../pages/PlayClass";
import "./Main.css";
import { ToastContainer } from "react-toast";

export default function Main({
  onSaveFormInput,
  listOfClasses,
  onRemoveClassClick,
  toggleFavourite,
}) {
  return (
    <main className="Content">
      <ToastContainer delay={3000} position={"top-center"} />
      <Switch>
        <Route path="/myList/:id">
          <PlayClass data={listOfClasses} toggleFavourite={toggleFavourite} />
        </Route>
        <Route path="/create">
          <Create onSaveFormInput={onSaveFormInput} />
        </Route>
        <Route path="/myList">
          <MyList data={listOfClasses} handleRemoveClass={onRemoveClassClick} />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/">
          <Redirect to="/myList" />
        </Route>
      </Switch>
    </main>
  );
}
