  let asteroids = [];
  let aliens = [];
  let spaceship;
  let backgroundImage;
  let aliensEaten = 0;

    function preload() {
      spaceship = loadImage("assets/images/spaceship.png");
      asteroidImage = loadImage("assets/images/asteroid.png");
      alienImage = loadImage("assets/images/alien.png");
      backgroundImage = loadImage("assets/images/space.jpg");
    }

    function setup() {
      createCanvas(windowWidth, windowHeight);
      noCursor();
      spaceship = new Spaceship(spaceship);
      alert("Welcome to the future in space!\nUse your mouse to control the spaceship.\nAvoid asteroids and take at least 15 aliens with you!");
    }

    function draw() {
      background(backgroundImage);

      // Update and display each asteroid
      for (let i = asteroids.length - 1; i >= 0; i--) {
        let asteroid = asteroids[i];
        asteroid.move();
        asteroid.display();

        // Check for collision with spaceship
        if (spaceship.intersects(asteroid)) {
          handleCollision();
        }

        // Remove asteroids that are out of the canvas
        if (asteroid.x > width + asteroid.size / 2) {
          asteroids.splice(i, 1);
        }
      }

      // Update and display each alien
      for (let i = aliens.length - 1; i >= 0; i--) {
        let alien = aliens[i];
        alien.move();
        alien.display();

        // Check for collision with spaceship
        if (spaceship.intersects(alien)) {
          handleAlienEaten(alien);
        }

        // Remove aliens that are out of the canvas
        if (alien.x > width + alien.size / 2) {
          aliens.splice(i, 1);
        }
      }

      // Display spaceship
      spaceship.update();
      spaceship.display();

      // Create new random asteroids
      if (frameCount % 60 == 0) {
        let newAsteroid = new Asteroid(asteroidImage);
        asteroids.push(newAsteroid);
      }

      // Create new random aliens
      if (frameCount % 100 == 0) {
        let newAlien = new Alien(alienImage);
        aliens.push(newAlien);
      }

      // Display counter
      textSize(20);
      fill(255);
      text(`Aliens Eaten: ${aliensEaten}`, 20, 30);
    }

    function handleCollision() {
      if (aliensEaten >= 15) {
        openNewWindow();
      } else {
        resetGame();
      }
    }

    function handleAlienEaten(alien) {
      aliens.splice(aliens.indexOf(alien), 1);
      aliensEaten++;
    }

    function resetGame() {
      alert("Collision! Restarting the game.");
      noLoop();
      initializeGame();
      loop(); // Resume the game loop
    }

    function initializeGame() {
      asteroids = [];
      aliens = [];
      aliensEaten = 0;
      spaceship = new Spaceship(spaceship.img);
    }

    function openNewWindow() {
      let congratsMessage = createDiv(`Congratulations!<br>You've completed the mission! You've eaten ${aliensEaten} aliens!`);
      congratsMessage.position(width / 2, height / 2);
      congratsMessage.style("background-color", "#333");
      congratsMessage.style("color", "#fff");
      congratsMessage.style("padding", "50px");
      congratsMessage.style("border-radius", "10px");
      congratsMessage.center("horizontal");
    
      setTimeout(() => {
        window.location.href = 'lastScreen.html';
      }, 1000); // Redirect after x seconds
    }

    class Asteroid {
      constructor(img) {
        this.size = 80;
        this.x = 0;
        this.y = random(0, height);
        this.speed = 5;
        this.img = img;
      }

      move() {
        this.x += this.speed;
      }

      display() {
        image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      }
    }

    class Alien {
      constructor(img) {
        this.size = 40;
        this.x = 0;
        this.y = random(0, height);
        this.speed = 7;
        this.img = img;
      }

      move() {
        this.x += this.speed;
      }

      display() {
        image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      }
    }

    class Spaceship {
      constructor(img) {
        this.size = 70;
        this.x = width / 2;
        this.y = height / 2;
        this.img = img;
      }

      update() {
        this.x = mouseX;
        this.y = mouseY;
      }

      display() {
        image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      }

      intersects(object) {
        // Check if any point on the object is inside the spaceship's bounding box
        return (
          this.x - this.size / 2 < object.x + object.size / 2 &&
          this.x + this.size / 2 > object.x - object.size / 2 &&
          this.y - this.size / 2 < object.y + object.size / 2 &&
          this.y + this.size / 2 > object.y - object.size / 2
        );
      }
    }

