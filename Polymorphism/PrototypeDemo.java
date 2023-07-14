
import java.text.MessageFormat;
import java.util.ArrayList;

class Point {
  int x;
  int y;

  Point(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

abstract class Shape {
  Point start;
  Point end;
  int color;
  int thickness;
  int fillStyle;

  public Shape(Point start, Point end, int color, int thickness, int fillStyle) {
    this.start = start;
    this.end = end;
    this.color = color;
    this.thickness = thickness;
    this.fillStyle = fillStyle;
  }

  public abstract void draw();
}

class Line extends Shape {

  public Line(Point start, Point end) {
    super(start, end, 0, 1, 1);
  }

  public void draw() {
    System.out.println(MessageFormat.format("Drawing Line from {0}:{1} to {2}:{3}", start.x, start.y, end.x, end.y));
  }
}

public class PrototypeDemo {

  public static void main(String[] args) {
    var drawing = new ArrayList<Shape>();

    var shape = new Line(new Point(0, 0), new Point(10, 10));
    shape.draw();
    drawing.add(shape);
  }
}