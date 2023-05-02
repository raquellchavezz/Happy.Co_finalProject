import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
// import MyForm from "./Form";
// import Product from "./ProductCard";

const ListProducts = () => {
  //dealing with products now
  // this is my original state with an array of students
  // const [students, setStudents] = useState([]);
  const [products, setProducts] = useState([]); //or null?
  //this is the state needed for the UpdateRequest
  // const [editingStudent, setEditingStudent] = useState(null);

  const loadProducts = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((students) => {
        console.log("from the code in the backend from fetch", products);
        setProducts(products);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

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
    <div className="mybody">
      <div className="list-products">
        <h2>Techtonica Participants </h2>
        <ul>
          {products.map((product, index) => {
            //map is like a for loop so for every product in the array of objs of porducts we will loop through each product and its index
            return (
              <li key={product.id}> {product.title}</li>
              // <li key={product.id}>
              //   {" "}
              //   <Product
              //     product={product}
              //     // toDelete={onDelete}
              //     // toUpdate={onUpdate}
              //   />
              // </li>
            );
          })}
        </ul>
      </div>
      {/* <MyForm
      key={editingStudent ? editingStudent.id : null}
      onSaveStudent={onSaveStudent}
      editingStudent={editingStudent}
      onUpdateStudent={updateStudent} */}
      {/* /> */}
    </div>
  );
};

export default ListProducts;
