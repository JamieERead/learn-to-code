import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FooterButtons: React.FC = () => {
  const navigate = useNavigate();

  const goToShoppingList = () => {
    navigate("/shoppingList");
  };

  return (
    <Row className="mt-4">
      <Col>
        <Button variant="danger" onClick={() => {}}>
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
