var ship;
var invaders = [];
var guns = [];
var img;

function preload(){
  img=loadImage('https://raw.githubusercontent.com/leourba/trump-invader/master/images/trump.PNG');

}
function setup() {
  createCanvas(600, 400);
  //se crea la nave
  ship = new Ship();
  // gun= new gun(width/2,height);
  //se crean lo invasores
  for (var i = 0; i < 6; i++) {
    invaders[i] = new invader(i * 80 + 80, 60);
  }
}

function draw() {
 
  background(51);

   if(invaders.length==0){
    text('felicitaciones, GANASTE!',400,height/2);
  }

  
  //se muestra la nave
  ship.show();
  ship.move();
  //se muestran y mueven la balas 
  for (var i = 0; i < guns.length; i++) {
    guns[i].show();
    guns[i].move();
    //efectos
    for (var j = 0; j < invaders.length; j++) {
      if (guns[i].hits(invaders[j])) {
        invaders[j].grow();
        guns[i].die();
        if (invaders[j].r>= 36){
          invaders[j].die();
        }

      }
    }
  }
  var edge = false;
  //se muestran invasores
  for (var i = 0; i < invaders.length; i++) {
    invaders[i].show(img);
    invaders[i].move();
    if (invaders[i].x +invaders[i].r> width || invaders[i].x- invaders[i].r < 0) {
      edge = true;
    }
  }
  if (edge) {
    for (var i = 0; i < invaders.length; i++) {
      invaders[i].shiftdown();
    }
  }

  //se borran las balas e invasores
  for (var i = guns.length - 1; i >= 0; i--) {
    if (guns[i].toDelete) {
      guns.splice(i, 1);
    };
  }
    for (var i = invaders.length - 1; i >= 0; i--) {
    if (invaders[i].toDelete) {
      invaders.splice(i, 1);
    };

  }
  
  if (ship.x+ship.r > width || ship.x - ship.r< 0) {
    ship.setdir(0);
  }
    for (var j = 0; j < invaders.length; j++) {
  if(invaders[j].y> height-80){
    fill(255);
    rect(0,0,1280,800);
    fill(0);
    text('perdiste',100,height/2);
  }
    
  }
}




function keyReleased() {
  if (key != ' ') {
    ship.setdir(0);
  }
}

function keyPressed() {
  
  if (keyCode === RIGHT_ARROW) {
    ship.setdir(1);

  } else if (keyCode === LEFT_ARROW) {

    ship.setdir(-1);
  }
  if (keyCode == UP_ARROW||key==' ') {

    var Gun = new gun(ship.x, height - 53);
    guns.push(Gun);
  }

}