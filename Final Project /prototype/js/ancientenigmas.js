let backButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backButton = createButton('Home');
  backButton.position(10, 5);
  backButton.mousePressed(goBackHome);

}

function draw() {
  background(0);


  // Display the button
  backButton.style('font-size', '16px');
}

function goBackHome() {
  window.location.href = "index.html"; // go back to main menu
}