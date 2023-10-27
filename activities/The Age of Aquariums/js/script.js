/**
 * The Age of Aquariums - Activity  
 * Maia Arrais - 40246035
 * This game consists of a shark controlled by the mouse (the user), and the goal is to eat the fishes that appear on the screen while avoiding touching the moving red circles while keeping track of the number of fish eaten.
 * 
 */
let shark;
let sharkWidth = 50; // Desired shark size
let sharkHeight = 50;
let fishImages = [];
let fishes = [];
let sharkEaten = 0;
let circles = [];

let lastBallTime = 0; // Store the time when the last ball was created

function preload() {

  shark = loadImage('assets/images/shark.png', img => {
    shark = img;
    shark.resize(sharkWidth, sharkHeight);
  });


  fishImages.push(loadImage('assets/images/fish.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);

  // Randomly add fish
  if (frameCount % 40 === 0) {
    let img = random(fishImages);
    let x = random(width);
    let y = random(height);
    let speed = random(1, 3);
    fishes.push(new Fish(x, y, img, speed));
  }

  // Display and update fish
  for (let i = fishes.length - 1; i >= 0; i--) {
    fishes[i].display();
    fishes[i].update();

    // Check if shark eats the fish
    let d = dist(shark.x, shark.y, fishes[i].x, fishes[i].y);
    if (d < shark.width / 2 + fishes[i].size / 2) {
      sharkEaten++;
      fishes.splice(i, 1); // Remove the eaten fish from the array
    }
  }

  // Move the shark to follow the mouse
  shark.x = mouseX;
  shark.y = mouseY;

  // Display shark
  image(shark, shark.x - shark.width / 2, shark.y - shark.height / 2);

  // Display and update circles
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].display();
    circles[i].update();

    // Check if shark touches a circle
    let d = dist(shark.x, shark.y, circles[i].x, circles[i].y);
    if (d < shark.width / 2 + circles[i].radius) {
      gameOver();
    }
  }

  // Display the shark-eaten count
  fill(0);
  textSize(20);
  text('Fish Eaten: ' + sharkEaten, 10, 30);

  // Create new balls every 6 seconds (360 frames)
  if (frameCount - lastBallTime > 180) {
    let x = random(width);
    let y = random(height);
    circles.push(new Circle(x, y));
    lastBallTime = frameCount; // Update the last ball creation time
  }
}

function gameOver() {
  background(255, 0, 0);
  fill(255);
  textSize(24);
  text('Game Over! You touched a circle!', 50, height / 2);
  noLoop(); // Stop the game loop
}

class Fish {
  constructor(x, y, img, speed) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.speed = speed;
    this.size = 40;
  }

  display() {
    image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  update() {
    let angle = random(TWO_PI);
    let dx = cos(angle) * this.speed;
    let dy = sin(angle) * this.speed;
    this.x += dx;
    this.y += dy;
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.vx = random(1, 3); // Add horizontal velocity
    this.vy = random(1, 3); // Add vertical velocity
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2);
  }

  update() {
    // Move the circle with velocity
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the canvas edges
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }
}



