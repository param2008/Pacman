function preload() {
G1=loadImage("Ghost1.png");
G2=loadImage("Ghost2.png");
G3=loadImage("Ghost3.png");
G4=loadImage("Ghost4.png");
maze=loadImage("Maze1.png");
Play=loadImage("Player.png");
Pacman1=loadAnimation("Pacman Right mc.png","Pacman Mo right.png");
Pacman2=loadAnimation("Pacman Left mc.png","Pacman Left mo.png");
Pacman3=loadAnimation("Pacman Mc up.png","Pacman MO up.png");
Pacman4=loadAnimation("Pacman Mc down.png","Pacman Mo down.png");

}

function setup() {
  createCanvas(1200,600);

  Ghost1=createSprite(500,280);
  Ghost1.addImage(G1);
  Ghost1.scale=0.6;

  Ghost2=createSprite(560,280);
  Ghost2.addImage(G2);
  Ghost2.scale=0.5;

  Ghost3=createSprite(630,280);
  Ghost3.addImage(G3);
  Ghost3.scale=0.5;

  Ghost4=createSprite(700,280);
  Ghost4.addImage(G4);
  Ghost4.scale=0.6;

  
    
    Pac1=createSprite(280,280);
    Pac1.addAnimation('Pack',Pacman1);
    Pac1.scale=0.15;
    

    Pac2=createSprite(280,280);
    Pac2.addAnimation('Pack',Pacman2);
    Pac2.scale=0.15;
    Pac2.visible= false

    Pac3=createSprite(280,280);
    Pac3.addAnimation('Pack',Pacman3);
    Pac3.scale=0.15;
    Pac3.visible= false

    Pac4=createSprite(280,280);
    Pac4.addAnimation('Pack',Pacman4);
    Pac4.scale=0.15;
    Pac4.visible= false
 // Maze=createSprite(1600,800);
  //Maze.addImage(maze);

}

function draw() {
  background(maze);  

  //Pac1.velocityX=0;
  //Pac1.velocityY=0;

  //Pac2.velocityX=0;
  //Pac2.velocityY=0;

  //Pac3.velocityX=0;
  //Pac3.velocityY=0;

  //Pac4.velocityX=0;
  //Pac4.velocityY=0;

  if(keyWentDown("right")){
    Pac2.visible=false
  Pac1.visible= true
  Pac3.visible=false
  Pac4.visible=false
  Pac1.velocityX =Pac1.velocityX+ 4;
  Pac1.velocityY = 0;
  Pac1.x=Pac2.x;
  Pac1.x=Pac3.x
  Pac1.x=Pac4.x

  }
  if(keyWentUp("right")){
  Pac2.visible=false
    Pac1.visible= true
    Pac3.visible=false
    Pac4.visible=false
    Pac1.velocityX =0;
    Pac1.velocityY = 0;
Pac2.x=Pac1.x;
Pac2.x=Pac3.x
Pac2.x=Pac4.x
    }
  if(keyWentDown("left")){
    Pac2.visible= true
    Pac3.visible=false
    Pac1.visible= false
    Pac4.visible=false
  Pac2.velocityX = -2;
  Pac2.velocityY = 0;
Pac2.x=Pac1.x;

  }
if(keyWentUp("left")){
  Pac2.visible= true
 Pac1.visible= false
 Pac3.visible=false
 Pac4.visible=false
Pac2.velocityX = 0;
Pac2.velocityY = 0;
Pac2.x=Pac1.x;
}
  if(keyWentUp("up")){
    Pac2.visible= false
    Pac1.visible= false
    Pac3.visible=true
    Pac4.visible=false
  Pac3.velocityX = 0;
  Pac3.velocityY =0;
 Pac3.x=Pac1.x;
  }
  if(keyWentDown("up")){
    Pac2.visible= false
    Pac1.visible= false
    Pac3.visible= true
    Pac4.visible=false
  Pac3.velocityX = 0;
  Pac3.velocityY  = -4;
  Pac3.x=Pac1.x;
  }
  if(keyWentUp("down")){
    Pac2.visible= false
    Pac1.visible= false
    Pac3.visible= false
    Pac4.visible=true
  Pac4.velocityX = 0;
  Pac4.velocityY =0;
  Pac4.x=Pac1.x
  Pac4.x=Pac2.x
  Pac4.x=Pac3.x
  }
  if(keyWentDown("down")){
    Pac2.visible= false
    Pac1.visible= false
    Pac3.visible= false
    Pac4.visible= true
  Pac4.velocityX = 0;
  Pac4.velocityY  = 4;
 Pac4.x=Pac1.x
 Pac4.x=Pac2.x
 Pac4.x=Pac3.x
 
  }

  drawSprites();
}