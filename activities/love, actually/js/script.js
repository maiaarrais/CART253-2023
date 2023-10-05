/**
 * Love, Actually - Activity  
 * Maia Arrais 
 * This program takes two circles that are trying to find each other (find true love) and display an output message. 
 * 
 */

let circle1, circle2;
let title = "The Journey of Love";
let startTime;
let trueLoveFound = false;

function setup() {
  createCanvas(400, 400);
  frameRate(120);
  startTime = millis();
  circle1 = new Circle(random(width), random(height), 20);
  circle2 = new Circle(random(width), random(height), 20);
}

function draw() {
  background(128, 0, 32);

  if (millis() - startTime < 3000) {
    displayTitle();
  } else {
    if (!trueLoveFound) {
      moveCircles();
      displayCircles();

      if (circle1.intersects(circle2)) {
        trueLoveFound = true;
      }
    }

    if (trueLoveFound) {
      displayMessage("True Love Was Found");
      noLoop(); // Stop the animation loop
    }
  }
}

function displayTitle() {
  textSize(40);
  fill(0);
  textAlign(CENTER, CENTER);
  text(title, width / 2, height / 2);
}

function displayMessage(message) {
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
}

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Check boundaries
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.x > width) {
      this.x = width;
      this.vx *= -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    }
    if (this.y > height) {
      this.y = height;
      this.vy *= -1;
    }
  }

  display() {
    noStroke();
    fill(222, 165, 164); // Pink
    ellipse(this.x, this.y, this.radius * 2);
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.radius + other.radius;
  }
}

function moveCircles() {
  circle1.update();
  circle2.update();
}

function displayCircles() {
  circle1.display();
  circle2.display();
}

