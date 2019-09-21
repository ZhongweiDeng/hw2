function setup() {
  createCanvas(400, 400);
  noStroke()
}

var ballY = 30;
var ballSpeed = 3;

var ballY2 = 370;
var ballSpeed2 = 5;

function draw() {
  background(20);

  fill(103, 201, 231);
  ellipse(120, ballY, 60);
  
  fill(236, 110, 153);
  ellipse(260, ballY2, 30);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3;
  }

  if (ballY2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballY <= 0) {
    ballSpeed = 3;
  }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
  }

}
