import React from "react";
import { Card } from "react-bootstrap";
import { IMealIngredient, IMealIngredientCategory } from "../../types";
import ListItem from "../ListItem";
import ProgressCounter from "../ProgressCounter";

const IngredientsList = () => {
  const ingredients: IMealIngredient[] = [
    { name: "salmon", checked: false, category: "meat", count: 1 },
  ];

  const ingCat: IMealIngredientCategory[] = [
    {
      name: "meat",
      values: ingredients,
    },
  ];

  const count = {
    total: 10,
    checked: 5,
  };

  const onHandleChange = () => {};

  return (
    <>
      <ProgressCounter count={count} />
      {ingCat.map((cat) => (
        <Card>
          <Card.Header>{cat.name}</Card.Header>
          <Card.Body>
            {cat.values.map((ing, index) => (
              <ListItem
                onHandleChange={onHandleChange}
                key={index}
                meal={ing}
              />
            ))}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default IngredientsList;
