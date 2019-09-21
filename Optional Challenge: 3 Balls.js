function setup() {
  createCanvas(600, 600);
  noStroke()
}

var ballX = 70;
var ballY = 370
var ballSpeed = 5;

var ballX2 = 370;
var ballY2 = 100
var ballSpeed2 = 20;

var ballX3 = 200;
var ballY3 = 180
var ballSpeed3 = 10;

function draw() {
  background(245);

  fill(120, 220, 255);
  ellipse(ballX, ballY, 100);
  
  fill(255, 170, 200);
  ellipse(ballX2, ballY2, 60);
  
  fill(255, 180, 100);
  ellipse(ballX3, ballY3, 80);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3 = ballX3 + ballSpeed3;
  
  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballY3 = ballY3 + ballSpeed3;

  //X
  if (ballX >= 550) {
    ballSpeed = ballSpeed * -1;
  }

  if (ballX2 >= 570) {
    ballSpeed2 = ballSpeed2 * -1;
  }

  if (ballX3 >= 560) {
    ballSpeed3 = ballSpeed3 * -1;
  }
  
  if (ballX <= 50) {
    ballSpeed = ballSpeed * -1;
  }

  if (ballX2 <= 30) {
    ballSpeed2 = ballSpeed2 * -1;
  }
  
  if (ballX3 <= 40) {
    ballSpeed3 = ballSpeed3 * -1;
  }

  //Y
  if (ballY >= 550) {
    ballSpeed = ballSpeed * -1;
  }

  if (ballY2 >= 570) {
    ballSpeed2 = ballSpeed2 * -1;
  }

  if (ballY3 >= 560) {
    ballSpeed3 = ballSpeed3 * -1;
  }
  
  if (ballY <= 50) {
    ballSpeed = ballSpeed * -1;
  }

  if (ballY2 <= 30) {
    ballSpeed2 = ballSpeed2 * -1;
  }
  
  if (ballY3 <= 40) {
    ballSpeed3 = ballSpeed3 * -1;
  }

}
