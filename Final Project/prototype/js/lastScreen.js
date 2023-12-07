let travelerImage;
let picture1, picture2, picture3;

function preload() {
  travelerImage = loadImage('assets/images/traveler.png');
  picture1 = loadImage('assets/images/papyrus.png');
  picture2 = loadImage('assets/images/ceremony.png');
  picture3 = loadImage('assets/images/galaxy.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  // Display traveler image
  image(travelerImage, 200 , 350, 200, 200);

  // Display congratulations message
  fill(0);
  text('Congratulations!', width / 2, height / 2 - 50);
  text('You received these badges for completing all levels', width /2, height / 2);
  text('You have successfully traveled through time!', width / 2, height / 2 + 50);

  // Display confetti animation
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    drawConfetti(x, y);
  }

  // Display three pictures
  displayPicture('', width / 6, height / 2 - 200, picture1);
  displayPicture('', width / 2, height / 2 -200, picture2);
  displayPicture('', width * 5 / 6, height / 2 - 200, picture3);
}

function drawConfetti(x, y) {
  fill(random(255), random(255), random(255));
  rect(x, y, 10, 10);
}

function displayPicture(label, x, y, picture) {
  // Draw picture frame
  fill(255);
  rect(x - 50, y - 50, 100, 100);

  // Display picture label
  fill(0);
  text(label, x, y);
  
  // Display the picture
  image(picture, x - 50, y - 50, 100, 100);
}
