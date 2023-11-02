class Burger {
    constructor(x, y, w, h, img) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.image = img;
    }
  
    display() {
      image(this.image, this.x, this.y, this.width, this.height);
    }
  
    move() {
       // Control the horizontal movement of the burger based on mouse position
     this.x = mouseX - this.width / 2;

    // Ensure the burger stays within the canvas bounds
     this.x = constrain(this.x, 0, width - this.width);
    }
  }