let circles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  for (let circle of circles) {
    circle.move();
    circle.checkEdges();
    circle.display();
  }
}
