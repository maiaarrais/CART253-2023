/**
 * Go Grocery shopping
 * Maia Arrais 40246035
 * 
 * In this specific code you do a grocery shop run and follow the instructions given in the first part. 
 * The user must click on the items which fall on the basket and if done incorrectly, the game restarts. 
 * However if done correctly, you successfully finish the game. 
 */


let backgroundImage;  // The background image
let images = [];     // An array to hold the first set of images
let secondImages = []; // An array to hold the second set of images
let thirdImages = []; // An array to hold the third set of images
let fourImages = []; // An array to hold the fourth set of images
let fiveImages = []; // An array to hold the fifth set of images
let sixImages = []; // An array to hold the sixth set of images
let sevenImages = []; // An array to hold the seventh set of images
let eightImages = []; // An array to hold the eighth set of images
let numImages = 10;  // Number of images
let imgSize = 40;   // Default size of the images
let img; //center image

let redirectToNewCanvas = false;

let firstSetClickedCount = 0; // Counter for clicked images in the first set
let secondSetClickedCount = 0; // Counter for clicked images in the second set
let thirdSetClickedCount = 0; //Counter for clicked images in the third set 
let fourSetClickedCount = 0; //Counter for clicked images in the fourth set 

let fiveSetSpecificImagesClicked = 0; // Counter for clicked images in the fifth set
let sixSetSpecificImagesClicked = 0; // Counter for clicked images in the sixth set
let sevenSetSpecificImagesClicked = 0; //Counter for clicked images in the seventh set 
let eightSetSpecificImagesClicked = 0; //Counter for clicked images in the eighth set 
const specificImagesCount = 3; // Number of specific images to be clicked

// Define the indices of specific images in the sets
const fiveSetSpecificImageIndices = [0, 2, 3]; 
const sixSetSpecificImageIndices = [1, 3, 4]; 
const sevenSetSpecificImageIndices = [0, 3, 5]; 
const eightSetSpecificImageIndices = [1, 2, 4]; 

let initialPositions = {
  firstSet: [
    { x: 90, y: 75 },
    { x: 140, y: 75 },
    { x: 190, y: 75 },
    { x: 90, y: 125 },
    { x: 140, y: 125 },
    { x: 190, y: 125 },
  ],

  secondSet: [
    { x: 90, y: 175 },
    { x: 140, y: 175 },
    { x: 190, y: 175 },
    { x: 90, y: 220 },
    { x: 140, y: 220 },
    { x: 190, y: 220 },
  ],

  thirdSet: [
    { x: 357, y: 75 },
    { x: 387, y: 75 },
    { x: 417, y: 75 },
    { x: 447, y: 75 },
    { x: 478, y: 75 },
    { x: 357, y: 125 },
    { x: 387, y: 125 },
    { x: 417, y: 125 },
    { x: 447, y: 125 },
    { x: 478, y: 125 },
  ],
  
  fourthSet: [
    { x: 357, y: 175 },
    { x: 387, y: 175 },
    { x: 417, y: 175 },
    { x: 447, y: 175 },
    { x: 478, y: 175 },
    { x: 357, y: 220 },
    { x: 387, y: 220 },
    { x: 417, y: 220 },
    { x: 447, y: 220 },
    { x: 478, y: 220 },
  ],

  fifthSet: [
    { x: 90, y: 365 },
    { x: 140, y: 365 },
    { x: 190, y: 365 },
    { x: 90, y: 413 },
    { x: 140, y: 413 },
    { x: 190, y: 413 },
  ],

  sixthSet: [
    { x: 90, y: 461 },
    { x: 140, y: 461 },
    { x: 190, y: 461 },
    { x: 90, y: 509 },
    { x: 140, y: 509 },
    { x: 190, y: 509 },
  ],

  seventhSet: [
    { x: 360, y: 365 },
    { x: 397, y: 365 },
    { x: 437, y: 365 },
    { x: 475, y: 365 },
    { x: 360, y: 413 },
    { x: 397, y: 413 },
    { x: 437, y: 413 },
    { x: 475, y: 413 },
  ],

  eighthSet: [
    { x: 360, y: 461 },
    { x: 397, y: 461 },
    { x: 437, y: 461 },
    { x: 475, y: 461 },
    { x: 360, y: 509 },
    { x: 397, y: 509 },
    { x: 437, y: 509 },
    { x: 475, y: 509 },
  ],
};


