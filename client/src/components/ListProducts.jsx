import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
// import MyForm from "./Form";
import ProductCard from "./ProductCard";
import { Card, Container } from "semantic-ui-react";
const ListProducts = () => {
  //created a component
  //dealing with products now
  // this is my original state with an array of products
  const [products, setProducts] = useState([]);
  //products is a state variable which uses the useState hook, which initializes the value of products as an empty array.
  // the second element of the array returned by useState is a function named setProducts that can be used to update the value of products.

  //this is the state needed for the UpdateRequest
  // const [editingStudent, setEditingStudent] = useState(null);

  const loadProducts = () => {
    //created a function that will get a list of products from a server using the 'fetch'
    //pass in products as a prop
    // A function to fetch the list of products that will be load anytime that list change
    fetch("http://localhost:8080/api/products")
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

  // const onSaveStudent = (newStudent) => {
  //   //console.log(newStudent, "From the parent - List of Students");
  //   setStudents((students) => [...students, newStudent]);
  // };

  // //A function to control the update in the parent (student component)
  // const updateStudent = (savedStudent) => {
  //   // console.log("Line 29 savedStudent", savedStudent);
  //   // This function should update the whole list of students -
  //   loadStudents();
  // };

  // //A function to handle the Delete funtionality
  // const onDelete = (student) => {
  //   //console.log(student, "delete method")
  //   return fetch(`http://localhost:8080/api/students/${student.id}`, {
  //     method: "DELETE",
  //   }).then((response) => {
  //     //console.log(response);
  //     if (response.ok) {
  //       loadStudents();
  //     }
  //   });
  // };

  // //A function to handle the Update functionality
  // const onUpdate = (toUpdateStudent) => {
  //   //console.log(toUpdateStudent);
  //   setEditingStudent(toUpdateStudent);
  // };

  return (
    <Container>
      {" "}
      {/*can add classname here to do some styling, segment, container https://react.semantic-ui.com/elements/container/*/}
      <Card.Group centered itemsPerRow={4}>
        {" "}
        {/*can style group here, card styling would be done in product card compoennet*/}
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default ListProducts;
