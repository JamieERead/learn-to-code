import React from "react";
import { ListGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setRandomMeals, updateMeal } from "../../redux/meals/mealsReducer";
import { getMealsForGroup } from "../../redux/meals/mealsSelectors";
import { IMealComplete, IMealIngredient } from "../../types";
import ListItem from "../ListItem";
import RandomBoxForm from "../RandomBoxForm";

interface Props {
  groupId: string;
  title: string;
}

const ListContainer: React.FC<Props> = ({ groupId, title }) => {
  const meals = useAppSelector((state) => getMealsForGroup(state, groupId));
  const dispatch = useAppDispatch();

  const onHandleChange = (meal: IMealComplete | IMealIngredient) => {
    dispatch(updateMeal({ groupId, meal }));
  };

  const onPickRandomMeal = (value: string) => {
    dispatch(setRandomMeals({ groupId, value }));
  };

  return (
    <div>
      <h2 className="mt-4">{title}</h2>
      <RandomBoxForm
        onPickRandomMeal={onPickRandomMeal}
        maxLength={meals.length}
      />
      <ListGroup>
        {meals.map((meal) => (
          <ListItem
            onHandleChange={onHandleChange}
            key={meal.name}
            meal={meal}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default ListContainer;