function preload() {
  // Loading background image 
  backgroundImage = loadImage('assets/images/background.jpg');

  // Loading the first set of images 
  for (let i = 0; i < numImages; i++) {
    images.push(loadImage('assets/images/apple.png'));
  }

  // Loading the second set of images 
  for (let i = 0; i < numImages; i++) {
    secondImages.push(loadImage('assets/images/mango.png'));
  }

  // Loading the third set of images 
  for (let i = 0; i < numImages; i++) {
    thirdImages.push(loadImage('assets/images/milk.png'));
  }

  // Loading the fourth set of images 
  for (let i = 0; i < numImages; i++) {
    fourImages.push(loadImage('assets/images/chocolate-milk.png'));
  }

  // Loading the fifth set of images 
  for (let i = 0; i < numImages; i++) {
    fiveImages.push(loadImage('assets/images/avocado.png'));
  }

  // Loading the sixth set of images 
  for (let i = 0; i < numImages; i++) {
    sixImages.push(loadImage('assets/images/carrot.png'));
  }

  // Loading the seventh set of images 
  for (let i = 0; i < numImages; i++) {
    sevenImages.push(loadImage('assets/images/jam.png'));
  }

  // Loading the eighth set of images 
  for (let i = 0; i < numImages; i++) {
    eightImages.push(loadImage('assets/images/peanut-butter.png'));
  }

}

