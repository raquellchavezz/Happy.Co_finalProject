import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import FavoriteButton from "./FavoriteButton";
import { useAuth0 } from "@auth0/auth0-react";

const ProductCard = ({
  product,
  isFavorite,
  setFavoriteArray,
  favoriteArray,
}) => {
  // console.log("favoriteArray from productCard", favoriteArray);
  const { user, isAuthenticated } = useAuth0();
  return (
    <Card>
      <Card.Content>
        <Image alt="image of product" size="small" src={product.image} />

        <Card.Header> {product.title}</Card.Header>
        <Card.Meta>${product.price}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content extra className="heart-icon">
        <FavoriteButton
          disabled={isAuthenticated ? false : true}
          productId={product.id}
          isFavorite={isFavorite}
          setFavoriteArray={setFavoriteArray}
          favoriteArray={favoriteArray}
        />
      </Card.Content>
    </Card> //just want a single card so you dont need card.group
  );
};

export default ProductCard;
