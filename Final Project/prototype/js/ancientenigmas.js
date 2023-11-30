let backgroundImage;
let narratorImage;
let continueButton;

let isOnSecondScreen = false;

function preload() {
  // Load your background and narrator images
  backgroundImage = loadImage('assets/images/ancientbg.jpeg');
  narratorImage = loadImage('assets/images/traveler.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initialize the continue button
  continueButton = createButton('Continue');
  continueButton.position(width / 2 - 50, height - 50);
  continueButton.mousePressed(goToSecondScreen);
}

function draw() {
  if (!isOnSecondScreen) {
    // Draw the first screen
    image(backgroundImage, 0, 0, width, height);
    drawNarrator();
    drawTextBox();
  } else {
    // Draw the second screen
    background(200); // You can change the background color for the second screen
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("This is the second screen!", width / 2, height / 2);
  }
}

function drawNarrator() {
  // Draw the rectangle with oval edges
  let rectWidth = 600;
  let rectHeight = 200;
  let ovalRadius = 20;
  let rectX = (width - rectWidth) / 2;
  let rectY = height - rectHeight - 20;

  fill(255, 200);
  stroke(255);
  strokeWeight(2);

  beginShape();
  vertex(rectX + ovalRadius, rectY);
  vertex(rectX + rectWidth - ovalRadius, rectY);
  quadraticVertex(rectX + rectWidth, rectY, rectX + rectWidth, rectY + ovalRadius);
  vertex(rectX + rectWidth, rectY + rectHeight - ovalRadius);
  quadraticVertex(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - ovalRadius, rectY + rectHeight);
  vertex(rectX + ovalRadius, rectY + rectHeight);
  quadraticVertex(rectX, rectY + rectHeight, rectX, rectY + rectHeight - ovalRadius);
  vertex(rectX, rectY + ovalRadius);
  quadraticVertex(rectX, rectY, rectX + ovalRadius, rectY);
  endShape(CLOSE);

  // Draw the narrator image
  let narratorWidth = 100;
  let narratorHeight = 100;
  let narratorX = (width - narratorWidth) / 2;
  let narratorY = rectY - narratorHeight - 20;

  image(narratorImage, narratorX, narratorY, narratorWidth, narratorHeight);
}

function drawTextBox() {
  // Draw the text on top
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  noStroke();
  text("Your text goes here", width / 2, height - 150);
}

function goToSecondScreen() {
  isOnSecondScreen = true;
  continueButton.remove(); // Remove the continue button from the first screen
}


