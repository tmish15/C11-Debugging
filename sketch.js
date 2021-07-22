  var trex, trex_running, edges;
  var groundImage;

  function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png")
  }

  function setup(){
    createCanvas(600,200);
    
    // creating trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.debug = true
    edges = createEdgeSprites();
    ground = createSprite(300,180, width, 20)
    ground.addImage("ground", groundImage)
    ground.debug = true
    ground.velocityX = -6
    //adding scale and position to trex
    trex.scale = 0.5;
    invisibleGround = createSprite(300, 190, width,10)
    invisibleGround.visible = false
    trex.x = 50
  }


  function draw(){

    //set background color 
    background("white");
    
    //logging the y position of the trex
    console.log(trex.y)
    
    //jump when space key is pressed
    if(keyDown("space") && trex.y>176){
      trex.velocityY = -10;
    }
    //gravitational velocity
    trex.velocityY = trex.velocityY + 0.5;
    if(ground.x<0){
    ground.x = width/2
    }
    //stop trex from falling down
    trex.collide(invisibleGround)
    drawSprites();
  }