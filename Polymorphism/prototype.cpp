#include <iostream>
#include <string>
#include <list>

using namespace std;

class Point {
    public:
    int x;
    int y;

    Point(int x, int y) {
        this->x = x;
        this->y = y;
    }
};

class Shape {
    protected:
    Point *start;
    Point *end;
    int color;
    int thickness;
    int fill_style;

    public:
    Shape(Point *start, Point *end, int color, int thickness, int fill_style) {
        this->start = start;
        this->end = end;
        this->color = color;
        this->thickness = thickness;
        this->fill_style = fill_style;
    }

    virtual void draw() = 0;
};

class Line : public Shape {
    public:    
    Line(Point *start, Point *end) : Shape(start, end, 0, 1, 1) { }

    void draw() override {
        cout << "Drawing Line from "
            << start->x << ":" << start->y
            << " to "
            << end->x << ":" << end->y
            << endl;
    }
};

int main() {
    auto drawings = new list<Shape *>();
    auto shape = new Line(new Point(0, 0), new Point(10, 10));
    shape->draw();
    drawings->push_back(shape);
    return 0;
}
