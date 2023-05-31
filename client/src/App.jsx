import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import "semantic-ui-css/semantic.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Favorites from "./components/Favorites";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [favoriteArray, setFavoriteArray] = useState([]); //will store all of favs for this user
  const { user } = useAuth0();
  const [userObj, setUserObj] = useState(null);
  const [products, setProducts] = useState([]);

  //products is a state variable which uses the useState hook, which initializes the value of products as an empty array.
  // the second element of the array returned by useState is a function named setProducts that can be used to update the value of products.

  //this is the state needed for the UpdateRequest
  // const [editingStudent, setEditingStudent] = useState(null);

  const loadProducts = async () => {
    // Check if userObj and userObj.email exist
    //created a function that will get a list of products from a server using the 'fetch'
    //pass in products as a prop
    // A function to fetch the list of products that will be load anytime that list change
    fetch("/api/products") //changed this for proxy
      .then((response) => response.json())
      .then((products) => {
        // console.log("from the code in the backend from fetch", products);
        setProducts(products);
      })
      .catch((error) => {
        // console.error("Error fetching products:", error);
        // Handle the error, e.g., display an error message to the user
      });
  };

  const loadFavorites = async () => {
    // console.log("checking if loadFav is called");
    if (userObj && userObj.email) {
      //created a function that will get a list of products from a server using the 'fetch'
      //pass in products as a prop
      // A function to fetch the list of products that will be load anytime that list change
      fetch(`/api/user/getFavs/${userObj.email}`) //changed this for proxy
        .then((response) => response.json())
        .then((data) => {
          // console.log(
          //   "from the code in the backend from fetch userObj",
          //   userObj
          // );
          setFavoriteArray(data);
        });
    }
  };
  useEffect(() => {
    if (userObj) loadFavorites(); // Only call this if userObj is populated
  }, [userObj]); // This means, once your user logs in and this object is populated, it will execute this useEffect
  useEffect(() => {
    loadProducts(); //called when component is first rendered, this function will run as a side effect
  }, []); //array of dependencies that control when the side effect should be run
  //the useEffect hook is used to run the loadProducts function when the component is mounted (rendered into the DOM) for the first time, which is indicated by the empty dependency array [].
  //This ensures that the list of products is loaded only once, when the component is first rendered.

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MyNavBar setUserObj={setUserObj} />}>
        <Route
          index
          element={
            <ListProducts
              setFavoriteArray={setFavoriteArray}
              favoriteArray={favoriteArray}
              products={products}
            />
          }
        />
        {/* <Route path="user-profile" element={<Profile />} /> */}
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteArray={favoriteArray}
              products={products}
              setFavoriteArray={setFavoriteArray}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider data-testid="app" router={router} />;
}

export default App;
