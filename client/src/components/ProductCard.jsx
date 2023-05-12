import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import FavoriteButton from "./FavoriteButton";

const ProductCard = ({ product, isFavorite, setFavoriteArray }) => {
  return (
    <Card>
      <Card.Content>
        <Image size="small" src={product.image} />

        <Card.Header> {product.title}</Card.Header>
        <Card.Meta>${product.price}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content extra className="heart-icon">
        <FavoriteButton productId={product.id} isFavorite={isFavorite} setFavoriteArray ={setFavoriteArray}/>
      </Card.Content>
    </Card> //just want a single card so you dont need card.group
  );
};

export default ProductCard;
