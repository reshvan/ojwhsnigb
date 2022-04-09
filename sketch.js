var kills = 0
var gameState=play
var play=1
var end=0
var bg,bgImage,ss,ssImage,e1,e2,e3,e1Imgage,e2Image,e3Image,b1,b1Image


function preload() {
bgImage=loadImage("bg.jpg")
ssImage=loadImage("ss-removebg-preview.png")
e1Image=loadImage("e1-removebg-preview.png")
e2Image=loadImage("e2-removebg-preview.png")
e3Image=loadImage("e3-removebg-preview.png")
b1Image=loadImage("b1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  ss=createSprite(770, 635, 50, 50);
  ss.addImage(ssImage)
  ss.scale=0.8

b1Group=new Group()
e1Group=new Group()
e2Group=new Group()
e3Group=new Group()
}

function draw() {
  background(bgImage); 
  if (gameState===play) {
    ss.x=mouseX
    edges=createEdgeSprites()
    ss.collide(edges)

if (keyDown("space")) {
  b1.shoot()
}
    
    shootb1();
   e1();
    e2();
  e3()
 
    if (b1Group.isTouching(e1Group)) {
      b1Group.destroyEach();
      e1Group.destroyEach();
     kills=kills+1
    }
    if (b1Group.isTouching(e2Group)) {
      b1Group.destroyEach();
      e2Group.destroyEach();
     kills=kills+1
    }
    if (b1Group.isTouching(e3Group)) {
      b1Group.destroyEach();
      e3Group.destroyEach();
     kills=kills+1
    }
     if (e1Group.isTouching(ss)||e2Group.isTouching(ss)||e3Group.isTouching(ss)) {
     gameState=end
    }
    if (gameState===end){
      ss.x=width/2;
  ss.y=height/2;
     ss.scale=0.8;
       
      b1Group.destroyEach();
     e1Group.destroyEach();
     e2Group.destroyEach();
     e3Group.destroyEach();
      
       
    b1Group.setVelocityYEach(0);
     e1Group.setVelocityYEach(0);
    e2Group.setVelocityYEach(0);
    e3Group.setVelocityYEach(0);
     
      
     ss.visible=false
    }
     
     
     drawSprites();
     textSize(20);
     fill(255);
     text("kills: "+ kills,35,30);
    
  }

  function shootb1(){
    b1= createSprite(500,500)
    b1.y= ss.y-30
    b1.addImage(b1Image)
    b1.scale=0.12
    b1.velocityX= 7
    b1Group.add(b1)
  }

  function e1() {
    if (World.frameCount % 200 == 0) {
   var e1 = createSprite(Math.round(random(50,350),40, 10, 10));
  e1.addImage(e1Image);
   e1.scale=0.22;
   e1.velocityY = 5;
   e1.lifetime = 200;
    e1Group.add(e1);
    }
  }
  function e2() {
    if (World.frameCount % 320 == 0) {
      var e2 = createSprite(Math.round(random(50,350),40, 10, 10));
     e2.addImage(e2Image);
  e2.scale=0.23;
   e2.velocityY = 5;
  e2.lifetime = 200;
  e2Group.add(e2);
  }
  }
  
  function e3() {
    if (World.frameCount % 410 == 0) {
var e3 = createSprite(Math.round(random(50, 350),40, 10, 10));
e3.addImage(e3Image);
   e3.scale=0.23;
  e3.velocityY = 5;
    e3.lifetime = 200;
   e3Group.add(e3);
    }
  }

  

}
