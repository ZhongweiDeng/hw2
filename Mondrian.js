function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background(0);

  //blue squares
  fill(153, 211, 231);
  rect(150, 0, 200, 200);// top
  rect(290, 310, 100, 90);// bottom
  rect(150, 335, 40, 65);// small
 
  //pink squares
  fill(236, 167, 173);
  rect(360, 0, 40, 300);// right
  rect(40, 220, 95, 180);// left
  rect(200, 335, 70, 65)// small
 
  //white squares
  fill(220);
  rect(0, 0, 135, 200);// left
  rect(150, 220, 200, 80);// right
  
  //yellow squares
  fill(235, 210 ,156);
  rect(150, 310, 120, 15);// right
  rect(0, 220, 30, 180)// left

}
