let x,y,d, xDir, yDir;
let r,g,b;
let angle;
let centeredMouseX;
let centeredMouseY;


function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  centeredMouseX = mouseX + width/2;
  centeredMouseY = mouseY + height/2;
  r = 100;
  g = 200;
  b = 100;

  x = width / 2;
  y = height / 2;
  
  d = 20;

  xDir = random(-2,2);
  yDir = random(-2,2);

  angle = 0;
  
 
}

function draw() {
  // Set background to black
  background(255,60,100,50);

    Display();
    // update();
    keepInCanvas();

  }
    
 ///
 
 function Display(){

let circles = 100;
  
   for(let i=0; i<100; i++){

    let diffX = (mouseX - width/2)/100;
    let diffY = (mouseY - height/2)/100;

    circle(width/2 + (diffX * i), height/2 + (diffY * i), d*10 -(i*2));
    
    let offSetX = width/2 - centeredMouseX;
    let offSetY = height/2 - centeredMouseY;
    stroke ('yellow');
    fill(r,g,b);
  
    //circle(centeredMouseX,centeredMouseY,d);

 }
}

 function update(){

  x += xDir;
  y += yDir;

  angle += 3;

 }

 function keepInCanvas(){

  if((x>width)||(x<0)){

    xDir = -xDir;

  }
  if((y > height)||(y < 0)){

    yDir = -yDir;

  }

 }
  


