export type ICategory =
  | "meat"
  | "pastaGrains"
  | "spice"
  | "dairy"
  | "fruitVeg"
  | "canned"
  | "bakery"
  | "frozen"
  | "readyMade"
  | "alcohol"
  | "asian"
  | "baking"
  | "saucesCanned"
  | "juice"
  | "oil";

export interface IMealIngredient {
  name: string;
  checked: boolean;
  count: number;
  category: ICategory;
}

export interface IMeal {
  name: string;
  ingredients: IMealIngredient[];
}

export interface IMealComplete {
  name: string;
  checked: boolean;
  ingredients: IMealIngredient[];
}

export interface IMealIngredientCategory {
  name: ICategory;
  values: IMealIngredient[];
}
