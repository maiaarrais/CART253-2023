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
function mousePressed() {
  circles.push(new Circle(mouseX, mouseY));
}

class Circle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.radius = 20;
    this.oscillator = new p5.Oscillator();
    this.oscillator.setType('sine');
    this.oscillator.start();
  }
}