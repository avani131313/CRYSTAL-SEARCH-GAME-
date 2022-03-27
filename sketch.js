var PLAY = 1
var END = 0
var gameState = PLAY 

var pinkCrystal, redcrystal, purpleCrystal, greenCrystal, whiteCrystal, blackCrystal, blueCrystal
var pinkCrystalImg, redCrystalImg, purpleCrystalImg, whiteCrystalImg, greenCrystalImg, blackCrystalImg, blueCrystalImg
var pinkGroup, redGroup, blackGroup, greenGroup, whiteGroup, blueGroup, purpleGroup
var mermaid, mermaid_swimming
var underwater, underwaterImg
var gameOver, gameOverImg
var pointSound, pointSoundTrack
var score 



function preload(){

mermaid_swimming = loadAnimation("mermaid1.png", "mermaid2.png", "mermaid3.png", "mermaid4.png", "mermaid5.png")
pinkCrystalImg = loadImage("pinkCrystal.png")
redCrystalImg = loadImage("redCrystal.png")
purpleCrystalImg = loadImage("purpleCrystal.png")
greenCrystalImg = loadImage("greenCrystal.png")
whiteCrystalImg = loadImage("whiteCrystal.png")
blackCrystalImg = loadImage("blackCrystal.png")
blueCrystalImg = loadImage("blueCrystal.png")
underwaterImg = loadImage("underwater wide.jpg")
gameOverImg = loadImage("gameOver.png")
//pointSound = loadSound()



}

function setup() {
 
 // creating bg 
    createCanvas(600,200)
 underwater= createSprite(100,50)
 underwater.addImage(underwaterImg)
 underwater.scale=4

 // creating mermaid 
 mermaid = createSprite(70,100)
 mermaid.addAnimation("swimming", mermaid_swimming)
 mermaid.scale=0.8

 score = 0 

 pinkGroup = new Group()
 blueGroup = new Group()
 purpleGroup = new Group()
 whiteGroup = new Group()
 greenGroup = new Group()
 redGroup = new Group()
 blackGroup = new Group()

}

function draw() {

    background("Black")
 if(gameState === PLAY){
     //moving underwater
     underwater.velocityX= -3
     
     if(underwater.x < 0){
         underwater.x = 100
     }
    // creating crystals 

     var select_crystal = Math.round(random(1,7))

     if(World.frameCount % 100 == 0){
         switch(select_crystal){
          case 1: pinkCrystal();
          break;
          case 2: redCrystal();
          break;
          case 3: blueCrystal();
          break;
          case 4: whiteCrystal();
          break;
          case 5: greenCrystal();
          break;
          case 6: purpleCrystal();
          break;
          case 7: blackCrystal();
          break;
          
         }
     }
 }
 if(gameState == END){
    

    gameOver = createSprite(300,100,50,50)
    gameOver.addImage(gameOverImg)

    pinkGroup.destroy()
    blueGroup.destroy()
    purpleGroup.destroy()
    whiteGroup.destroy()
    greenGroup.destroy()
    redGroup.destroy()
    blackGroup.destroy()
    mermaid.destroy()
    underwater.velocityX = 0
    
 }

 // POINTS AND RULES
  /*if(mermaid.isTouching(pinkGroup)){
      pinkGroup.destroyEach()
      score=score+1
  }
  if(mermaid.isTouching(redGroup)){
    redGroup.destroyEach()
    score=score+2
}
 
if(mermaid.isTouching(greenGroup)){
    greenGroup.destroyEach()
    score=score+3
}

if(mermaid.isTouching(blueGroup)){
    blueGroup.destroyEach()
    score=score+4
}

if(mermaid.isTouching(purpleGroup)){
    purpleGroup.destroyEach()
    score=score+5
}

if(mermaid.isTouching(whiteGroup)){
    whiteGroup.destroyEach()
    score=score+10
}

if(mermaid.isTouching(blackGroup)){
    blackGroup.destroyEach()
    gameState = END;
}
*/

pinkGroup.overlap(mermaid, destruction)
redGroup.overlap(mermaid, destruction)
blueGroup.overlap(mermaid, destruction)
purpleGroup.overlap(mermaid, destruction)
whiteGroup.overlap(mermaid, destruction)
greenGroup.overlap(mermaid, destruction)
blackGroup.overlap(mermaid, endGame)


 // moving mermaid with keys 
 if (keyDown("DOWN_ARROW")){
     mermaid.y = mermaid.y+2
 }
 if (keyDown("UP_ARROW")){
    mermaid.y = mermaid.y-2
}
 



drawSprites()
textSize(15)
fill("red")
text("Score:" + score, 510,30)

textSize(20)
fill("black")
textFont("Algeria")
text("Crystal Search!!",235,30)

textSize(13)
text("Collect Crystals and earn points, but make sure you don't collect the evil black crystal or you will be in darkness!",8,190)

}

function destruction(gem){
 gem.destroy()
 score += 10
}

function endGame(gem){
    gem.destroy()
    gameState = END
}
function pinkCrystal() {
var pink = createSprite(600,Math.round(random(50,570)),10,10)
pink.addImage(pinkCrystalImg)
pink.velocityX=-2
pink.lifetime = 300
pink.scale=0.5
pinkGroup.add(pink)

}

function redCrystal() {
var red = createSprite(600,Math.round(random(50,150)),10,10)
red.addImage(redCrystalImg)
red.velocityX=-2
red.lifetime = 300
red.scale=0.5
redGroup.add(red)
    
    }

function greenCrystal() {
var green = createSprite(600,Math.round(random(50,150)),10,10)
green.addImage(greenCrystalImg)
green.velocityX=-2
green.lifetime = 300
green.scale=0.5
greenGroup.add(green)
        
}

function whiteCrystal() {
var white = createSprite(600,Math.round(random(50,150)),10,10)
white.addImage(whiteCrystalImg)
white.velocityX=-2
white.lifetime = 300
white.scale=0.5
whiteGroup.add(white)
            
            }
function purpleCrystal() {
var purple = createSprite(600,Math.round(random(50,150)),10,10)
purple.addImage(purpleCrystalImg)
purple.velocityX=-2
purple.lifetime = 300
purple.scale=0.5
purpleGroup.add(purple)
                
}
                
function blackCrystal() {
var black = createSprite(600,Math.round(random(50,150)),10,10)
black.addImage(blackCrystalImg)
black.velocityX=-2
black.lifetime = 300
black.scale=0.2
blackGroup.add(black)
                    
}

function blueCrystal() {
var blue = createSprite(600,Math.round(random(50,150)),10,10)
blue.addImage(pinkCrystalImg)
blue.velocityX=-2
blue.lifetime = 300
blue.scale=0.5
blueGroup.add(blue)
                        
}  