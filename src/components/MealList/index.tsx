import React from "react";
import { Accordion } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateMealIngredient } from "../../redux/shopping/shoppingReducer";
import { getShoppingListByMeal } from "../../redux/shopping/shoppingSelector";
import { IMealComplete, IMealIngredient } from "../../types";
import ListItem from "../ListItem";

const MealList = () => {
  const meals = useAppSelector(getShoppingListByMeal);
  const dispatch = useAppDispatch();

  const onHandleChange = (meal: IMealComplete, ing: IMealIngredient) => {
    dispatch(updateMealIngredient({ meal, ingredient: ing }));
  };

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
                onHandleChange={() => onHandleChange(meal, ing)}
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
