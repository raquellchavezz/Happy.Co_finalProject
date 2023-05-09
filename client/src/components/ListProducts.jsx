import React, { useState, useEffect } from "react";
// import MyForm from "./Form";
import ProductCard from "./ProductCard";
import { Card, Container } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

const ListProducts = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  //created a component
  //dealing with products now
  // this is my original state with an array of products
  const [products, setProducts] = useState([]);
  //products is a state variable which uses the useState hook, which initializes the value of products as an empty array.
  // the second element of the array returned by useState is a function named setProducts that can be used to update the value of products.

  //this is the state needed for the UpdateRequest
  // const [editingStudent, setEditingStudent] = useState(null);

  const loadProducts = async () => {
    //created a function that will get a list of products from a server using the 'fetch'
    //pass in products as a prop
    // A function to fetch the list of products that will be load anytime that list change
    fetch("/api/products") //changed this for proxy
      .then((response) => response.json())
      .then((products) => {
        console.log("from the code in the backend from fetch", products);
        setProducts(products);
      });
  };

  useEffect(() => {
    loadProducts(); //called when component is first rendered, this function will run as a side effect
  }, []); //array of dependencies that control when the side effect should be run
  //the useEffect hook is used to run the loadProducts function when the component is mounted (rendered into the DOM) for the first time, which is indicated by the empty dependency array [].
  //This ensures that the list of products is loaded only once, when the component is first rendered.

  return (
    <Container>
      {" "}
      {/*can add classname here to do some styling, segment, container https://react.semantic-ui.com/elements/container/*/}
      <Card.Group centered itemsPerRow={4}>
        {" "}
        {/*can style group here, card styling would be done in product card compoennet*/}
        {products.map((product) => (
          <ProductCard product={product} key={product.id} /> //need unique key
        ))}
      </Card.Group>
    </Container>
  );
};

export default ListProducts;
