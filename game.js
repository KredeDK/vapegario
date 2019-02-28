var cloud;
var cloudsize = 100;
var cloudssize = 25;
zoom = 1;

var clouds = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  cloud = new Cloud(0, 0, cloudsize, color(46, 119, 221));
  for (var i = 0; i < 200; i++) {
    var x = random(-width*2, width*2);
    var y = random(-height*2, height*2);
    //var color = color(random(0,255), random(0,255), random(0,255));
    clouds[i] = new Cloud(x, y, cloudssize, color(random(0,255), random(0,255), random(0,255)));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 220, 220);

  translate(width/2, height/2);
  var newzoom = cloudsize / cloud.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-cloud.pos.x, -cloud.pos.y)

  for (var i = clouds.length-1; i >= 0; i--) {
    clouds[i].show();
    if (cloud.consumes(clouds[i])) {
      clouds.splice(i, 1);
      var x = random(-width*2, width*2);
      var y = random(-height*2, height*2);
      clouds.push(new Cloud(x, y, cloudssize, color(random(0,255), random(0,255), random(0,255))));
    }
  }
  cloud.show();
  cloud.update();

}
