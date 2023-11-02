class Ingredient {
    constructor(x, y, w, h, img, speed) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.image = img;
      this.speedY = speed;
    }
  
    display() {
    // display the image for the ingredient 
      image(this.image, this.x, this.y, this.width, this.height);
    }
  
    move() {
        this.y += this.speedY;

    // Check if the ingredient is out of the canvas boundaries
    if (this.y < 0) {
      this.speedY = abs(this.speedY); // Reverse direction when reaching the top
    } else if (this.y + this.height > height) {
      // Remove the ingredient when it goes out of bounds
      let index = ingredients.indexOf(this);
      if (index !== -1) {
        ingredients.splice(index, 1);
      }
    }
    }
  
    bounceOffBurger(burger) {
        if (
            this.x + this.width > burger.x &&
            this.x < burger.x + burger.width &&
            this.y + this.height > burger.y
          ) {
            this.speedY = -this.speedY; // Reverse the vertical direction when it touches the burger
          }
    }
  }