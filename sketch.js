function setup() {
  createCanvas(800, 600);
  background('DarkOliveGreen');
  
  
}

var x=10, y=10
var spx=3, spy=5
function draw() {
  // background(0);
  
  let a=random(50)
   if (a<20){
    strokeWeight(2);
  }else{strokeWeight(0.5);
       }
 
  stroke('white')
  line(x,y+100,x,random(150,500));
  x= x+spx;
  y= y+spy;
  spy += 0.1;
  
  if (y>800){
    spy=-spy
    y=800
    
  }
  
  if (x>800){
    spx=-spx
    x=800
    
  }
  
  let tx=300
 
  noStroke();
  fill(255, frameCount/50)
  textSize(30);
  textFont('Luminari');
  text('W', tx, 100);
  
   noStroke();
  fill(255, frameCount/100)
  textSize(30);
  textFont('Luminari');
  text('E', tx+28, 100);
  
  noStroke();
  fill(255, frameCount/150)
  textSize(30);
  textFont('Luminari');
  text('E', tx+24*2, 100);
  
   noStroke();
  fill(255, frameCount/200)
  textSize(30);
  textFont('Luminari');
  text('K', tx+23*3, 100);
  
   noStroke();
  fill(255, frameCount/250)
  textSize(30);
  textFont('Luminari');
  text('O', tx+28*4, 100);
  
   noStroke();
  fill(255, frameCount/300)
  textSize(30);
  textFont('Luminari');
  text('N', tx+28*5, 100);
  
   noStroke();
  fill(255, frameCount/350)
  textSize(30);
  textFont('Luminari');
  text('E', tx+28*6, 100);
  

}