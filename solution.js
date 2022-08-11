let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false],
  ];
  for (const item of board) {
    // outer loop
    //   console.log(item);
    for (const inner of item) console.log(inner); // inner loop
  }
  console.log(`------------------------`);
  const doggo = {
    name: "Max",
    breed: "German Shephard",
    foods: ["chicken", "fish", "eggs"],
    getFood() {
      for (const food of this.foods) {
        console.log(food);
      }
    },
  };
  console.log(doggo.foods[1]);
  console.log(`-----------------------------`);
  doggo.getFood();
  console.log(`------------------------`);
  const recipes = {
    ingredients: {
      butter: "butter",
      sugar: "sugar",
      flour: "flour",
    },
    getValue() {
      for (const item in recipes.ingredients) {
        console.log(recipes.ingredients[item]);
      }
    },
    getValues2() {
      const arr = Object.values(this.ingredients);
      console.log(arr);
      for (const item of arr) {
        console.log(item);
      }
    },
  };
  recipes.ingredients.ginger = "ginger";
  recipes.ingredients.sugar = "brown sugar";
  console.log(recipes);
  recipes.getValue();
  recipes.getValues2();
  
  
  
  
  
  
  