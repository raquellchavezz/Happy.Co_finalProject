import React, { useState, useEffect } from "react";
import { Container, Grid, Card } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import FavoriteButton from "./FavoriteButton";
import { useAuth0 } from "@auth0/auth0-react";
//I want my favorites component to show all products that have been favortied by user

const Favorites = ({ favoriteArray, products, setFavoriteArray }) => {
  //props.favArray has all my favs
  //TODO: show all favs can reuse some component logic
  //or make new component
  console.log("favorites", favoriteArray); //checking if favorites array is logged in browser
  const loadFavs = async () => {
    fetch("/api/favorites")
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "favorites.jsx from the code in the backend from fetch",
          data
        );
        setFavs(data);
      });
  };
  return (
    <Container>
      {" "}
      {/*can add classname here to do some styling, segment, container https://react.semantic-ui.com/elements/container/*/}
      <Card.Group centered itemsPerRow={4}>
        {" "}
        {/*can style group here, card styling would be done in product card compoennet*/}
        {products.map((product) =>
          //if the product id in favarr then isfav = true
          favoriteArray.includes(product.id) ? (
            <ProductCard
              product={product}
              key={product.id}
              isFavorite={favoriteArray.includes(product.id)} //going thru each product and looking to see in fav array for the product id and see if its true for being a fav
              setFavoriteArray={setFavoriteArray}
            /> //need unique key
          ) : null
        )}
      </Card.Group>
    </Container>
  );
};
export default Favorites;

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
