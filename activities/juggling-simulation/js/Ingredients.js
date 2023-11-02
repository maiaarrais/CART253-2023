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
      image(this.image, this.x, this.y, this.width, this.height);
    }
  
    move() {
      this.y += this.speedY;
    }
  
    bounceOffBurger(burger) {
        
    }
  }