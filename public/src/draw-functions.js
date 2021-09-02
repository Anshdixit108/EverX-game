var drawCatcher = function(ctx, frame) {
  var front;
  var back; 
  
  switch(frame) {
    case 0:
      front = 'rgb(51,29,8)';
      back = 'rgb(24,15,4)';
      drawCatcherTop(ctx, back, this.x, this.y, this.w, this.h);
      drawCatcherLeftLeg(ctx, back, this.x, this.y, this.w, this.h);
      drawCatcherRightLeg(ctx, front, this.x, this.y, this.w, this.h);
      break;
    case 3:
      front = 'rgb(212,176,140)';
      back = 'rgb(176,126,76)';
      drawCatcherTop(ctx, back, this.x, this.y, this.w, this.h);
      drawCatcherLeftLeg(ctx, back, this.x, this.y, this.w, this.h);
      drawCatcherRightLeg(ctx, front, this.x, this.y, this.w, this.h);
      break;
    case 2:
      front = 'rgb(201,201,201)';
      back = 'rgb(140,140,140)';
      drawCatcherTop(ctx, front, this.x, this.y, this.w, this.h);
      drawCatcherRightLeg(ctx, back, this.x, this.y, this.w, this.h);
      drawCatcherLeftLeg(ctx, front, this.x, this.y, this.w, this.h);
      break;
    case 1:
      front = 'rgb(201,201,201)';
      back = 'rgb(140,140,140)';
      drawCatcherTop(ctx, front, this.x, this.y, this.w, this.h);
      drawCatcherLeftLeg(ctx, back, this.x, this.y, this.w, this.h);
      drawCatcherRightLeg(ctx, front, this.x, this.y, this.w, this.h);
      break;
  }
  
}

function drawCatcherTop(ctx, fillColor, x, y, w, h) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y + h*.5);
  ctx.lineTo(x + w*.33, y + h*.5);
  ctx.lineTo(x + w*.33, y + h*.33);
  ctx.lineTo(x + w, y + h*.18);
  ctx.lineTo(x + w*.3, y + h*.18);
  ctx.lineTo(x + w*.3, y + h*.14);
  ctx.lineTo(x + w*.33, y + h*.14);
  ctx.lineTo(x + w*.33, y);
  ctx.closePath();
  ctx.fill();
}

function drawCatcherLeftLeg(ctx,fillColor, x, y, w, h) {
  //left leg
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x,y + h*.5);//back of hip
  ctx.lineTo(x,y + h*.7);//back of knee
  ctx.lineTo(x - w*.33,y + h);//to toe
  ctx.lineTo(x + w*.33,y + h*.7);//front of knee
  ctx.lineTo(x + w*.33,y + h*.5);//front hip
  ctx.closePath();
  ctx.fill();
}

function drawCatcherRightLeg(ctx,fillColor,x,y,w,h){
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x,y + h*.5);
  ctx.lineTo(x,y + h*.6);
  ctx.lineTo(x + w*.38, y + h*.74);//back of knee
  ctx.lineTo(x + w*.66, y + h);//to Toe
  ctx.lineTo(x + w*.66, y + h*.7);//front of knee
  ctx.lineTo(x + w*.33, y + h*.5);//hip flexor
  ctx.closePath();
  ctx.fill();
}

var drawBanana = function(ctx, frame) {
  ctx.fillStyle = 'rgb(255,250,250)';
  switch(frame)
  {
    case 0:
      ctx.fillRect(this.x, this.y+this.h*.6, this.w, this.h*.4);
      break;
    case 1:
      /*ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + this.h/2);
      ctx.lineTo(this.x + this.w, this.y + this.h);
      ctx.lineTo(this.x + this.w*.4, this.y + this.h/2);
      ctx.lineTo(this.x, this.y);
      ctx.fill();*/

      ctx.beginPath();
      ctx.arc(this.x - this.w, this.y - this.w,this.w/2, 0, Math.PI*2,true);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.x, this.y + this.w,this.w/2, 0, Math.PI*2,true);
      ctx.fill();

      

      
      break;
  };
}