function setup() {
  createCanvas(backgroundImage.width, backgroundImage.height);

  img = loadImage('assets/images/center_image.png'); // Load your image

  // custom initial positions for the first set of images
  images[0].x = 90;
  images[0].y = 75;

  images[1].x = 140;
  images[1].y = 75;

  images[2].x = 190;
  images[2].y = 75;

  images[3].x = 90;
  images[3].y = 125;

  images[4].x = 140;
  images[4].y = 125;

  images[5].x = 190;
  images[5].y = 125;

  // custom initial positions for the second set of images
  secondImages[0].x = 90;
  secondImages[0].y = 175;

  secondImages[1].x = 140;
  secondImages[1].y = 175;

  secondImages[2].x = 190;
  secondImages[2].y = 175;

  secondImages[3].x = 90;
  secondImages[3].y = 220;

  secondImages[4].x = 140;
  secondImages[4].y = 220;

  secondImages[5].x = 190;
  secondImages[5].y = 220;

  // custom initial positions for the third set of images
  thirdImages[0].x = 357;
  thirdImages[0].y = 75;
 
  thirdImages[1].x = 387;
  thirdImages[1].y = 75;
 
  thirdImages[2].x = 417;
  thirdImages[2].y = 75;
 
  thirdImages[3].x = 447;
  thirdImages[3].y = 75;
 
  thirdImages[4].x = 478;
  thirdImages[4].y = 75;
 
  thirdImages[5].x = 357;
  thirdImages[5].y = 125;

  thirdImages[6].x = 387;
  thirdImages[6].y = 125;
 
  thirdImages[7].x = 417;
  thirdImages[7].y = 125;

  thirdImages[8].x = 447;
  thirdImages[8].y = 125;
 
  thirdImages[9].x = 478;
  thirdImages[9].y = 125;

  // custom initial positions for the fourth set of images
  fourImages[0].x = 357;
  fourImages[0].y = 175;
 
  fourImages[1].x = 387;
  fourImages[1].y = 175;
 
  fourImages[2].x = 417;
  fourImages[2].y = 175;
 
  fourImages[3].x = 447;
  fourImages[3].y = 175;
 
  fourImages[4].x = 478;
  fourImages[4].y = 175;
 
  fourImages[5].x = 357;
  fourImages[5].y = 220;

  fourImages[6].x = 387;
  fourImages[6].y = 220;
 
  fourImages[7].x = 417;
  fourImages[7].y = 220;

  fourImages[8].x = 447;
  fourImages[8].y = 220;
 
  fourImages[9].x = 478;
  fourImages[9].y = 220;


  // custom initial positions for the fifth set of images
  fiveImages[0].x = 90;
  fiveImages[0].y = 365;

  fiveImages[1].x = 140;
  fiveImages[1].y = 365;

  fiveImages[2].x = 190;
  fiveImages[2].y = 365;

  fiveImages[3].x = 90;
  fiveImages[3].y = 413;

  fiveImages[4].x = 140;
  fiveImages[4].y = 413;

  fiveImages[5].x = 190;
  fiveImages[5].y = 413;

  // custom initial positions for the sixth set of images
  sixImages[0].x = 90;
  sixImages[0].y = 461;

  sixImages[1].x = 140;
  sixImages[1].y = 461;

  sixImages[2].x = 190;
  sixImages[2].y = 461;

  sixImages[3].x = 90;
  sixImages[3].y = 509;

  sixImages[4].x = 140;
  sixImages[4].y = 509;

  sixImages[5].x = 190;
  sixImages[5].y = 509;

    // custom initial positions for the seventh set of images
  sevenImages[0].x = 360;
  sevenImages[0].y = 365;

  sevenImages[1].x = 397;
  sevenImages[1].y = 365;

  sevenImages[2].x = 437;
  sevenImages[2].y = 365;

  sevenImages[3].x = 475;
  sevenImages[3].y = 365;

  sevenImages[4].x = 360;
  sevenImages[4].y = 413;

  sevenImages[5].x = 397;
  sevenImages[5].y = 413;

  sevenImages[6].x = 437;
  sevenImages[6].y = 413;

  sevenImages[7].x = 475;
  sevenImages[7].y = 413;

  // custom initial positions for the eighth set of images
  eightImages[0].x = 360;
  eightImages[0].y = 461;

  eightImages[1].x = 397;
  eightImages[1].y = 461;

  eightImages[2].x = 437;
  eightImages[2].y = 461;

  eightImages[3].x = 475;
  eightImages[3].y = 461;

  eightImages[4].x = 360;
  eightImages[4].y = 509;

  eightImages[5].x = 397;
  eightImages[5].y = 509;

  eightImages[6].x = 437;
  eightImages[6].y = 509;

  eightImages[7].x = 475;
  eightImages[7].y = 509;

}

function draw() {
  // Display the background image
  image(backgroundImage, 0, 0, width, height);

   // Calculate the center of the canvas
   let centerX = 220;
   let centerY = 235;
 
   // Set the size you want for the image
   let imgWidth = 150; 
   let imgHeight = 150; 
 
   // Display the image in the center with the specified size
   image(img, centerX, centerY, imgWidth, imgHeight);

  //display text coordinates 
  let x = 300; 
  let y = 450; 
  // Specific Items Instructions 
  let message = "Avocados: 1, 3 & 4\n Carrots: 2, 4 & 5\n Jam: 1, 4 & 6\n Peanut Butter 2, 3 & 5";
  textSize(12);
  textAlign(CENTER, CENTER);
  fill(0); 
  text(message, x, y);

  // Display the first set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(images[i], images[i].x, images[i].y, imgSize, imgSize);
  }

  // Display the second set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(secondImages[i], secondImages[i].x, secondImages[i].y, imgSize, imgSize);
  }

  // Display the third set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(thirdImages[i], thirdImages[i].x, thirdImages[i].y, imgSize, imgSize);
  }

  // Display the fourth set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(fourImages[i], fourImages[i].x, fourImages[i].y, imgSize, imgSize);
  }
  // Display the fifth set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(fiveImages[i], fiveImages[i].x, fiveImages[i].y, imgSize, imgSize);
  }

  // Display the sixth set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(sixImages[i], sixImages[i].x, sixImages[i].y, imgSize, imgSize);
  }

  // Display the seventh set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(sevenImages[i], sevenImages[i].x, sevenImages[i].y, imgSize, imgSize);
  }

  // Display the eighth set of images on top of the background
  for (let i = 0; i < numImages; i++) {
    image(eightImages[i], eightImages[i].x, eightImages[i].y, imgSize, imgSize);
  }

  if (redirectToNewCanvas) {
    // After x seconds, redirect to a new canvas
    setTimeout(function () {
      window.location.href = 'game2.html'; 
    }, 2000);
  }
}

