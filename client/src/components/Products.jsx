import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as ioicons from "react-icons/io5";

const Products = ({ product }) => {
  //maybe pass product into it as a prop.. before  students, toUpdate, toDelete inside{} later

  // const onUpdate = (toUpdateStudent) => {
  //     toUpdate(toUpdateStudent)
  // }

  // const onDelete = (toDeleteStudent) => {
  //     toDelete(toDeleteStudent)
  // }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title} </Card.Title>
        <Card.Subtitle>placeholder</Card.Subtitle>
        {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
      </Card.Body>
    </Card>
  );
};

export default Student;
