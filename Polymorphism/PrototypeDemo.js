class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Shape {
  constructor(start, end, color=0, thickness=1, fillStyle=1) {
    this.start = start;
    this.end = end;
    this.color = color;
    this.thickness = thickness;
    this.fillStyle = fillStyle;
  }

  draw() {}

  clone(){}
}

class Line extends Shape {
  draw() {
    console.log(`Drawing Line from ${this.start.x}:${this.start.y} to ${this.end.x}:${this.end.y}`);
  }

  clone(){
    return this
  }
}

class Rectangle extends Shape {
  draw() {
    console.log(`Drawing Rectangle from ${this.start.x}:${this.start.y} to ${this.end.x}:${this.end.y}`);
  }

  clone(){
    return this
  }
}

const shapeList = [];
let shape = new Line(new Point(0, 0), new Point(10, 10));
shape.draw();
shapeList.push(shape);


shape = new Rectangle(new Point(1, 1), new Point(11,11))
shape.draw();
shapeList.push(shape)









