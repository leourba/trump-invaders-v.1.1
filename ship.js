function Ship() {
  this.xdir = 0;
  this.x = width / 2;
  this.r=20;
  this.setdir= function(dir) {
    this.xdir = dir;
  }
  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 20, this.r, 60);
    fill(80);
    rect(this.x, height - 52, 10, 7);
  }
  this.move = function(dir) {
    this.x += this.xdir * 5;
  }
}