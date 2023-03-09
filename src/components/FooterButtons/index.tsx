import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearSelectedMeals } from "../../redux/meals/mealsReducer";
import { getSelectedMeals } from "../../redux/meals/mealsSelectors";
import { createShoppingList } from "../../redux/shopping/shoppingReducer";

const FooterButtons: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedMeals = useAppSelector(getSelectedMeals);

  const goToShoppingList = () => {
    dispatch(createShoppingList(selectedMeals));
    navigate("/shoppingList");
  };

  const clearMeals = () => {
    dispatch(clearSelectedMeals());
  };

  return (
    <Row className="mt-4">
      <Col>
        <Button variant="danger" onClick={clearMeals}>
          Clear
        </Button>
      </Col>
      <Col xs={7} style={{ textAlign: "right" }}>
        <Button onClick={goToShoppingList}>Create Shopping List</Button>
      </Col>
    </Row>
  );
};

export default FooterButtons;
