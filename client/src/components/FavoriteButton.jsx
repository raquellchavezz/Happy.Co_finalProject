import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const FavoriteButton = () => { //creating a componenet for favorite button
  const [isFavorite, setIsFavorite] = useState(false); //we want to have a state for keeping track of if a user favorited 
  //one of the products which will be represented by the productCard component
  //productCard = one card per product so all the things applied to productCard will happen to each product 


  const handleFavorite = () => { //we need a function that will toggle the isFavorite srare between true and false everytime the user clicks the button

    setIsFavorite(!isFavorite); //the useState hook is used to start the isFavorite variable to false 
    //so that nothing is being favorited when user first sees the page 
  };

  return (
    <Button icon labelPosition="left" onClick={handleFavorite}> {/*when user clicks the button, the handleFavorite function will be triggered which then sets the isFavorite state to the opposite of its current value (could be true --> false or false--> true )*/}
      <Icon name="heart" color={isFavorite ? "red" : "grey"} />
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
};

export default FavoriteButton;
