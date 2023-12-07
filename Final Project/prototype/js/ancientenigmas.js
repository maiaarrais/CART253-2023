let backgroundImage;
let narratorImage;
let continueButton;

let isOnFirstScreen = true;
let isOnSecondScreen = false;
let isOnThirdScreen = false;

let easyPuzzle;
let mediumPuzzle;
let hardPuzzle;

function preload() {
  // Load background and narrator images
  backgroundImage = loadImage('assets/images/ancientbg.jpeg');
  narratorImage = loadImage('assets/images/traveler.png');
  //load pictures puzzle
  easyPuzzle = loadImage('assets/images/image4.jpg');
  mediumPuzzle = loadImage('assets/images/image6.jpg');
  hardPuzzle = loadImage('assets/images/imageIndia.jpg');
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
  } else if (isOnSecondScreen){
    // Draw the second screen
    background(backgroundImage); 
    drawOptions();
  } else if (isOnThirdScreen){
    // Draw the third screen
    background(backgroundImage); 
    drawFinalScreen();
  }
}

function drawNarrator() {
  // Draw the rectangle with oval edges
  let rectWidth = 600;
  let rectHeight = 200;
  let ovalRadius = 20;
  let rectX = (width - rectWidth) / 2;
  let rectY = (300);

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
  let narratorWidth = 250;
  let narratorHeight = 250;
  let narratorX = (width - narratorWidth) / 2;
  let narratorY = rectY - narratorHeight - 20;

  image(narratorImage, narratorX, narratorY, narratorWidth, narratorHeight);
}

function drawTextBox() {
  // Draw the text on top
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  noStroke();
  text("Hi there! Welcome to the Ancient Civilizations.\n When you click continue you will see three puzzles,\nclick on the easy level to learn about Mesopotamia,\n on the medium level to learn about Ancient Egypt, \n and on the hard level to learn about Ancient India.", width / 2, 400);
}


function drawOptions() {
  // Display three images next to each other
  let imageSize = 350;
  let imageSpacing = 50;
  let imageY = height / 2 - imageSize / 2;

  // Easy image
  image(easyPuzzle, (width - 3 * imageSize - 2 * imageSpacing) / 2, imageY, imageSize, imageSize);

  // Medium image
  image(mediumPuzzle, (width - imageSize) / 2, imageY, imageSize, imageSize);

  // Hard image
  image(hardPuzzle, (width + imageSize + imageSpacing) / 2, imageY, imageSize, imageSize);
}

function drawFinalScreen() {
  // Draw the third screen content
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
}

function goToSecondScreen() {
  isOnFirstScreen = false;
  isOnSecondScreen = true;
  continueButton.remove(); // Remove the continue button from the first screen
}

function mouseClicked() {
  let imageSize = 350;
  let imageSpacing = 50;
  let imageY = height / 2 - imageSize / 2;

  // Check if the click is within the bounds of the easy image
  if (
    mouseX > (width - 3 * imageSize - 2 * imageSpacing) / 2 &&
    mouseX < (width - 3 * imageSize - 2 * imageSpacing) / 2 + imageSize &&
    mouseY > imageY &&
    mouseY < imageY + imageSize
  ) {
    window.location.href = 'easyPuzzle.html';
  }

  // Check if the click is within the bounds of the medium image
  if (
    mouseX > (width - imageSize) / 2 &&
    mouseX < (width - imageSize) / 2 + imageSize &&
    mouseY > imageY &&
    mouseY < imageY + imageSize
  ) {
    window.location.href = 'mediumPuzzle.html';
  }

  // Check if the click is within the bounds of the hard image
  if (
    mouseX > (width + imageSize + imageSpacing) / 2 &&
    mouseX < (width + imageSize + imageSpacing) / 2 + imageSize &&
    mouseY > imageY &&
    mouseY < imageY + imageSize
  ) {
    window.location.href = 'hardPuzzle.html';
  }
}


