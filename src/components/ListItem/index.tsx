import React from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";
import { IMealComplete, IMealIngredient } from "../../types";

interface Props {
  meal: IMealComplete | IMealIngredient;
  onHandleChange: (meal: IMealComplete | IMealIngredient) => void;
}

const ListItem: React.FC<Props> = ({ meal, onHandleChange }) => {
  const getName = (item: IMealComplete | IMealIngredient) => {
    // @ts-ignore
    return item.count > 1 ? `${item.count} x ${item.name}` : item.name;
  };

  return (
    <ListGroup.Item
      action={meal.checked}
      variant={meal.checked ? "success" : ""}
      onClick={() => onHandleChange(meal)}
    >
      <Row>
        <Col>{getName(meal)}</Col>
        <Col xs={2} className="text-center">
          <Form.Check type="checkbox" checked={meal.checked} />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ListItem;
