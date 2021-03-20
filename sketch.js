var jungle, cat, rat


function preload() {
    //load the images here
    bgImage = loadImage("garden.png");
    catImg = loadAnimation("cat1.png");
    catMoving = loadAnimation("cat2.png","cat3.png")
    catimg2 = loadAnimation("cat4.png")
    movingRat = loadAnimation("mouse2.png","mouse3.png");
    ratImg = loadAnimation("mouse1.png");
    ratImg2 = loadAnimation("mouse4.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,600);
    cat.addAnimation("catSleeping",catImg);
    cat.scale = 0.2

    rat = createSprite(100,600);
    rat.addAnimation("ratStanding",ratImg);
    rat.scale = 0.2
}

function draw() {

    background(bgImage);
    if(cat.x - rat.x < (cat.width - rat.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catStanding",catImg2);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catSleeping")
        rat.addAnimation("ratTeasing",ratImg2);
        rat.scale = 0.2;
        rat.changeAnimation("ratTeasing")
    }
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here.
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5 ;
    cat.addAnimation("catRunning",catMoving);
    cat.changeAnimation("catRunning");
    rat.addAnimation("ratTeasing",movingRat);
    rat.frameDelay = 25;
    rat.changeAnimation("ratTeasing");
}
  
}