var drawApple = function(ctx, frame) {
  ctx.fillStyle = 'rgb(139,69,19)';
  switch(frame)
  {
    case 0:
      ctx.beginPath();
      ctx.arc(this.x - this.w, this.y - this.w,this.w/2, 0, Math.PI*2,true);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(this.x - this.w, this.y + this.w,this.w/2, 0, Math.PI*2,true);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(this.x + this.w, this.y - this.w,this.w/2, 0, Math.PI*2,true);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(this.x + this.w, this.y + this.w,this.w/2, 0, Math.PI*2,true);
      ctx.fill();
      break;
    case 1:
      ctx.fillStyle = 'rgb(139,69,19)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.w, 0, Math.PI*2,true);
      ctx.fill();
      break;
  };
}

var drawGround = function(ctx) {
  ctx.fillStyle = 'rgb(79,62,25)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
}

var drawForrest = function(ctx,w,h)
{
  
 

//var canvas = document.querySelector('canvas');

let windowWidth = w;
let windowHeight = h;

canvas.width = w;
canvas.height =h;

//ctx = canvas.getContext('2d');
let mountainColors = ['#813945', '#7B3647', '#753146', '#663047'];

function drawBackground() {
  /*
  let gradient = ctx.createLinearGradient(windowWidth / 2, 0, windowWidth / 2, windowHeight);
  gradient.addColorStop(0, "#303461");
  gradient.addColorStop(0.3, "#85536E");
  gradient.addColorStop(0.6, "#D46A4B");
  gradient.addColorStop(0.9, "#EB7337");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, windowWidth, windowHeight);*/
}

//only draws one mountain range (across the screen);
function drawMountain(mountainColor) 
{ 
  let a2l=[0.5915690096031885
,0.49098519654567485
,0.6828481335107288
,0.28351765227312087
,0.5938537533027144
,0.7326127025700417
,0.9028084813788946
,0.9463261947132937
,0.6463886102739915
,0.1979240878533126
,0.9488022305545774
,0.6745220503565874]

  let a3l=[0.6962563059705471
 ,0.5145033952921352
 ,0.5799353984474453
 ,0.5316057600812722
 ,0.8930115646470813
 ,0.18597119326846556
 ,0.41233022559691235
 ,0.9918640135558026
 ,0.007432621649537063
 ,0.2305121460503594
 ,0.30887836541779823
 ,0.3232410778296193]
  let f=0
  let x = 0;
  let a1=0.07299734598507746
  let y = windowHeight * ((a1 * 0.2) + 0.7); // 0.4 - 0.6
  ctx.strokeStyle = mountainColor;
  ctx.beginPath();
  ctx.moveTo(x, y);
  while (x < windowWidth) 
  {
    
    let dx = (a2l[f] * 20) + 50; // 50-70
    let dy = (a3l[f] - 0.5) * 100; // -50 - 50
    x = x + dx;
    y = y + dy;
    if (y < 0 || y > windowHeight) { // if it goes over the top or under the bottom of the canvas
      y = y - 2 * dy; // go in the other direction twice the distance (basically like just going the original direction the same amount once);
    }
    if (x > windowWidth) {
      x = windowWidth;
    }
    ctx.lineTo(x, y);
    f=f+1
    if (f==13)
    {
      f=0;
    }

  }
  // make a box around the bottom of the canvas
  ctx.lineTo(windowWidth, y);
  ctx.lineTo(windowWidth, windowHeight);
  ctx.lineTo(0, windowHeight);
  ctx.lineTo(0, windowHeight * 0.4);

  // fill in the colors
  ctx.stroke();
  ctx.fillStyle = mountainColor
  ctx.fill();
}

function drawMountains () 
{


  for (let i = 0; i < mountainColors.length; i++ ) {
    drawMountain(mountainColors[i]);
  }
}

let starLowerBound = windowHeight * 0.3;

function drawStar() {
  ctx.beginPath();

  let randomX = 0.4 * windowWidth;
  let randomYSeed = 0.7
  let randomY = randomYSeed * starLowerBound;

  let randomOpacity = 0.7 - (Math.random() * randomYSeed); 
  ctx.fillStyle = `rgba(255,255,255, ${randomOpacity})`;

  ctx.arc(randomX, randomY, 1, 0, 2 * Math.PI);
  ctx.fill();
}

let numberOfStars = 100;
function drawStars() {
  for (let i = 0; i < numberOfStars; i++) {
    drawStar();
  }
}

function drawScene() {
  //drawMountains();
}

drawScene();
 var gradient = ctx.createLinearGradient(0, 0, 0, 500);
  gradient.addColorStop(0, "#AADBEA");
  gradient.addColorStop(1, "#FEF1E1");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w,h);

  drawMountains();

 
