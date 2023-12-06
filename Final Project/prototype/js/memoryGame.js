let cards = [];
let cardSize = 100; //size of the cards
let numRows = 4;
let numCols = 4;
let selected = [];
let flippedCards = [];

function preload() {
  for (let i = 0; i < 8; i++) {
    let img = loadImage("assets/images/card" + i + ".png");
    selected.push(img);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeMemoryGame();
}

function draw() {
  background(220);
  drawMemoryGame();
}

function initializeMemoryGame() {
  selected = shuffle(selected.concat(selected)); // Shuffle and duplicate the cards

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let x = width / 2 - (numCols * cardSize) / 2 + col * cardSize;
      let y = height / 2 - (numRows * cardSize) / 2 + row * cardSize;

      let card = new Card(x, y, cardSize, selected.pop());
      cards.push(card);
    }
  }
}

function drawMemoryGame() {
  for (let card of cards) {
    card.display();
  }
  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000); // Delay the check for better visibility
  }
}

function mousePressed() {
  for (let card of cards) {
    if (card.contains(mouseX, mouseY) && !card.isFaceUp && flippedCards.length < 2) {
      card.flip();
      flippedCards.push(card);
    }
  }
}
function checkMatch() {
  if (flippedCards[0].img === flippedCards[1].img) {
    flippedCards = [];
  } else {
    for (let card of flippedCards) {
      card.flip();
    }
    flippedCards = [];
  }
}

class Card {
  constructor(x, y, size, img) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
    this.isFaceUp = false;
  }

  display() {
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    fill(this.isFaceUp ? color(200) : color(255));
    rect(this.x, this.y, this.size, this.size, 10);

    if (this.isFaceUp) {
      imageMode(CENTER);
      image(this.img, this.x, this.y, this.size * 0.8, this.size * 0.8); // Adjust the image size
    }
  }

  flip() {
    this.isFaceUp = !this.isFaceUp;
  }

  contains(px, py) {
    return (
      px > this.x - this.size / 2 &&
      px < this.x + this.size / 2 &&
      py > this.y - this.size / 2 &&
      py < this.y + this.size / 2
    );
  }
}