function mousePressed() {
  // Check if the mouse is over any image in the first set
  for (let i = 0; i < numImages; i++) {
    let imageX = images[i].x;
    let imageY = images[i].y;
    if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
      // Move the clicked image to a specific location
      images[i].x = 280;
      images[i].y = 290;

      // Increase the counter for the first set
      firstSetClickedCount++;

      // Check if the user clicked more than 3 images in the first set
      if (firstSetClickedCount > 3) {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked more than 3 apples. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
    }
  }

  // Check if the mouse is over any image in the second set
  for (let i = 0; i < numImages; i++) {
    let imageX = secondImages[i].x;
    let imageY = secondImages[i].y;
    if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
      // Move the clicked image to a specific location
      secondImages[i].x = 290;
      secondImages[i].y = 290;

      // Increase the counter for the second set
      secondSetClickedCount++;

      // Check if the user clicked more than 3 images in the second set
      if (secondSetClickedCount > 3) {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked more than 3 mangoes. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
    }
  }

  // Check if the mouse is over any image in the third set
  for (let i = 0; i < numImages; i++) {
    let imageX = thirdImages[i].x;
    let imageY = thirdImages[i].y;
    if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
      // Move the clicked image to a specific location
      thirdImages[i].x = 270;
      thirdImages[i].y = 290;

      // Increase the counter for the third set
      thirdSetClickedCount++;

      // Check if the user clicked more than 3 images in the third set
      if (thirdSetClickedCount > 3) {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked more than 3 bottles of milk. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
    }
  }

   // Check if the mouse is over any image in the fourth set
   for (let i = 0; i < numImages; i++) {
    let imageX = fourImages[i].x;
    let imageY = fourImages[i].y;
    if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
      // Move the clicked image to a specific location
      fourImages[i].x = 265;
      fourImages[i].y = 290;

      // Increase the counter for the fourth set
      fourSetClickedCount++;

      // Check if the user clicked more than 3 images in the fourth set
      if (fourSetClickedCount > 3) {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked more than 3 bottles of chocolate milk. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
    }
  }
    // Check if the mouse is over any image in the fifth set
    for (let i = 0; i < numImages; i++) {
      let imageX = fiveImages[i].x;
      let imageY = fiveImages[i].y;
      if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
        // Move the clicked image to a specific location
        fiveImages[i].x = 260;
        fiveImages[i].y = 290;
  
        // Check if the clicked image is one of the specific images in the fifth set
      if (isSpecificImage(i, fiveSetSpecificImageIndices)) {
        fiveSetSpecificImagesClicked++;
      } else {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked the wrong avocado according to the list. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
      }
    }
  
    // Check if the mouse is over any image in the sixth set
    for (let i = 0; i < numImages; i++) {
      let imageX = sixImages[i].x;
      let imageY = sixImages[i].y;
      if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
        // Move the clicked image to a specific location
        sixImages[i].x = 295;
        sixImages[i].y = 290;
  
        // Check if the clicked image is one of the specific images in the sixth set
      if (isSpecificImage(i, sixSetSpecificImageIndices)) {
        sixSetSpecificImagesClicked++;
      } else {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked the wrong carrot according to the list. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
      }
    }
  
    // Check if the mouse is over any image in the seventh set
    for (let i = 0; i < numImages; i++) {
      let imageX = sevenImages[i].x;
      let imageY = sevenImages[i].y;
      if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
        // Move the clicked image to a specific location
        sevenImages[i].x = 298;
        sevenImages[i].y = 280;
  
          // Check if the clicked image is one of the specific images in the seventh set
      if (isSpecificImage(i, sevenSetSpecificImageIndices)) {
        sevenSetSpecificImagesClicked++;
      } else {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked the wrong jar of Jam according to the list. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
      }
    }
  
    // Check if the mouse is over any image in the eight set
    for (let i = 0; i < numImages; i++) {
      let imageX = eightImages[i].x;
      let imageY = eightImages[i].y;
      if (mouseX > imageX && mouseX < imageX + imgSize && mouseY > imageY && mouseY < imageY + imgSize) {
        // Move the clicked image to a specific location
        eightImages[i].x = 290;
        eightImages[i].y = 280;
  
          // Check if the clicked image is one of the specific images in the eighth set
      if (isSpecificImage(i, eightSetSpecificImageIndices)) {
        eightSetSpecificImagesClicked++;
      } else {
        // Display a confirmation dialog
        const confirmation = window.confirm("Sorry, you clicked the wrong jar of peanut butter according to the list. Do you want to try again?");
        if (confirmation) {
          // User clicked "OK" to try again
          resetGame();
        }
      }
      }
    }

  // Check if sets have the desired number of clicked images to start the countdown
  if (firstSetClickedCount >= 3 && secondSetClickedCount >= 3 && thirdSetClickedCount >= 3 && fourSetClickedCount >= 3){
    if (fiveSetSpecificImagesClicked >= specificImagesCount && sixSetSpecificImagesClicked >= specificImagesCount && sevenSetSpecificImagesClicked >= specificImagesCount && eightSetSpecificImagesClicked >= specificImagesCount) {
      // Set a flag to redirect to a new canvas after x seconds
      redirectToNewCanvas = true;
    }
  }
  
}

  // Function to check if the clicked image is one of the specific images
  function isSpecificImage(index, specificImageIndices) {
    return specificImageIndices.includes(index);
}


