/**
 * Intro Screen 
 * Maia Arrais 40246035
 * 
 * This specific code introduce the idea of the game and gives you the necessary instructions for the next part of the game. 
 */

let instructionsVisible = false;

function setup() {
  createCanvas(800, 600);
  background(255); // White background
  noLoop(); 
  textFont('Arial'); 
  textAlign(CENTER, CENTER);
}

function draw() {
  // colorful cubes in the background creating a cool pattern
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      fill(random(255), random(255), random(255));
      noStroke();
      rect(i, j, 50, 50);
    }
  }

  // Title text
  textSize(80);
  fill(255); // White text
  text("Go Grocery Shopping \nYou Need It!", width / 2, 250);
  textSize(45);
  text("Click the screen to view instructions", width / 2, 400);

  // Show instructions when the user clicks the screen
  if (instructionsVisible) {
    fill(100); // Gray rectangle
    rect(80, 100, 650, 400);

    textSize(20);
    fill(255); // White text
    text("The purpose of this game is to collect the following quantities\n of the different items. Have fun on your Grocery Shopping!\n 1. Click on any 3 apples. \n 2. Click on any 3 Carrots.\n 3. Click on any 3 bottles of milk. \n 4. Click on any 3 bottles of chocolate milk. \n 5. Click on the following Avocados: 1, 3, and 4 from left to right. \n 6. Click on the following Carrots: 2, 4, and 5. \n 7. Click on the following jars of Jam: 1, 4, 6. \n 8. Click on the following jars of Peanut Butter: 2, 3, and 5." , width / 2, 280);

    // Action prompt
   textSize(20);
   fill(255); // White text
   text("Press Any Key to Begin", width / 2, 450);
  }
}

function keyPressed() {
  //transition to the next screen
    window.location.href = 'index.html';
}

function mouseClicked() {
  // Show instructions when the user clicks the screen
  instructionsVisible = true;
  redraw(); // Redraw the canvas to display instructions
}






