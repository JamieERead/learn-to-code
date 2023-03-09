import { IMealComplete } from "../types";
import { allMeals as ALL_MEALS, Meals, MealsStringMapComplete } from "./meals";
import people from "./people";

/**
 * Create a 'checked' property on every meal and ingredient and mark as false
 */
const getAllMeals = (): MealsStringMapComplete => {
  let allMeals: MealsStringMapComplete = {};

  for (const [key, values] of Object.entries(ALL_MEALS)) {
    const newMeal: IMealComplete = {
      name: values.name,
      ingredients: values.ingredients,
      checked: false,
    };

    allMeals[key] = newMeal;
  }

  return allMeals;
};

const allMeals = getAllMeals();

/**
 * Jamies Meals
 */
const jamiesMeals = [
  allMeals[Meals.curryChips],
  allMeals[Meals.beefStew],
  allMeals[Meals.chilliConcarne],
].sort((a, b) => (a.name < b.name ? -1 : 1));

/**
 * Student Meals
 */
const studentMeals = [
  allMeals[Meals.crispyChickenTenders],
  allMeals[Meals.pizza],
].sort((a, b) => (a.name < b.name ? -1 : 1));

/**
 * All other meals
 */
const getAllOtherMeals = () => {
  // Remove duplicates that are stored in other meal lists
  const allOtherMeals = [];
  const meals = [...jamiesMeals, ...studentMeals];

  for (const [, value] of Object.entries(allMeals)) {
    if (!meals.find((meal) => meal.name === value.name)) {
      allOtherMeals.push(value);
    }
  }

  return allOtherMeals.sort((a, b) => (a.name < b.name ? -1 : 1));
};

const meals = {
  [people.jamie]: jamiesMeals,
  [people.student]: studentMeals,
  [people.allOther]: getAllOtherMeals(),
};

export default meals;
