import meals from "../../../helpers/peoplesMeals";
import store from "../../store";
import { updateMeal } from "../mealsReducer";

describe("Meals Reducer", () => {
  it("Should return peoples meals", () => {
    const state = store.getState().meals;
    console.log(JSON.stringify(state.jamie[0]));
    expect(state).toEqual(meals);
  });

  it("Should update a meals checked property", async () => {
    // Arrange
    const groupId = "jamie";
    const meal = {
      name: "Beef Stew",
    };

    // Act
    const result = await store.dispatch(updateMeal({ groupId, meal }));

    // Assert
    expect(result.type).toEqual("meals/updateMeal");

    const state = store.getState().meals;
    expect(state.jamie[0].checked).toBeTruthy();
  });
});
