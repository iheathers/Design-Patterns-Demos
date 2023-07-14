import java.text.MessageFormat;
import java.util.ArrayList;

class Developer {

  String name;
  double salary;

  Developer(String name, double salary) {
    this.name = name;
    this.salary = salary;
  }
    
}

class Manager  {

  String name;
  double salary;

  Manager(String name, double salary) {
    this.name = name;
    this.salary = salary;
  }
}

public class CompositeDemo {
  public static void main(String[] args) {
    var devList = new ArrayList<Developer>();
    var mgrList = new ArrayList<Manager>();
    
    devList.add(new Developer("Brendan Eich", 100_000));
    devList.add(new Developer("James Gosling", 200_000));
    devList.add(new Developer("Guido van Rossum", 250_000));
    devList.add(new Developer("Anders Hejlsberg", 350_000));
    mgrList.add(new Manager("Dennis Ritchie", 500_000));
    mgrList.add(new Manager("Alan Kay", 500_000));

    var sum = 0;
    for (var dev : devList )
      sum += dev.salary;

    for (var mgr: mgrList)
      sum += mgr.salary;

    System.out.println(MessageFormat.format("The total company salary is {0}", sum));
  }
}
