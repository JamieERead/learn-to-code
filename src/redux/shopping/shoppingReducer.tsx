import { createSlice } from "@reduxjs/toolkit";
import { IMealComplete, IMealIngredientCategory } from "../../types";

export interface ShoppingState {
  meals: IMealComplete[];
  ingredients: IMealIngredientCategory[];
}

const initialState: ShoppingState = {
  meals: [],
  ingredients: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    createShoppingList: (state, action) => {
      // Unchecks all meals and creates a merged ingredients list
      const meals: IMealComplete[] = action.payload.map(
        (meal: IMealComplete) => ({ ...meal, checked: false })
      );
      const allIng = meals.map((meal) => meal.ingredients).flat();
      const ingredientsCat: IMealIngredientCategory[] = [];

      allIng.forEach((ing) => {
        let category = ingredientsCat.find((cat) => cat.name === ing.category);
        if (category) {
          // We have this category already
          let found = category.values.find((item) => item.name === ing.name);
          if (found) {
            // Increase count and name
            found.count = found.count + 1;
          } else {
            // Add to the ingredients array
            category.values.push({ ...ing });
          }
        } else {
          ingredientsCat.push({
            name: ing.category,
            values: [{ ...ing }],
          });
        }
      });

      // Sort all ingredients by name
      ingredientsCat.forEach((ing) => {
        ing.values.sort((a, b) => (a.name < b.name ? -1 : 1));
      });

      // Sort by longest list of ingredients first
      ingredientsCat.sort((a, b) =>
        a.values.length < b.values.length ? 1 : -1
      );

      return {
        ...state,
        ingredients: ingredientsCat,
        meals,
      };
    },
    updateMealIngredient: (state, action) => {
      const { meal, ingredient } = action.payload;
      const mealToUpdate = state.meals.find((item) => item.name === meal.name);
      const ingredientToUpdate = mealToUpdate?.ingredients.find(
        (ing) => ing.name === ingredient.name
      );

      // Check if ingredient should be checked/unchecked
      if (ingredientToUpdate) {
        ingredientToUpdate.checked = !ingredientToUpdate.checked;
      }

      // If all ingredients are checked, mark the whole meal as checked
      if (mealToUpdate) {
        const allChecked = mealToUpdate?.ingredients.every(
          (ing) => ing.checked
        );
        mealToUpdate.checked = allChecked;
      }
    },
    updateIngredient: (state, action) => {
      const { category, ingredient } = action.payload;
      const foundCat = state.ingredients.find((cat) => cat.name === category);
      if (foundCat) {
        const foundIng = foundCat.values.find((ing) => ing.name === ingredient);
        if (foundIng) {
          foundIng.checked = !foundIng.checked;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { createShoppingList, updateMealIngredient, updateIngredient } =
  shoppingSlice.actions;

export default shoppingSlice.reducer;
