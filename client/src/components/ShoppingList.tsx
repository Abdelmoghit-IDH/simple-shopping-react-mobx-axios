import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";


function ShoppingList(props) {

  const [items, setItems] = useState([
    { id: uuidv4(), name: "Eggs" },
    { id: uuidv4(), name: "Milk" },
    { id: uuidv4(), name: "Steak" },
    { id: uuidv4(), name: "Water" },
  ]);

  return (
    <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rm" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              setItems(items.concat({ id: uuidv4(), name }));
            }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    onClick={() => {
                      setItems(items.filter((item) => item.id !== id));
                    }}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
  )
}

export default ShoppingList;
