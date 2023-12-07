let asteroids = [];
let spaceship;
let backgroundImage;
let startTime; // Variable to store the start time
let gameEnded = false;
  
function preload() {
  spaceship = loadImage("assets/images/spaceship.png");

  asteroidImage1 = loadImage("assets/images/asteroid.png");
  asteroidImage2 = loadImage("assets/images/meteor.png");

  backgroundImage = loadImage("assets/images/space.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  initializeProgram();
  startTime = millis();
}

function draw() {
  background(backgroundImage); // Draw the background image

  if (!gameEnded) {
    // Update and display each asteroid
    for (let i = asteroids.length - 1; i >= 0; i--) {
      let asteroid = asteroids[i];
      asteroid.move();
      asteroid.display();

      // Check for interaction
      if (spaceshipIntersectsAsteroid(spaceship, asteroid)) {
        gameOver();
      }

      // Remove asteroids that are out of the canvas
      if (asteroid.x > width + asteroid.segmentSize / 2) {
        asteroids.splice(i, 1);
      }
    }
  }
  
  // User movement
  spaceship.x = mouseX;
  spaceship.y = mouseY;

  // Create new random asteroids
  if (frameCount % 70 == 0) {
    let newAsteroid;
    if (random() > 0.5) {
      newAsteroid = new Asteroid(asteroidImage1);
    } else {
      newAsteroid = new Asteroid(asteroidImage2);
    }
    asteroids.push(newAsteroid);
  }

  // Display spaceship
  image(spaceship, spaceship.x - spaceship.width / 2, spaceship.y - spaceship.height / 2, 60, 60);
}


function gameOver() {
    // Open a new window
    window.location.href = 'lastScreen.html';
  // Stop the game loop
 gameEnded = true;
}

function spaceshipIntersectsAsteroid(spaceship, asteroid) {
  // Check if any point on the spaceship is inside the asteroid's bounding box
  return (
    spaceship.x - spaceship.width / 2 < asteroid.x + asteroid.segmentSize / 2 &&
    spaceship.x + spaceship.width / 2 > asteroid.x - asteroid.segmentSize / 2 &&
    spaceship.y - spaceship.height / 2 < asteroid.y + asteroid.segmentSize / 2 &&
    spaceship.y + spaceship.height / 2 > asteroid.y - asteroid.segmentSize / 2
  );
}

class Asteroid {
  constructor(img) {
    this.x = 0;
    this.y = random(0, height);
    this.segmentSize = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
    this.img = img;
    this.vx = this.speed;
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  display() {
    image(this.img, this.x - this.segmentSize / 2, this.y - this.segmentSize / 2, this.segmentSize, this.segmentSize);
  }
}

function initializeProgram() {
  asteroids = []; // Clear the array to start with no asteroids
  loop(); // Start or resume the program loop
}

function keyPressed() {
  if (key === "r" || key === "R") {
    initializeProgram(); // Reset the program when 'r' or 'R' is pressed
  }
}

