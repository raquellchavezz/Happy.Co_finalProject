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
          <Image floated="right" size="mini" src={product.image} />
          <Card.Header> {product.title}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
          <Card.Header>Molly Thomas</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={product.image} />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
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
