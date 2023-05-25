import React, { useState, useEffect } from "react";
import { Container, Grid, Card } from "semantic-ui-react";
import ProductCard from "./ProductCard";

//I want my favorites component to show all products that have been favortied by user

const Favorites = ({ favoriteArray, products, setFavoriteArray }) => {
  //props.favArray has all my favs
  //TODO: show all favs can reuse some component logic
  //or make new component
  // console.log("favorites", favoriteArray); //checking if favorites array is logged in browser

  return (
    <Container data-testid="favs">
      {" "}
      {/*can add classname here to do some styling, segment, container https://react.semantic-ui.com/elements/container/*/}
      <Card.Group centered itemsPerRow={4}>
        {" "}
        {/*can style group here, card styling would be done in product card compoennet*/}
        {products.map((product) =>
          //if the product id in favarr then isfav = true
          favoriteArray.includes(product.id) ? (
            <ProductCard id = "productCard"
              product={product}
              key={product.id}
              favoriteArray={favoriteArray}
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
