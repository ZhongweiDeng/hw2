function setup() {
  createCanvas(400, 400);
  noStroke()
}

var R = 220
var change = 5

function draw() {
  background(0);

  fill(R, 150, 250);
  ellipse(200, 200, 200);

  R = R + change


  if(R >= 255) {
    change = -5;
  }
  
  if(R <= 0) {
    change = 5
  }
}
