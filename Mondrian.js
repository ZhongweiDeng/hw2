function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(240);
  noStroke();

  // Red square
  fill(255, 0, 0);
  rect(80, 0, 320, 320);

  // Blue square
  fill(0, 0, 255);
  rect(0, 320, 80, 80);

  // Yellow square
  fill(255, 255, 0);
  rect(370, 360, 30, 40);

  stroke(0);
  strokeWeight(13);
  line(80, 0, 80, 400); // left line  
  line(0, 320, 400, 320); // middle line

  line(370, 320, 370, 400); // right line

  strokeWeight(14);
  line(370, 360, 400, 360); // bottom

  strokeWeight(21);
  line(0, 150, 80, 150); // top

}
