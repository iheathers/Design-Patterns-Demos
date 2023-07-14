import java.awt.Point;
import java.text.MessageFormat;
import java.util.Date;
class Base {
private Date creationTime = new Date();
void display) {
System.out.println(creationTime);
class Location extends Base {
private Point start = new Point (10, 10);
private Point end = new Point (40, 50);
void printLocation) {
display();
System.out.printin(Messageformat. format (*(0]: (1) to (2}: (3]", start.x, start.y, end.x, end.y));
public class CloneDemo {
public static void main(String[] args) {
var b = new Location();
b.printLocation() ;