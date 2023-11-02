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
      
    }
  }