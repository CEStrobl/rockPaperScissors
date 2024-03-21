let circleCount = 1;

class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = random(canvas.width);
    this.y = random(canvas.height);

    this.w = 10;
    this.h = 10;

    this.vx = random(2, 2);
    this.vy = random(2, 4);

    this.boundX = this.canvas.width /8;
    this.boundY = this.canvas.height /8;

  }

  firefliesMove() {
    
    
    // spiratic movement only if in the center
    if (this.x < (this.w/2) + boundX || 
    (this.x + this.w/2) > this.canvas.width + boundX) {
      this.vx = -random(2, 2);
    } 

    if (this.y < (this.h/2) + boundY || 
    (this.y + this.h/2) > this.canvas.height + boundY) {
      this.vy = -random(2, 4);
    } 

    // update movement
    this.x += this.vx;
    this.y += this.vy;

    // bounce off the walls
    if (this.x < (this.w/2) || 
    (this.x + this.w/2) > this.canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < (this.h/2) || 
    (this.y + this.h/2) > this.canvas.height) {
      this.vy = -this.vy;
    }
  }

  draw() {
    this.move();
    fill(this.c);
    throw "nothing to draw lol";
  }
}

class firefly extends Shape {
  draw() {
    this.firefliesMove();
    fill("#f0dd8b");

    circle(this.x, this.y, this.w);
  }
}

let shapes = [];

let canvas = { width: 200, height: 200 };

var setup = function () {
  createCanvas(canvas.width, canvas.width);
  for (i = 0; i < circleCount; i++) {
    let fly = new firefly(canvas);
    shapes.push(fly);
  }
};

var draw = function () {
  background("#313c6e");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.draw();
  }
};
