import { ICategory, IMealIngredient } from "../types";

function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export const getIngredientCategoryName = (category: ICategory): string => {
  switch (category) {
    case "fruitVeg":
      return "Fruit & Veg";
    case "readyMade":
      return "Ready Made/Meals";
    case "saucesCanned":
      return "Sauces & Canned Food";
    case "pastaGrains":
      return "Pasta & Sauces";
    default:
      return capitalizeFirstLetter(category);
  }
};

const createIng = (name: string, category: ICategory): IMealIngredient => ({
  name,
  category,
  count: 1,
  checked: false,
});

const ingredients = {
  chicken: createIng("Chicken", "meat"),
  thickCream: createIng("Thick Cream", "dairy"),
  doubleCream: createIng("Double Cream", "dairy"),
  seseameSeeds: createIng("Seseame Seeds", "spice"),
  mangetout: createIng("Mangetout", "fruitVeg"),
  miniSweatCorn: createIng("Mini Sweat Corn", "fruitVeg"),
  carrots: createIng("Carrots", "fruitVeg"),
  noodles: createIng("Noodles", "asian"),
  peas: createIng("Peas", "frozen"),
  beef: createIng("Beef", "meat"),
  celeary: createIng("Celeary", "fruitVeg"),
  rice: createIng("Rice", "pastaGrains"),
  brocolli: createIng("Brocolli", "fruitVeg"),
  coleslaw: createIng("Coleslaw", "readyMade"),
  salmon: createIng("Salmon", "meat"),
  meat: createIng("Meat", "meat"),
  potatos: createIng("Potatoes", "fruitVeg"),
  curryPowder: createIng("Curry Powder", "spice"),
  cucumber: createIng("Cucumber", "fruitVeg"),
  burgerBuns: createIng("Burger Buns", "bakery"),
  yorkshirePuddings: createIng("Yorkshire Puddings", "frozen"),
  tenderstemBroccoli: createIng("Tenderstem Broccoli", "fruitVeg"),
  whiteWine: createIng("White Wine", "alcohol"),
  redWine: createIng("Red Wine", "alcohol"),
  fusilli: createIng("Fusilli", "pastaGrains"),
  paprika: createIng("Paprika", "spice"),
  swede: createIng("Swede", "fruitVeg"),
  burgers: createIng("Burger", "bakery"),
  rosemary: createIng("Rosemary", "fruitVeg"),
  thyme: createIng("Thyme", "fruitVeg"),
  bambooShoots: createIng("Bamboo Shoots", "canned"),
  beanSprouts: createIng("Bean Sprouts", "fruitVeg"),
  sweetCorn: createIng("Sweet Corn", "fruitVeg"),
  leeks: createIng("Leeks", "fruitVeg"),
  tagliatelle: createIng("Tagliatelle", "pastaGrains"),
  cauliflowerCheese: createIng("Frozen Cauliflower Cheese", "frozen"),
  tomatoPaste: createIng("Tomato Paste", "spice"),
  scotchBonnet: createIng("Scotch Bonnet", "fruitVeg"),
  ginger: createIng("Ginger", "fruitVeg"),
  lettuce: createIng("Lettuce", "fruitVeg"),
  coconutMilk: createIng("Coconut Milk", "asian"),
  tikkaMasala: createIng("Tikka Masala", "asian"),
  cheese: createIng("Cheese", "dairy"),
  onions: createIng("Onions", "fruitVeg"),
  sausages: createIng("Sausages", "meat"),
  lamb: createIng("Lamb", "meat"),
  prawns: createIng("Prawns", "meat"),
  pasta: createIng("Pasta", "pastaGrains"),
  pesto: createIng("Pesto", "pastaGrains"),
  spaghetti: createIng("Spaghetti", "pastaGrains"),
  pastaSauce: createIng("Pasta Sauce", "pastaGrains"),
  katsuCurrySauce: createIng("Katsu Curry Sauce", "asian"),
  pankoBreadCrumbs: createIng("Panko Bread Crumbs", "asian"),
  choppedTomatos: createIng("Chopped Tomatos", "pastaGrains"),
  bread: createIng("Bread", "bakery"),
  thaiPaste: createIng("Thai Paste", "asian"),
  lemonGrass: createIng("Lemon Grass", "fruitVeg"),
  parsley: createIng("Parsley", "fruitVeg"),
  cumin: createIng("Cumin", "spice"),
  parmesan: createIng("Parmesan", "dairy"),
  cherryTomato: createIng("Cherry Tomato", "fruitVeg"),
  spinach: createIng("Spinach", "fruitVeg"),
  eggs: createIng("Eggs", "dairy"),
  springOnions: createIng("Sping Onions", "fruitVeg"),
  hotdogs: createIng("Hotdogs", "canned"),
  hotdogBuns: createIng("Hotdog Buns", "bakery"),
  steak: createIng("Steak", "meat"),
  chips: createIng("Chips", "frozen"),
  asparagus: createIng("Asparagus", "fruitVeg"),
  baconLardons: createIng("Bacon Lardons", "meat"),
  bacon: createIng("Bacon", "meat"),
  guacamole: createIng("Guacamole", "readyMade"),
  salsa: createIng("Salsa", "readyMade"),
  flour: createIng("Flour", "baking"),
  sourCream: createIng("Sour Cream", "dairy"),
  parsnips: createIng("Parsnips", "fruitVeg"),
  lambStock: createIng("Lamb Stock", "saucesCanned"),
  beefStock: createIng("Beef Stock", "saucesCanned"),
  chickenStock: createIng("Chicken Stock", "saucesCanned"),
  gravyGranules: createIng("Gravy Granules", "saucesCanned"),
  gravy: createIng("Gravy", "saucesCanned"),
  noddles: createIng("Noddles", "pastaGrains"),
  porkFillet: createIng("Pork Fillet", "meat"),
  tortilla: createIng("Tortilla", "bakery"),
  oregano: createIng("Oregano", "spice"),
  lime: createIng("Lime", "fruitVeg"),
  redOnions: createIng("Red Onions", "fruitVeg"),
  pinappleJuice: createIng("Pinapple Juice", "juice"),
  orangeJuice: createIng("Orange Juice", "juice"),
  oliveOil: createIng("Olive Oil", "oil"),
  garlicPowder: createIng("Garlic Powder", "spice"),
  pizza: createIng("Each Choose a Pizza", "readyMade"),
  soup: createIng("Each Choose a Soup", "canned"),
  oranges: createIng("Oranges", "fruitVeg"),
  tacos: createIng("Tacos", "pastaGrains"),
  garlic: createIng("Garlic", "fruitVeg"),
  honey: createIng("Honey", "saucesCanned"),
  chilli: createIng("Chilli", "fruitVeg"),
  butter: createIng("Butter", "dairy"),
  bbqSauce: createIng("BBQ Sauce", "saucesCanned"),
  meatballs: createIng("Meatballs", "meat"),
  beefMince: createIng("Beef Mince", "meat"),
  peppers: createIng("Peppers", "fruitVeg"),
  kidneyBeans: createIng("Kidney Beans", "saucesCanned"),
  chickenKiev: createIng("Chicken Kiev", "meat"),
  cabbage: createIng("Cabbage", "fruitVeg"),
  redCabbage: createIng("Red Cabbage", "fruitVeg"),
  mayo: createIng("Mayo", "saucesCanned"),
  chorizo: createIng("Chorizo", "readyMade"),
  gammonJoint: createIng("Gammon Joint", "meat"),
  soySauce: createIng("Soy Sauce", "saucesCanned"),
};

export default ingredients;
