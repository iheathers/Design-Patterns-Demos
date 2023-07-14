import java.text.*;

class Location {
  private static int locationSequence = 1;
  private int sequence = Location.locationSequence++;
  private String city;

  public void moveTo(String city) {
    this.city = city;
  }

  public void print() {
    System.out.println(MessageFormat.format("{0}: {1}", sequence, city));
  }
}

public class MementoDemo {
  public static void main(String[] args) {
    var location = new Location();
    location.moveTo("Kolkata");
    location.print();
    location.moveTo("Indore");
    location.print();
    location.moveTo("Mumbai");
    location.print();

  }
}
