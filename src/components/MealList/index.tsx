import React from "react";
import { Accordion } from "react-bootstrap";
import { IMealComplete } from "../../types";
import ListItem from "../ListItem";

const MealList = () => {
  const meals: IMealComplete[] = [
    {
      name: "fish",
      checked: false,
      ingredients: [
        { name: "salmon", checked: false, category: "meat", count: 1 },
      ],
    },
  ];

  const onHandleChange = () => {};

  return (
    <Accordion defaultActiveKey="0">
      {meals.map((meal, index) => (
        <Accordion.Item
          className={meal.checked ? "checked" : ""}
          eventKey={index.toString()}
        >
          <Accordion.Header>{meal.name}</Accordion.Header>
          <Accordion.Body>
            {meal.ingredients.map((ing, index) => (
              <ListItem
                onHandleChange={onHandleChange}
                meal={ing}
                key={index}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default MealList;
