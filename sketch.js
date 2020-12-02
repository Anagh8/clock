var hrs, sec, min

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
ellipse(400,400,680,680)
hr = hour()
min = minute()
sec = second()

fill(255,255,255)
textSize(50)
text("12",369,140)
text("3",685,400)
text("6",380,700)
text("9",100,400)

translate(400,400)
rotate(-90)
var secAngle = map(sec,0,60,0,360)
var minAngle = map(min,0,60,0,360)
var hrsAngle = map(hrs%12,0,12,0,360)

push();
stroke(255,0,0)
strokeWeight(7)
rotate(hrsAngle)
line(0,0,150,0)
pop();

push();
stroke(0,255,0)
rotate(minAngle)
strokeWeight(7)
line(0,0,200,0);
pop();

push();
stroke(0,0,255)
rotate(secAngle)
strokeWeight(7)
line(0,0,250,0)
pop();

  //drawSprites();
}