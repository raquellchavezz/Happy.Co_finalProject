import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const ProductCard = ({ product }) => {
  //maybe pass product into it as a prop.. before  students, toUpdate, toDelete inside{} later

  // const onUpdate = (toUpdateStudent) => {
  //     toUpdate(toUpdateStudent)
  // }

  // const onDelete = (toDeleteStudent) => {
  //     toDelete(toDeleteStudent)
  // }

  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <div>
            <Image.Group
              floated="center"
              size="mini"
              src={product.image}
              wrapped
              ui={false}
            />
          </div>

          <Card.Header> {product.title}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>

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