//let el = document.querySelector('.reset');
//el.addEventListener('click', drawScene);

}







var drawCanopy = function(ctx,w,h)
{
  ctx.fillStyle = 'rgb(43,142,60)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
}

var drawsnow=function(ctx,w,h)
{
 

}



var drawWalker = function(ctx){
  /*
  
  
  //draw back legs
  ctx.fillStyle = 'rgb(8,79,150)';
  ctx.beginPath();
  ctx.moveTo(this.x + this.w*.1, this.y + this.h*.4);
  ctx.lineTo(this.x + this.l2.mod, this.y + this.h*.6);
  ctx.lineTo(this.x + this.l2.mod, this.y + this.h);  //rear first foot
  ctx.lineTo(this.x + + this.w*.1 + this.l2.mod, this.y + this.h*.6);
  ctx.lineTo(this.x + this.w*.5, this.y + this.h*.4);
  ctx.closePath();
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(this.x + this.w*.5, this.y + this.h*.4);
  ctx.lineTo(this.x + this.w*.7 + this.l2.mod, this.y + this.h*.75);
  ctx.lineTo(this.x + this.w*.7 + this.l2.mod, this.y + this.h);    //rear second foot
  ctx.lineTo(this.x + this.w*.8 + this.l2.mod, this.y + this.h*.75);
  ctx.lineTo(this.x + this.w*.8, this.y + this.h*.4);
  ctx.closePath();
  ctx.fill();
  
  //draw front legs
  ctx.fillStyle = 'rgb(49,147,245)';
  ctx.beginPath();
  ctx.moveTo(this.x, this.y + this.h*.2); 
  ctx.lineTo(this.x + this.w*.1, this.y + this.h*.15);
  ctx.lineTo(this.x + this.w*.1, this.y + this.h*.4); //to first leg
  ctx.lineTo(this.x + this.r1.mod, this.y + this.h*.6);
  ctx.lineTo(this.x + this.r1.mod, this.y + this.h);      //first foot
  ctx.lineTo(this.x + this.w*.1 + this.r1.mod, this.y + this.h*.6); //back of first knee
  ctx.lineTo(this.x + this.w*.5, this.y + this.h*.45);
  
  //second leg
  ctx.lineTo(this.x + this.w*.7 + this.r2.mod, this.y + this.h*.75);
  ctx.lineTo(this.x + this.w*.7 + this.r2.mod, this.y + this.h);  //second foot
  ctx.lineTo(this.x + this.w*.8 + this.r2.mod, this.y + this.h*.75);
  
  //back
  ctx.lineTo(this.x + this.w*.8, this.y + this.h*.3); //back of hip
  ctx.lineTo(this.x + this.w*.5, this.y + this.h*.2);
  ctx.lineTo(this.x + this.w*.4, this.y + this.h*.1);
  ctx.lineTo(this.x + this.w*.2, this.y);
  ctx.lineTo(this.x + this.w*.1, this.y + this.h*.1);
  ctx.closePath();
  ctx.fill();
  
  //animate legs
  if (this.r1.dir == 'ADD') {
    this.r1.mod += .5;
    if (this.r1.mod >= this.r1.max) {this.r1.dir = 'SUB';}
  } else {
    this.r1.mod -= .5;
    if (this.r1.mod <= this.r1.min) {this.r1.dir = 'ADD';}
  }
  
  if (this.r2.dir == 'ADD') {
    this.r2.mod += .5;
    if (this.r2.mod >= this.r2.max) {this.r2.dir = 'SUB';}
  } else {
    this.r2.mod -= .5;
    if (this.r2.mod <= this.r2.min) {this.r2.dir = 'ADD';}
  }
  
  if (this.l1.dir == 'ADD') {
    this.l1.mod += .5;
    if (this.l1.mod >= this.l1.max) {this.l1.dir = 'SUB';}
  } else {
    this.l1.mod -= .5;
    if (this.l1.mod <= this.l1.min) {this.l1.dir = 'ADD';}
  }
  
  if (this.l2.dir == 'ADD') {
    this.l2.mod += .5;
    if (this.l2.mod >= this.l2.max) {this.l2.dir = 'SUB';}
  } else {
    this.l2.mod -= .5;
    if (this.l2.mod <= this.l2.min) {this.l2.dir = 'ADD';}
  }
 */
}

