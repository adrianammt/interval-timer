import { Switch, Route, Redirect } from "react-router-dom";
import Create from "../pages/Create";
import MyList from "../pages/MyList";
import Favourites from "../pages/Favourites";
import PlayClass from "../pages/PlayClass";
import "./Main.css";
import { ToastContainer } from "react-toast";

export default function Main({
  handleSaveFormInput,
  listOfClasses,
  onRemoveClassClick,
  toggleFavourite,
  handleEditClass,
  classIdToEdit,
  isEdit,
  handleUpdateEntry,
}) {
  return (
    <main className="Content">
      <ToastContainer delay={2000} position={"top-center"} />
      <Switch>
        <Route path="/myList/:id">
          <PlayClass
            listOfClasses={listOfClasses}
            toggleFavourite={toggleFavourite}
            handleEditClass={handleEditClass}
          />
        </Route>
        <Route path="/create">
          <Create
            handleSaveFormInput={handleSaveFormInput}
            listOfClasses={listOfClasses}
            handleEditClass={handleEditClass}
            classIdToEdit={classIdToEdit}
            isEdit={isEdit}
            handleUpdateEntry={handleUpdateEntry}
          />
        </Route>
        <Route path="/myList">
          <MyList
            data={listOfClasses}
            handleRemoveClass={onRemoveClassClick}
            toggleFavourite={toggleFavourite}
          />
        </Route>
        <Route path="/favourites">
          <Favourites
            data={listOfClasses}
            handleRemoveClass={onRemoveClassClick}
            toggleFavourite={toggleFavourite}
          />
        </Route>
        <Route path="/">
          <Redirect to="/myList" />
        </Route>
      </Switch>
    </main>
  );
}
