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
     // Adjust the vertical position based on the speed
      this.y += this.speedY;
    }
  
    bounceOffBurger(burger) {
        if (
            this.x + this.width > burger.x &&
            this.x < burger.x + burger.width &&
            this.y + this.height > burger.y
          ) {
            this.speedY = -this.speedY; // Reverse the vertical direction
          }
    }
  }