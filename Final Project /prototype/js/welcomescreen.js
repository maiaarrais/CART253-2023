let backgroundColors = ['#FFD700', '#87CEEB', '#8B4513'];
    let currentBackgroundColor = 0;
    let transitionDuration = 3000;

    // Particle variables
    let particles = [];

    function setup() {
      createCanvas(windowWidth, windowHeight);
      setInterval(changeTimePeriod, transitionDuration);

      // Create initial particles
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    }

    function draw() {
      background(backgroundColors[currentBackgroundColor]);
      updateParticles();
      displayWelcomeText();
    }

    function updateParticles() {
      for (let particle of particles) {
        particle.update();
        particle.display();
      }
    }

    function displayWelcomeText() {
      fill(255);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('Temporal Quest', width / 2, height / 2);
      textSize(24);
      text('Click to Start', width / 2, height / 2 + 50);
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