let backgroundImage;
let narratorImage;
let initialSize = 200;
let continueButton;
let storyTexts = [
  "Once upon a time...",
  "In a faraway land...",
  "There lived a mysterious narrator...",
  "Who had an amazing story to tell...",
  "Press continue to reveal the next part of the story..."
];
let currentTextIndex = 0;

function preload() {
  backgroundImage = loadImage('assets/images/ancientbg.jpeg');
  narratorImage = loadImage('assets/images/traveler.png', img => {
    img.resize(initialSize, 0); // Resize only the width while maintaining aspect ratio
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  continueButton = createButton('Continue');
  continueButton.position(width / 2 - 50, height - 50);
  continueButton.mousePressed(advanceStory);
  
}

function draw() {
  background(backgroundImage);

  // Display narrator image
  image(narratorImage, width / 2 - narratorImage.width / 2, 50);

  // Display story text in a square bubble
  displaySquareBubbleText(storyTexts[currentTextIndex], width / 2, height / 2);

  // Display continue button
  continueButton.show();

   // Display the traveler image with dynamic size
   image(narratorImage, mouseX, mouseY);
}

function displaySquareBubbleText(text, x, y) {
  let bubbleWidth = 300;
  let bubbleHeight = 100;
  let cornerRadius = 10;

  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(x, y, bubbleWidth, bubbleHeight, cornerRadius);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text(text, x, y);
}

function advanceStory() {
  currentTextIndex++;

  // Check if the story is finished
  if (currentTextIndex >= storyTexts.length) {
    // Clear the screen
    background(255);
    continueButton.hide();
  }
}
