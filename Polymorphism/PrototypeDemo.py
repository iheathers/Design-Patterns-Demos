class Point:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y


class Shape:
    def __init__(self, start: Point, end: Point, color: int = 0, thickness: int = 1, fill_style: int = 1):
        self.start = start
        self.end = end
        self.color = color
        self.thickness = thickness
        self.fill_style = fill_style


class Line(Shape):
    def __init__(self, start: Point, end: Point, color: int = 0, thickness: int = 1, fill_style: int = 1):
        super().__init__(start, end, color, thickness, fill_style)

    def draw(self):
        print(
            f"Drawing Line from {self.start.x}:{self.start.y} to {self.end.x}:{self.end.y}")


class Rectangle(Shape):
    def __init__(self, start: Point, end: Point, color: int = 0, thickness: int = 1, fill_style: int = 1):
      super().__init__(start, end, color, thickness, fill_style)

    def draw(self):
        print(
            f"Drawing Rectangle from {self.start.x}:{self.start.y} to {self.end.x}:{self.end.y}")


shape = Line(Point(0, 0), Point(10, 10))
shape.draw()
