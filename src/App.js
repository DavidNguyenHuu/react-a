import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

import MainNavgation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavgation />
      <h1>David's to-do list</h1>
      <Todo text="Item 1" />
      <Todo text="Item 2" />
      <Todo text="Item 3"></Todo>
      <switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </switch>
    </div>
  );
}

export default App;
