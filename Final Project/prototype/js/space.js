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
          gameOver();
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
          aliens.splice(i, 1);
          aliensEaten++;
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
      if (frameCount % 70 == 0) {
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

    function gameOver() {
      window.location.href = 'lastScreen.html';
    }

    class Asteroid {
      constructor(img) {
        this.size = 40;
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
        this.size = 60;
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



