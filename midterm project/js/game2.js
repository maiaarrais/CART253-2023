/**
 * Go Grocery shopping
 * Maia Arrais 40246035
 * 
 * This last part is just a screen that displays a rolling credit screen and goodbye message. 
 * Hope you enjoyed!
 */
let credits = [];
let creditsY;
let creditsSpeed = 2;

function setup() {
  createCanvas(800, 600);
  textSize(32);
  textFont("Comic Sans MS");
  credits.push("Congratulations!");
  credits.push("You've Successfully Finished the Game!");
  credits.push("Enjoy All of Your Groceries.");
  credits.push("Until Next Time");
  credits.push("Made with ❤️ by Maia");
  credits.push("Icons from flaticon.com");
  credits.push("Background image from google images");


  creditsY = height; // Start credits at the bottom
  frameRate(30);
}

function draw() {
  background(0); // Black background

  // Draw TV frame
  fill(100);
  rect(50, 50, width - 100, height - 100);

  // Scroll credits
  creditsY -= creditsSpeed;

  for (let i = 0; i < credits.length; i++) {
    // Change the text color randomly
    fill(random(255), random(255), random(255));
    text(credits[i], width / 6, creditsY + i * 40);
  }

  if (creditsY + credits.length * 40 < 0) {
    noLoop(); // Stop the animation when credits are done scrolling
  }
}








