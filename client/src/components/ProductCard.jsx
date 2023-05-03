import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProductCard = ({ product }) => {
  //maybe pass product into it as a prop.. before  students, toUpdate, toDelete inside{} later

  // const onUpdate = (toUpdateStudent) => {
  //     toUpdate(toUpdateStudent)
  // }

  // const onDelete = (toDeleteStudent) => {
  //     toDelete(toDeleteStudent)
  // }

  return (
    <Card>
      <Card.Content>
        <Image size="small" src={product.image} />

        <Card.Header> {product.title}</Card.Header>
        <Card.Meta>${product.price}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
    </Card> //just want a single card so you dont need card.group

    // <Card>
    //   <Card.Body>
    //     <Card.Title>{product.title} </Card.Title>
    //     <Card.Subtitle>placeholder</Card.Subtitle>
    //     {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
    //         <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
    //   </Card.Body>
    // </Card>
  );
};

export default ProductCard;
