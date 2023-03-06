import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShoppingListScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      <Button className="mb-4" onClick={() => navigate("/")}>
        Create New List
      </Button>
    </div>
  );
};

export default ShoppingListScreen;
