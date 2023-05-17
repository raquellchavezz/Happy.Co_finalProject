// import React, { useState } from "react";
// import { Button, Icon } from "semantic-ui-react";

// const FavoriteButton = () => { //creating a componenet for favorite button
//   const [isFavorite, setIsFavorite] = useState(false); //we want to have a state for keeping track of if a user favorited
//   //one of the products which will be represented by the productCard component
//   //productCard = one card per product so all the things applied to productCard will happen to each product

//   const handleFavorite = () => { //we need a function that will toggle the isFavorite srare between true and false everytime the user clicks the button

//     setIsFavorite(!isFavorite); //the useState hook is used to start the isFavorite variable to false
//     //so that nothing is being favorited when user first sees the page
//   };

//   return (
//     <Button icon labelPosition="left" onClick={handleFavorite}> {/*when user clicks the button, the handleFavorite function will be triggered which then sets the isFavorite state to the opposite of its current value (could be true --> false or false--> true)*/}
//       <Icon name="heart" color={isFavorite ? "red" : "grey"} />
//       {isFavorite ? "Remove from favorites" : "Add to favorites"}
//     </Button>
//   );
// };

//i want the data of if the user liked a product to be sent to my backend on click

// export default FavoriteButton;
import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const FavoriteButton = ({
  productId,
  isFavorite,
  setFavoriteArray,
  favoriteArray,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  
  //adding a fav to the fav array and rendering on fav page
  const addFavorite = () => {
    let newFav = [...favoriteArray];
    newFav.push(productId);
    setFavoriteArray(newFav);
  };

  //remove fa

  const handleFavoriteToggle = () => {
    if (!favorite) {
      addFavorite();
    }
    //called when user clicks/unclis
    setFavorite(!favorite); //calls the setFavorite function with the current opposite value of favorite
    //TODO: should change favorite array if user fav bc we want to add to fav array or remove from array if unfav
    //TODO: update the db with either put or delete
    //so if its not fav we want to show the toggle to be add to fav
    // onFavoriteToggle(productId);
  };

  //

  return (
    <Button icon labelPosition="left" onClick={handleFavoriteToggle}>
      <Icon name="heart" color={favorite ? "red" : "grey"} />
      {favorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
};

export default FavoriteButton;