var pauseImg = function(ctx) {
  ctx.fillStyle = 'rgb(255,255,255)';
  //first bar
  ctx.fillRect(this.x, this.y, this.w * .33, this.h);
  //second bar
  ctx.fillRect(this.x + (this.w * .66), this.y, this.w * .33, this.h); 
}

var playImg = function(ctx) {
  ctx.fillStyle = 'rgb(255,255,255)';
  
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y + this.h * .5);
  ctx.closePath();
  ctx.fill();
}

var soundImg = function(ctx) {
  ctx.fillStyle = 'rgb(255,255,255)';
  
  ctx.beginPath();
  ctx.moveTo(this.x, this.y + this.h * .4);
  ctx.lineTo(this.x, this.y + this.h * .6);
  ctx.lineTo(this.x + this.w * .2, this.y + this.h * .6);
  ctx.lineTo(this.x + this.w * .5, this.y + this.h);
  ctx.lineTo(this.x + this.w * .5, this.y);
  ctx.lineTo(this.x + this.w * .2, this.y + this.h * .4);
  ctx.closePath();
  ctx.fill();
  
  ctx.strokeStyle = 'rgb(255,255,255)';
  ctx.beginPath();
  ctx.arc(this.x + this.w * .5, this.y + this.h * .5, this.w * .3, Math.PI / 3, 5 * Math.PI / 3, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(this.x + this.w * .5, this.y + this.h * .5, this.w * .5, Math.PI / 3, 5 * Math.PI / 3, true);
  ctx.stroke();
}

var muteImg = function(ctx) {
  ctx.fillStyle = 'rgb(255,255,255)';
  
  ctx.beginPath();
  ctx.moveTo(this.x, this.y + this.h * .4);
  ctx.lineTo(this.x, this.y + this.h * .6);
  ctx.lineTo(this.x + this.w * .2, this.y + this.h * .6);
  ctx.lineTo(this.x + this.w * .5, this.y + this.h);
  ctx.lineTo(this.x + this.w * .5, this.y);
  ctx.lineTo(this.x + this.w * .2, this.y + this.h * .4);
  ctx.closePath();
  ctx.fill();

}

var replayImg = function(ctx) {
  ctx.fillStyle = 'rgb(242,242,51)';
  ctx.beginPath();
  ctx.moveTo(this.x,this.y);
  ctx.lineTo(this.x - 20,this.y + this.h);
  ctx.lineTo(this.x + this.w - 20,this.y + this.h);
  ctx.lineTo(this.x + this.w,this.y);
  ctx.closePath();
  ctx.fill();
  
  ctx.font = "italic 32px Impact, Helvetica, Ariel";
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillText("Replay" , this.x - 5, this.y + this.h - 7);
}

var startImg = function(ctx) {

  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x - 20, this.y + this.h);
  ctx.lineTo(this.x + this.w - 20, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.font = "italic 28px Impact, Helvetica, Ariel";
  ctx.fillText("START", this.x, this.y + this.h - 15);
}

var startSplash = function(ctx) {
  ctx.fillStyle = 'rgb(51, 217, 242)';
  ctx.beginPath();
  ctx.moveTo(380, 0);
  ctx.lineTo(80, 500);
  ctx.lineTo(160, 500);
  ctx.lineTo(460, 0);
  ctx.closePath();
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(490, 0);
  ctx.lineTo(190, 500);
  ctx.lineTo(200, 500);
  ctx.lineTo(510, 0);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle = 'rgb(242,242,51)';
  ctx.beginPath();
  ctx.moveTo(700, 105);
  ctx.lineTo(250, 105);
  ctx.lineTo(220, 178);
  ctx.lineTo(700, 178);
  ctx.closePath();
  ctx.fill();
  
  /*ctx.fillStyle = 'rgb(255,255,255)';
  ctx.font = "italic 80px Impact, Helvetica, Ariel";
  ctx.fillText("SNOW", 62, 100);*/
  
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.font = "italic 80px Impact, Helvetica, Ariel";
  ctx.fillText("EverX", 260, 172);
  
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.font = "18px Helvetica, Ariel";
  ctx.fillText("Catch the falling snowballs", 370, 260);
  ctx.fillText("Dodge the stones", 370, 290);
  ctx.fillText("Arrow keys move you left and right", 370, 320);
  ctx.fillText("(Tap and hold edge of screen on mobile)", 370, 350);
}
