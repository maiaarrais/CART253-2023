let circles = [];
let notes = ['F3', 'G3', 'Ab4', 'Bb4', 'C4', 'Db4', 'Eb4', 'F4'];

function setup() {
  createCanvas(600, 400);
  userStartAudio(); // Initialize audio
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
    this.oscillator.amp(0.1); // Set amplitude
    this.oscillator.start();

    // Synthesizer setup
    this.note = random(notes);
    this.synth = new p5.PolySynth();
  }

  move() {
    this.position.add(this.velocity);

    // Oscillator frequency based on distance from the center
    let distance = dist(this.position.x, this.position.y, width / 2, height / 2);
    let maxDistance = dist(0, 0, width / 2, height / 2);
    let newFreq = map(distance, 0, maxDistance, 220, 880);
    this.oscillator.freq(newFreq);
  }

  checkEdges() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
      this.playNote();
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
      this.playNote();
    }
  }

  playNote() {
      // Play the note using the synthesizer
      this.synth.play(this.note, 0.2, 0, 0.1);
  }

  display() {
    fill(0);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
}


