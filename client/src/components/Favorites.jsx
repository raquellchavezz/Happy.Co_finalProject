import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function showFav(props) {
  const { product } = props;
  const [favortites, setFavorites] = useState([]); //empty array of fav items
  //we want to load all the favIitems the user liked
  const loadFavorites = () => {
    fetch("/api/addFavorite") //fetching the user and product id
      .then((response) => response.json)
      .then((data) => {
        setFavorites(data); //setting favorities to that data response we got back which would be the favItem
      });
  };
}
useEffect(() => {
  loadFavorites();
}, []);

const postFavProduct = (newFavProduct) => {
  return fetch("/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newFavProduct),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("A Post Was Made ", data);
      //setFav(data);
      loadFavorites();
    });
};
