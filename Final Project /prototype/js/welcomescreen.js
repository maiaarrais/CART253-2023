   
   
   
   let backgroundColors = ['#000', '#002633', '#330000'];
    let currentBackgroundColor = 0;
    let transitionDuration = 3000;

    // Particle variables
    let particles = [];

    // Spiral variables
    let angle = 0;
    let angleIncrement = 0.05;
    let radiusIncrement = 0.5;

    function setup() {
      createCanvas(windowWidth, windowHeight);
      setInterval(changeTimePeriod, transitionDuration);

      // Create initial particles
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function draw() {
      background(backgroundColors[currentBackgroundColor]);
      updateParticles();
      drawTimeMachine();
      updateSpiral();
      displayWelcomeText();
    }

    function drawTimeMachine() {
      translate(width / 2, height / 2);

      // Draw the outer rings of the time machine
      for (let i = 0; i < 5; i++) {
        stroke(255, 150);
        noFill();
        strokeWeight(2);
        ellipse(0, 0, i * 120, i * 120); // adjustment of spiral size
      }

      // Draw the central vortex
      noStroke();
      fill(255, 50);
      ellipse(0, 0, 50, 50);
    }
    // for the spirals and how they're displayed 
    function updateSpiral() {
      push(); // Save the current transformation state
      translate(0, 0);
      rotate(angle);
      let radius = 0;

      for (let i = 0; i < 600; i++) { // Increased the number of points for a denser spiral
        let x = radius * cos(i);
        let y = radius * sin(i);
        fill(255);
        ellipse(x, y, 5, 5);
        radius += radiusIncrement;
      }

      pop(); // Restore the previous transformation state
      angle += angleIncrement;
    }

    // for the particles 
    function updateParticles() {
      for (let particle of particles) {
        particle.update();
        particle.display();
      }
    }

    function displayWelcomeText() {
      // Border
      stroke(0);
      strokeWeight(2);
      //title 
      fill(255);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('Time Travel Quest', 0, 0);
      //subtitle
      textSize(24);
      text('Click to Start', 0, 50);
      // Reset stroke settings
      noStroke();
    }

    function changeTimePeriod() {
      currentBackgroundColor = (currentBackgroundColor + 1) % backgroundColors.length;
    }

    function mouseClicked() {
      window.location.href = "game.html";
    }

    // Particle class
    class Particle {
      constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.size = random(5, 15);
        this.color = color(random(255), random(255), random(255));
      }

      update() {
        this.position.add(this.velocity);

        // Wrap around the screen
        if (this.position.x < 0) this.position.x = width;
        if (this.position.x > width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = height;
        if (this.position.y > height) this.position.y = 0;
      }

      display() {
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size, this.size);
      }
    }