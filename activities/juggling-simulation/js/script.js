/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() 
{
    createCanvas(640, 480);
    background(0, 255, 100);
    noStroke();
    //body of the alien 
    fill(240, 50, 100);
    ellipse(320, 470, 300, 180);
    //head of the alien
    fill(255, 50, 100);
    ellipse(320, 230, 300, 400);
    //drawing the eyes
    fill (0, 0, 0);
    ellipse(250, 200, 85, 250 );
    ellipse(390, 200, 85, 250);
    //nostrils of the alien 
    fill(0, 0, 0); 
    ellipse(310, 300, 10);
    ellipse(330, 300, 10);

}


/**
 * Description of draw()
*/
function draw() {
   
    
}