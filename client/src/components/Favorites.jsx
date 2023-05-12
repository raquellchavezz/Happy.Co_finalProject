import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import FavoriteButton from "./FavoriteButton";
import { useAuth0 } from "@auth0/auth0-react";
//I want my favorites component to show all products that have been favortied by user

const Favorites = (props) => {
  //props.favArray has all my favs
  //TODO: show all favs can reuse some component logic
  //or make new component
  console.log("favorites", props.favoriteArray); //checking if favorites array is logged in browser
  const loadFavs = async () => {
    fetch("/api/favorites")
      .then((response) => response.json())
      .then((products) => {
        console.log("from the code in the backend from fetch", products);
        setFavs(favs);
      });
  };
};

//   const { user, isAuthenticated } = useAuth0();
//   const [favorite, setFavorite] = useState([]);
//   const { product } = props;

//   const loadFav = () => {
//     fetch("/favorites")
//       .then((response) => response.json)
//       .then((data) => {
//         setFavorite(data); //setFavorite functioin will set the favorite to the data the response is coming back with
//       });
//   };
//   useEffect(() => {
//     loadFav();
//   }, []);

// };

//   useEffect(() => {
//     const fetchFavorites = async () => {
//       if (isAuthenticated) {
//         const response = await fetch(
//           `https://fakestoreapi.com/users/${user.sub}/favorites`
//         );
//         const data = await response.json();
//         setFavorites(data);
//       }
//     };
//     fetchFavorites();
//   }, [user, isAuthenticated]);

//   const handleFavoriteToggle = async (productId) => {
//     if (!isAuthenticated) {
//       // If the user is not authenticated, show a message or redirect to login page
//       return "/";
//     }

//     const isFavorite = favorites.some((fav) => fav.productId === productId);
//     const url = `https://fakestoreapi.com/users/${user.sub}/favorites/${productId}`;
//     const method = isFavorite ? "DELETE" : "POST";

//     const response = await fetch(url, { method });
//     if (response.ok) {
//       // Update the favorites state if the API call is successful
//       if (isFavorite) {
//         setFavorites(favorites.filter((fav) => fav.productId !== productId));
//       } else {
//         const data = await response.json();
//         setFavorites([...favorites, data]);
//       }
//     } else {
//       // Handle error if the API call fails
//     }
//   };

//   return (
//     <Container>
//       <Grid columns={3}>
//         {favorites.map((fav) => (
//           <Grid.Column key={fav.productId}>
//             <FavoriteButton
//               isFavorite={true}
//               productId={fav.productId}
//               onFavoriteToggle={handleFavoriteToggle}
//             />
//           </Grid.Column>
//         ))}
//       </Grid>
//     </Container>
//   );

export default Favorites;
