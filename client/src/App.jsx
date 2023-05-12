import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import "semantic-ui-css/semantic.min.css";
import Profile from "./components/Profile";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Favorites from "./components/Favorites";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [favoriteArray, setFavoriteArray] = useState([]); //will store all of favs for this user
  const [email, setEmail] = useState("");
  useEffect(() => {
    //TODO:
    //pass value of user.email auht0 set
    //makes a call to db to get all fav and put them into fav array but using setFavoritesArray
    fetch(`/api/user/getFavs/${email}`)
      .then((response) => response.json())
      .then((result) => {
        setFavoriteArray(result);
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MyNavBar />}>
        <Route
          index
          element={
            <ListProducts
              setFavoriteArray={favoriteArray}
              favoriteArray={favoriteArray}
            />
          }
        />
        <Route path="user-profile" element={<Profile />} />
        <Route
          path="/favorites"
          element={<Favorites favoriteArray={favoriteArray} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
