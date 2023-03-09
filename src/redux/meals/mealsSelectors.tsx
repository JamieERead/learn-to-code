import { IMealComplete } from "../../types";
import { RootState } from "../store";

export const getMealsForGroup = (
  state: RootState,
  groupId: string
): IMealComplete[] => {
  return state.meals[groupId] || [];
};

export const getSelectedMeals = (state: RootState): IMealComplete[] => {
  const selectedMeals: IMealComplete[] = [];

  for (const [meal] of Object.entries(state.meals)) {
    const meals = state.meals[meal];
    meals.forEach((meal) => {
      if (meal.checked) {
        selectedMeals.push(meal);
      }
    });
  }

  return selectedMeals;
};
