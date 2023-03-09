import { createSlice } from "@reduxjs/toolkit";
import meals from "../../helpers/peoplesMeals";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: meals,
  reducers: {
    clearSelectedMeals: (state) => {
      for (const [, meals] of Object.entries(state)) {
        meals.forEach((meal) => (meal.checked = false));
      }
    },
    updateMeal: (state, action) => {
      const mealsFromState = state[action.payload.groupId];
      const meal = mealsFromState.find(
        (meal) => meal.name === action.payload.meal.name
      );
      if (meal) {
        meal.checked = !meal.checked;
      }
    },
    setRandomMeals: (state, action) => {
      // Get meals from state like before
      const mealsFromState = state[action.payload.groupId];
      // Cast the string to a number using const myVar = +value;
      // (from action payload)
      const pickAmount = +action.payload.value;

      // Set all meals and unchecked .map()
      const meals = mealsFromState.map((item) => ({
        ...item,
        checked: false,
      }));

      for (let i = 0; i < pickAmount; i++) {
        // Get random number between array length
        const random = Math.floor(Math.random() * meals.length);
        // Use bracket notation to get a random meal from the meal array
        const mealToPick = meals[random];
        mealToPick.checked = true;
      }

      return {
        ...state,
        [action.payload.groupId]: meals,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMeal, setRandomMeals, clearSelectedMeals } =
  mealsSlice.actions;

export default mealsSlice.reducer;
