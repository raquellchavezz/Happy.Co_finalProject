import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function showFav(props) {
  const { product } = props;
  const [favortites, setFavorites] = useState([]); //empty array of fav items
  //we want to load all the favIitems the user liked
  const loadFavorites = () => {
    fetch("/api/favorites") //fetching the user and product id
      .then((response) => response.json)
      .then((data) => {
        setFavorites(data); //setting favorities to that data response we got back which would be the favItem
      });
  };
}

useEffect(() => {
  loadFavorites();
}, []);
