


function invader(x, y) {
  this.x = x;
  this.y = y;
  this.r = 25;
  this.xdir = 1;
  this.toDelete=false;
this.die=function(){
  this.toDelete=true;
}
  this.shiftdown = function() {
    this.xdir *= -1;
    this.y += this.r; 

  }
  this.grow = function() {
    this.r = this.r + 2;
  }
  this.show = function(img) {
    fill(40, 20, 100);
    noStroke();
    imageMode(CENTER);
    ellipseMode(CENTER);
    //ellipse(this.x, this.y, this.r * 2, this.r * 2);
   image(img,this.x,this.y,this.r*2,this.r*2);
    
  }
  this.move = function() {
    this.x = this.x + this.xdir;


  }


}