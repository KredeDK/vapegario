function Cloud(x, y, r, color) {
  this.pos = createVector(x, y);
  this.r = r;
  this.velocity = createVector(0,0);

  this.show = function() {
    fill(color);
    //fill(46, 119, 221);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.update = function() {
    var newvelocity = createVector(mouseX-width/2, mouseY-height/2);
    newvelocity.setMag(6);
    this.velocity.lerp(newvelocity, 0.05);
    this.pos.add(this.velocity);
  }

  this.consumes = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      //this.r += other.r*0.2;
      return true;
    } else {
      return false;
    }
  }

}
