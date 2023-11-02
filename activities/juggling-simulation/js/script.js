/**
 * Juggling-Simulation (The Burger Bounce)
 * Maia Arrais- 40246035
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let burger;
let ingredients = [];

function preload() {
  //burger bun image preload 
  burger = loadImage('assets/images/burger.png'); 
  //burger meat image preload
  ingredientImage = loadImage('assets/images/ingredients.png'); 
}

function setup() {
  createCanvas(800, 600);

  // Create burger object
  burger = new Burger(width / 2, height - 100, 100, 100, burger);

  // Create meat object 
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height / 2);
    let ingredient = new Ingredient(x, y, 50, 50, ingredientImage, random(1, 3));
    ingredients.push(ingredient);
  }
}

function draw() {
  background(220);

  // Display and move the burger
  burger.display();
  burger.move();

  // Display and handle meat
  for (let i = ingredients.length - 1; i >= 0; i--) {
    ingredients[i].display();
    ingredients[i].move();
    ingredients[i].bounceOffBurger(burger);
 
  }
}
