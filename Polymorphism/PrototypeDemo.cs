
class Point {
  public int x;
  public int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

abstract class Shape
{
  protected Point start;
  protected Point end;
  protected int color;
  protected int thickness;
  protected int fillStyle;

  public Shape(Point start, Point end, int color, int thickness, int fillStyle)
  {
    this.start = start;
    this.end = end;
    this.color = color;
    this.thickness = thickness;
    this.fillStyle = fillStyle;
  }

  public abstract void Draw();
}

class Line : Shape
{

  public Line(Point start, Point end)
    : base(start, end, 0, 1, 1)
  {
  }

  public override void Draw()
  {
    Console.WriteLine($"Drawing Line from {start.x}:{start.y} to {end.x}:{end.y}");
  }
}

public class Program
{

  public static void Main()
  {
    var drawing = new List<Shape>();

    var shape = new Line(new Point(0, 0), new Point(10, 10));
    shape.Draw();
    drawing.Add(shape);
  }
}