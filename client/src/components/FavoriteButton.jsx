import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Icon } from "semantic-ui-react";
const FavoriteButton = ({
  productId,
  isFavorite,
  setFavoriteArray,
  favoriteArray,
  disabled,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const { user, isAuthenticated } = useAuth0();

  // };

  const addFavoriteProduct = (productId) => {
    // if (!isAuthenticated) {
    //   alert("Please log in to add to favorites!");
    //   return;
    // console.log("favorite array current state w/ addFavProduct", favoriteArray);
    fetch(`api/addFavProduct/${productId}/${user.email}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        let newFav = [...favoriteArray];
        newFav.push(productId);
        setFavoriteArray(newFav);
        // console.log("newFav from addFavorite func", newFav);
        // console.log("after add favProduct", data); //favoritearray wouldnt change right after calling setfav array only after comp renders
      });
  };

  const removeFavorite = (productId) => {
    fetch(`api/removeFavProduct/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(
        //   "favoriteArray in removeFavorite func after grabbing data",
        //   favoriteArray
        // );
        let removeFav = [...favoriteArray];
        // console.log("before resetting the state of setFavArray", removeFav);
        removeFav = removeFav.filter(
          //assign back to removeFav since filter doesnt modifiy orig array just returns a new array
          (favProductId) => favProductId !== productId
        ); //which items should be left over in the favoriteaArray
        //filter function is used to create a new array removeFav that contains the elements
        //from favoriteArrFay excluding the one with the productId to be removed.
        setFavoriteArray(removeFav); //changes array in place??
        // console.log(
        //   "removeFav array from removeFavorite func after reset",
        //   removeFav
        // );
      });
  };

  const handleFavoriteToggle = () => {
    if (!favorite) {
      addFavoriteProduct(productId);
    } else {
      removeFavorite(productId);
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
    <Button
      role="button"
      disabled={disabled}
      icon
      labelPosition="left"
      onClick={handleFavoriteToggle}
    >
      <Icon name="heart" color={favorite ? "red" : "grey"} />
      {favorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
};

export default FavoriteButton;
