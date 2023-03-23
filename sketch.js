var player1;
var waste;
var wasteCount = 0;
var healthBar;
var health;
var empty;
var score;
var wasteGroup;
var money;
var score;
var gameState = "load";

function preload(){
  running = loadAnimation("runningMan1.png","runningMan2.png","runningMan3.png","runningMan4.png",
  "runningMan5.png","runningMan6.png","runningMan7.png");
  wasteImg = loadImage("waste.png");
  moneyImg = loadImage("money.png");
}


function setup() {
  createCanvas(1000, 1000);

  empty = createSprite(200,100,310,60);
  healthBar = createSprite(200,100,300,50);
  healthBar.shapeColor = "red"

  player1 = createSprite(500,500,200,200);
  player1.addAnimation("running", running);
  player1.scale = 0.6;

  wasteGroup = new Group();

  money = createSprite(Math.round(random(1,1000)),Math.round(random(1,1000),5,5))
  money.addImage("moneyImg", moneyImg);
  money.scale = 0.1;

  score = 0;

}


function draw() {
  
  if(gameState === "load"){
    background("red");
    text("Click Up arrow to start",500,500);
    text.scale = 5;
    if(keyDown("up")){
      gameState = "play";
    }
  }
  if(gameState === "play"){
    play();
    drawSprites();
  }
  if(gameState === "end"){

  }

}


function spawnWaste(){
  rand1 = Math.round(random(1,1000))
  rand3 = Math.round(random(1,1000))
  rand2 = Math.round(random(0.5,2))
  if(frameCount % 30 === 0 ){
    waste = createSprite(rand3,rand1,rand2,rand2);
    waste.addImage("wasteImg",wasteImg);
    waste.lifetime = 200;
    waste.scale = 0.1;
    wasteCount = wasteCount + 1;
    wasteGroup.add(waste);
  }
}
function play(){
  background("blue");
  spawnWaste();
  text("Score:" + score, 600, 600);
  if(player1.isTouching(money)){
    score = score + 1;
    text("Score:" + score, 300, 500);
    textSize(32);
  }

  if(wasteGroup.isTouching(player1)){
    healthBar.width = healthBar.width - 3;
  } 

  if(healthBar.width = 0){
    text("Game Over")
    gameState = "end";
  }
  
  if(keyDown("left")){
    player1.x = player1.x - 3;
  }
  if(keyDown("right")){
    player1.x = player1.x + 3;
  }
  if(keyDown("up")){
    player1.y = player1.y - 3;
  }
  if(keyDown("down")){
    player1.y = player1.y + 3;
  }
}

function end(){
  backgorund("black");
  text("GAME OVER" + "                        click to play again",500,500)
}





