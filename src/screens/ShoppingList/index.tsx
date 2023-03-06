import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MealList from "../../components/MealList";

const ShoppingListScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      <Button className="mb-4" onClick={() => navigate("/")}>
        Create New List
      </Button>
      <h2 className="mb-4">Shopping List</h2>

      <Tabs defaultActiveKey="byMeal" className="mb-3">
        <Tab eventKey="byMeal" title="Per Meal">
          <MealList />
        </Tab>
        <Tab eventKey="byIng" title="All Ingredients"></Tab>
      </Tabs>
    </div>
  );
};

export default ShoppingListScreen;
