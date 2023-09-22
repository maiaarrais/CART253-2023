/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let rectangle1 = {
    x: 100,
    y: 50,
    size: 200
};
let rectangle2 = {
    x: 300,
    y: 250, 
    size: 200
};
let rectangle3 = {
    x:100,
    y: 450,
    size: 200
};

let rectangleRight1 = {
    x: 500,
    y: 50,
    size: 200
};

let rectangleRight2 = {
    x: 500, 
    y: 450, 
    size: 200
};

  let myCircle1 = {
    x: 200,
    y: 150,
    size: 50,
    speed: 1
  };

  let myCircle2 = {
    x: 400,
    y: 350,
    size: 50,
    speed: 0.5,
  };

  let myCircle3 = {
    x: 200,
    y: 550,
    size: 50,
    speed: 0.5,

  };

  let myCircle4 = {
    x: 600,
    y: 150,
    size: 50,
    speed: -0.5
  };

  let myCircle5 = {
    x: 600,
    y: 550, 
    size: 50, 
    speed: -1
  };

//function set
function setup() 
{
    createCanvas(windowWidth, windowHeight);
    noStroke();
   

}

//drawing
function draw() {
    background(0, 100, 100);
    
    fill(0);
    //rectangle 1 left
    rect(rectangle1.x, rectangle1.y, rectangle1.size);
    //rectangle 2 left
    rect(rectangle2.x, rectangle2.y, rectangle2.size);
    //rectangle 3 left
    rect(rectangle3.x, rectangle3.y, rectangle3.size);

    fill(0);
    //rectangle 1 right
    rect(rectangleRight1.x, rectangleRight1.y, rectangleRight1.size);
    //rectangle 2 right
    rect(rectangleRight2.x, rectangleRight2.y, rectangleRight2.size);

    // circle in rectangle 1 
    var xhi = 600;
    fill(255, 0, 0);
    ellipse(myCircle1.x, myCircle1.y, myCircle1.size);
    myCircle1.x += myCircle1.speed;
      if (myCircle1.x >= myCircle4.x){
         speed.stop();
     }

     //circle in middle rectangle
     fill(0, mouseY, mouseX);
     ellipse(myCircle2.x, myCircle2.y, myCircle2.size);

    //circle in rectangle 3
    fill(255, 0, 0);
    ellipse(myCircle3.x, myCircle3.y, myCircle3.size);
   
    //circle in right rectangle 1
    fill(0, 200, 0);
    ellipse(myCircle4.x, myCircle4.y, myCircle4.size);
    
    //circle in right rectangle 2
    ellipse(myCircle5.x, myCircle5.y, myCircle5.size);
    myCircle5.x += myCircle5.speed;
     
    

     
     
  
  


}
    