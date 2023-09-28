/**
 * Dodge-em activity 
 * Maia Arrais 
 * The purpose of this program is to try and avoid all the balls that randomly appear on the screen. Good luck!
 * 
 */

let balls = [];
let user = {
  x: 250,
  y: 250,
  size: 60,
  fill: {
    r: 0,
    g: 204,
    b: 204
  }
};

let skyImg;

function preload() {
  skyImg = loadImage("assets/images/sky.jpg"); //loading the image
}

function setup() {
  createCanvas(750, 500);
  // Image display resizing to fit canvas
  skyImg.resize(750, 500);
  noCursor();
  initializeProgram();
}

function draw() {
  background(0);
  image(skyImg, 0, 0);
  noStroke();

  // Update and display each ball
  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    ball.move();
    ball.display();

    // Check for interaction
    let d = dist(user.x, user.y, ball.x, ball.y);
    if (d < ball.segmentSize / 2 + user.size / 2) {
      noLoop();
    }

    // Remove balls that are out of the canvas
    if (ball.x > width + ball.segmentSize / 2) {
      balls.splice(i, 1);
    }
  }

  // User movement
  user.x = mouseX;
  user.y = mouseY;

  // Create new random balls 
  if (frameCount % 15 == 0) { // Create a new ball every 30 frames
    let newBall = new Ball();
    balls.push(newBall);
  }

  // Display user
  fill(user.fill.r, user.fill.g, user.fill.b);
  ellipse(user.x, user.y, user.size);
}

class Ball {
  constructor() {
    this.x = 0;
    this.y = random(0, height);
    this.segmentSize = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.fill = {
      r: 51,
      g: 51,
      b: 255
    };
    this.vx = this.speed;
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  display() {
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.segmentSize);
  }

  
}

function initializeProgram() {
    balls = []; // Clear the array to start with no balls
    loop(); // Start or resume the program loop
  }
function keyPressed() {
    if (key === 'r' || key === 'R') {
      initializeProgram(); // Reset the program when 'r' or 'R' is pressed
    }
  }
