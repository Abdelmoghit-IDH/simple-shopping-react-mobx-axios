import { useContext } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react-lite";
import ItemStore from "../store";

const ShoppingList = () => {
  const itemStore = useContext(ItemStore);
  const { items, removeItem, addItem } = itemStore;

  return (
    <>
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rm" }}
          onClick={(_) => {
            const name = prompt("Enter Item");
            if (name) {
              addItem({
                id: uuidv4(),
                name: name,
              });
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
                    onClick={(_) => removeItem(id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </>
  );
};

export default observer(ShoppingList);
