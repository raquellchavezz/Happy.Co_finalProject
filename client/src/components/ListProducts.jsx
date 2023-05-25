import React, { useState, useEffect } from "react";
// import MyForm from "./Form";
import ProductCard from "./ProductCard";
import { Card, Container } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

const ListProducts = (props) => {
 
  //created a component
  //dealing with products now
  // this is my original state with an array of products
  // console.log("from ListProducts from favoriteArray:", props.favoriteArray);
  return (
    <Container>
      {" "}
      {/*can add classname here to do some styling, segment, container https://react.semantic-ui.com/elements/container/*/}
      <Card.Group centered itemsPerRow={4}>
        {" "}
        {/*can style group here, card styling would be done in product card compoennet*/}
        {props.products.map((product) => (
          //if the product id in favarr then isfav = true

          <ProductCard
            product={product}
            key={product.id}
            favoriteArray={props.favoriteArray}
            isFavorite={props.favoriteArray.includes(product.id)} //going thru each product and looking to see in fav array for the product id and see if its true for being a fav
            setFavoriteArray={props.setFavoriteArray}
          /> //need unique key
        ))}
      </Card.Group>
    </Container>
  );
};

export default ListProducts;