function resetGame() {
  // Reset the positions for all the set of images
  for (let i = 0; i < numImages; i++) {
    images[i].x = initialPositions.firstSet[i].x;
    images[i].y = initialPositions.firstSet[i].y;

    secondImages[i].x = initialPositions.secondSet[i].x;
    secondImages[i].y = initialPositions.secondSet[i].y;

    thirdImages[i].x = initialPositions.thirdSet[i].x;
    thirdImages[i].y = initialPositions.thirdSet[i].y;

    fourImages[i].x = initialPositions.fourthSet[i].x;
    fourImages[i].y = initialPositions.fourthSet[i].y;

    fiveImages[i].x = initialPositions.fifthSet[i].x;
    fiveImages[i].y = initialPositions.fifthSet[i].y;

    sixImages[i].x = initialPositions.sixthSet[i].x;
    sixImages[i].y = initialPositions.sixthSet[i].y;

    sevenImages[i].x = initialPositions.seventhSet[i].x;
    sevenImages[i].y = initialPositions.seventhSet[i].y;

    eightImages[i].x = initialPositions.eighthSet[i].x;
    eightImages[i].y = initialPositions.eighthSet[i].y;

    // Reset all the counters
    firstSetClickedCount = 0;
    secondSetClickedCount = 0;
    thirdSetClickedCount = 0;
    fourSetClickedCount = 0;
    fiveSetSpecificImagesClicked = 0;
    sixSetSpecificImagesClicked = 0;
    sevenSetSpecificImagesClicked = 0;
    eightSetSpecificImagesClicked = 0;
    
  } 
}





