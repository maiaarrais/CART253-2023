let cards;
let card;
var colNum = 4;
var rowNum = 4;
let selected = [];
let flippedCards = [];
let myFont;
let picked;
let img1, img2, img3, img4, img5, img6, img7, img8;
let faceCards, faceCardsCopy;
let randomIndex;
let hover = false;
let numFlipped = 0;
let timer = -1;
let matchBool;
let delay = 60;
let set = 0;
let match = false;
let matchedCards = [];
let confetti = [];

function preload() {
  img1 = loadImage("assets/images/card0.png");
  img2 = loadImage("assets/images/card1.png");
  img3 = loadImage("assets/images/card2.png");
  img4 = loadImage("assets/images/card3.png");
  img5 = loadImage("assets/images/card4.png");
  img6 = loadImage("assets/images/card5.png");
  img7 = loadImage("assets/images/card6.png");
  img8 = loadImage("assets/images/card7.png");

  // faceCards = [img1, img2, img3, img4, img5, img6, img7, img8];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
  rectMode(CENTER)

  faceCards = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  faceCardsCopy = [];

  myShuffle();

  cards = [];

  //   calling class card
  for (let i = 0; i < colNum; i++) {
    for (let j = 0; j < rowNum; j++) {
      var cardX = 190 + i * 70;
      var cardY = j * 70 + 90;
      // cards.push(new Card(cardX, cardY,50,50));

      var cardFace = selected.pop();
      card = new Card(cardX, cardY, 50, 50, cardFace);
      cards.push(card);
    }
  }

  for (i = 0; i < 50; i++) {
    confetti[i] = new Confetti();
  }
}

function draw() {
  background(220);

  // shuffling(selected);
  if (!match) {
    if (frameCount - timer > delay && timer != -1) {
      for (let i = 0; i < cards.length; i++) {
        if (!cards[i].set) {
          cards[i].isFaceUp = false;
        }
        numFlipped = 0;
        timer = -1;
        set = 0;
      }
    }
  }

  if (match) {
    for (let i = 0; i < set; i++) {
      // flippedCards[i].isFaceUp = true;
      console.log("set is " + set);
      numFlipped = 0;
      timer = -1;
      // match=false
      // flippedCardsCopy[i].set=false
      // matchedCards.push(card[i])
      // cards[i].matched()
      // cards[i].isFaceUp = true;
    }
  }

  // checking to see display of card distribution
  for (let i = 0; i < cards.length; i++) {
    // cards[i].isFaceUp = true;
    cards[i].body();

    cards[i].hover();

    cards[i].display();
  }

  // if(match){
  //  for(i=0;i<flippedCards.length;i++)
  //  flippedCards[i].display()
  // }

  // // if (set == 8) {
  //   for (let i = 0; i < 100; i++) {
  //     confetti[i].body();
  //     confetti[i].fall();
  //   // }
  // }
}

class Card {
  constructor(x, y, w, h, picked) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color(200);
    this.picked = picked;
    this.isFaceUp = false;
    this.set = false;
  }

  body() {
    rectMode(CENTER);
    fill(this.col);
    rect(this.x, this.y, this.w, this.h, 10);
  }

  hover() {
    if (
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY < this.y + this.h / 2 &&
      mouseY > this.y - this.h / 2
    ) {
      this.col = color(160);
      // rect(this.x,this.y,this.w,this.h,10)
      this.hoverBool = true;
    } else {
      this.col = color(200);
      this.hoverBool = false;
    }
  }

  display() {
    // rectMode(CENTER)
    if (this.isFaceUp) {
      imageMode(CENTER);
      image(this.picked, this.x, this.y, this.w, this.h);
    }
    // else {
    //   stroke("yellow");
    //   rect(this.x, this.y, this.w / 4, this.h / 4, 7);
    // }
  }

  matched() {
    if (match) {
      this.display();
    }
  }
}

// fisher yates shuffle as a function
function shuffling(array) {
  let counter = array.length;

  // while there are still elements in the array
  while (counter > 0) {
    // picks a random index number of the array
    var randomIndex = Math.floor(Math.random() * counter);
    // decreases counter by 1
    counter--;
    // swaps the last element with the counter
    var tempSwap = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = tempSwap;
  }
}

function myShuffle() {
  // console.log(faceCards)

  //   faceCards = faceCards.concat(faceCards)
  //   faceCards2=faceCards
  //   // console.log(faceCards)
  // console.log(faceCards2)

  for (let i = 0; i < 16; i++) {
    // randomly picking one card from the array of face cards
    randomIndex = floor(random(0, faceCards.length));
    picked = faceCards[randomIndex];

    // push 2 copies onto array since there are two of each
    selected.push(picked);
    // selected.push(picked);
    // remove card from faces array so we don't re-pick the same cards
    faceCards.splice(randomIndex, 1);
    faceCardsCopy.unshift(picked);
  }
}

function mouseClicked() {
  // console.log("clicked");
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].hoverBool) {
      if (numFlipped < 2) {
        cards[i].isFaceUp = true;
        numFlipped++;

        // console.log(faceCardsCopy[i]);
        flippedCards.unshift(faceCardsCopy[i]);
        // console.log(flippedCards);
        console.log(numFlipped);

        if (flippedCards[0] == flippedCards[1]) {
          flippedCards[0].set = true;
          flippedCards[1].set = true;
          match = true;
          console.log("match");
          matchedCards.unshift(faceCardsCopy[i]);

          numFlipped = 0;
          set++;

          // console.log(set)
        } else {
          match = false;
        }
      }
      if (numFlipped == 2) {
        timer = frameCount;
        console.log(flippedCards);
        flippedCards.pop();
        flippedCards.pop();
      }

      if (numFlipped > 2) {
        if (match) {
          // cards[i].isFaceUp = true;
          console.log(" match");
          timer = frameCount;
          numFlipped = 0;

          console.log(flippedCards);
          cards[i].set = true;
        } else if (!match) {
          // cards[i].isFaceUp = false;
          console.log("no match");

          console.log(flippedCards);
          cards[i].set = false;
        }
      }
    }
  }
  // }
}

class Confetti {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.w = 10;
    this.col = random(255);
    this.speed = random(1, 5);
  }

  body() {
    fill(this.col);
    circle(this.x, this.y, this.w);
  }

  fall() {
    this.y += this.speed;
    // if(this.y>height){
    //   this.y=0
    // }
  }
}





