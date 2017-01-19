function gun(x, y) {
  this.x = x;
  this.y = y;
  this.r = 5;
  this.toDelete = false;

  this.die = function() {
    this.toDelete = true;
  }

  this.show = function() {
    fill(240, 20, 60);
    ellipseMode(CENTER);
    strokeWeight(0.5);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  this.move = function() {
    this.y = this.y - 5;

  }
  this.hits = function(invader) {
    var d = dist(this.x, this.y, invader.x, invader.y);
    if (d < this.r + invader.r) {
      return true;
    } else {
      return false;
    }


  }
}