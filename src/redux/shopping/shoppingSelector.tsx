import { IMealComplete, IMealIngredientCategory } from "../../types";
import { RootState } from "../store";

export const getShoppingListByMeal = (state: RootState): IMealComplete[] => {
  return state.shopping.meals || [];
};

export const getShoppingListByIngredients = (
  state: RootState
): IMealIngredientCategory[] => {
  return state.shopping.ingredients;
};

interface CheckedUnchecked {
  total: number;
  checked: number;
  unchecked: number;
}

export const getTotalCheckedIngredients = (
  state: RootState
): CheckedUnchecked => {
  const ing = state.shopping.ingredients.map((ing) => ing.values).flat();
  const checked = ing.filter((i) => i.checked).length;
  const unchecked = ing.length - checked;
  return {
    total: ing.length,
    checked,
    unchecked,
  };
};
