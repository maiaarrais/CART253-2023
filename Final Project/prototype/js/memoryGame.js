let cards = [];
let cardSize = 100; //size of the cards
let numRows = 4;
let numCols = 4;
let selected = [];
let flippedCards = [];
let moves = 0;
let startTime;

function preload() {
  for (let i = 0; i < 8; i++) {
    let img = loadImage("assets/images/card" + i + ".png");
    selected.push(img);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeMemoryGame();
  startTime = millis(); // Record the start time
}

function draw() {
  background(220);
  drawMemoryGame();
  displayStats();
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
  // Increment moves counter
  moves++;
}
function checkMatch() {
  if (flippedCards[0].img === flippedCards[1].img) {
    flippedCards = [];
    checkWin();
  } else {
    for (let card of flippedCards) {
      card.flip();
    }
    flippedCards = [];
  }
}

function checkWin() {
  if (cards.every((card) => card.isFaceUp)) {
    let endTime = millis(); // Record the end time
    let elapsedTime = (endTime - startTime) / 1000; // Calculate elapsed time in seconds
    alert(`Congratulations! You won in ${moves} moves and ${elapsedTime} seconds.`);
    nextScreen();
  }
}

function nextScreen() {
  window.location.href = 'space.html';
}

function displayStats() {
  textSize(18);
  fill(0);
  text(`Moves: ${moves}`, 20, 30);
  let elapsedTime = (millis() - startTime) / 1000; // Calculate elapsed time in seconds
  text(`Time: ${nf(elapsedTime, 0, 2)} seconds`, 20, 60);
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






