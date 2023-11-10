let backButton;
let cols = 3;
let rows = 3;
let tileSize;
let puzzle = [];
let img;
let imgLoaded = false;
let showGallery = true; //track whether the gallery is visible or not

// Images uploaded for the user to choose from
const images = [
  'assets/images/image1.jpg',
  'assets/images/image2.jpg',
  'assets/images/image3.jpg',
  'assets/images/image4.jpg',
  'assets/images/image5.jpg',
  'assets/images/image6.jpg',
];

function setup() {
  // back button (go to home)
  createCanvas(windowWidth, windowHeight);
  backButton = createButton('Home');
  backButton.position(10, 5);
  backButton.mousePressed(goBackHome);

  tileSize = width / cols;

  // Create image gallery
  createImageGallery();

  // Initialize the puzzle with a default image
  img = loadImage('default_image.jpg', () => {
    imgLoaded = true;
    initializePuzzle();
  });
}

function draw() {
  background(0);
  // Display the button
  backButton.style('font-size', '16px');
  // image loading and displaying puzzle pieces
  if (showGallery) {
    // Only display the gallery if showGallery is true
    // image loading and displaying puzzle pieces
    if (imgLoaded) {
      // Display puzzle pieces
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let val = puzzle[i][j];
          if (val !== 0) {
            let sx = (val % cols) * (img.width / cols);
            let sy = floor(val / rows) * (img.height / rows);
            image(
              img,
              i * tileSize,
              j * tileSize,
              tileSize,
              tileSize,
              sx,
              sy,
              img.width / cols,
              img.height / rows
            );
          }
        }
      }
    }
  }
}

function goBackHome() {
  window.location.href = 'index.html'; // go back to main menu
}

function initializePuzzle() {
  puzzle = [];
  let counter = 1;

  // Create a solved puzzle
  for (let i = 0; i < cols; i++) {
    puzzle[i] = [];
    for (let j = 0; j < rows; j++) {
      puzzle[i][j] = counter;
      counter++;
    }
  }

  puzzle[cols - 1][rows - 1] = 0; // Empty space
  shufflePuzzle();
}

function shufflePuzzle() {
  // Shuffle the puzzle pieces by swapping randomly
  for (let i = cols - 1; i > 0; i--) {
    for (let j = rows - 1; j > 0; j--) {
      let randI = floor(random(i + 1));
      let randJ = floor(random(j + 1));
      swapPuzzlePieces(i, j, randI, randJ);
    }
  }
}

function swapPuzzlePieces(i, j, randI, randJ) {
  let temp = puzzle[i][j];
  puzzle[i][j] = puzzle[randI][randJ];
  puzzle[randI][randJ] = temp;
}

function mousePressed() {
  if (imgLoaded) {
    // Check if a gallery image was clicked
    for (let i = 0; i < images.length; i++) {
      let imgX = i * 230 + 10; // width of each image plus 10px margin
      let imgY = height / 2;
      if (
        mouseX > imgX &&
        mouseX < imgX + 200 &&
        mouseY > imgY &&
        mouseY < imgY + 150
      ) {
        loadImage(images[i], (loadedImage) => {
          imgLoaded = true;
          img = loadedImage; // Set the loaded image
          cols = 3;
          rows = 3;
          tileSize = width / cols;
          initializePuzzle();
           showGallery = false; // Hide the gallery
        });
      }
    }

    // Check which puzzle piece was clicked
    let i = floor(mouseX / tileSize);
    let j = floor(mouseY / tileSize);

    // Check if the clicked piece can be moved
    if (isValidMove(i, j)) {
      swapPuzzlePieces(i, j, findEmptySpace()[0], findEmptySpace()[1]);
    }
  }
}

function isValidMove(i, j) {
  let emptySpace = findEmptySpace();

  // Check if the clicked piece is adjacent to the empty space
  return (
    (i === emptySpace[0] && abs(j - emptySpace[1]) === 1) ||
    (j === emptySpace[1] && abs(i - emptySpace[0]) === 1)
  );
}

function findEmptySpace() {
  // Find the coordinates of the empty space in the puzzle
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (puzzle[i][j] === 0) {
        return [i, j];
      }
    }
  }
}

function createImageGallery() {
  // Create image gallery
  for (let i = 0; i < images.length; i++) {
    let imgX = i * 230 + 10; // width of each image plus 10px margin
    let imgY = height / 2;
    let imgElement = createImg(images[i], '');
    imgElement.position(imgX, imgY);
    imgElement.size(200, 150);
    imgElement.mousePressed(() => {
      loadImage(images[i], (loadedImage) => {
        imgLoaded = true;
        img = loadedImage; // Set the loaded image
        cols = 3;
        rows = 3;
        tileSize = width / cols;
        initializePuzzle();
      });
    });
  }
}
