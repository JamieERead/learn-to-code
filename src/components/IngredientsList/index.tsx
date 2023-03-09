import React from "react";
import { Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateIngredient } from "../../redux/shopping/shoppingReducer";
import { getShoppingListByIngredients } from "../../redux/shopping/shoppingSelector";
import ListItem from "../ListItem";
import ProgressCounter from "../ProgressCounter";

const IngredientsList = () => {
  const ingredients = useAppSelector(getShoppingListByIngredients);
  const dispatch = useAppDispatch();

  const onHandleChange = (category: string, ingredient: string) => {
    dispatch(updateIngredient({ category, ingredient }));
  };

  return (
    <>
      <ProgressCounter />
      {ingredients.map((cat) => (
        <Card className="mb-4">
          <Card.Header>{cat.name}</Card.Header>
          <Card.Body>
            {cat.values.map((ing, index) => (
              <ListItem
                onHandleChange={() => onHandleChange(cat.name, ing.name)}
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
