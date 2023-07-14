
class Developer {

  public string name;
  public decimal salary;

  public Developer(string name, decimal salary) {
    this.name = name;
    this.salary = salary;
  }
    
}

class Manager  {

  public string name;
  public decimal salary;

  public Manager(string name, decimal salary) {
    this.name = name;
    this.salary = salary;
  }
}

public class CompositeDemo {
  public static void Main() {
    var devList = new List<Developer>();
    var mgrList = new List<Manager>();
    
    devList.Add(new Developer("Brendan Eich", 100_000));
    devList.Add(new Developer("James Gosling", 200_000));
    devList.Add(new Developer("Guido van Rossum", 250_000));
    devList.Add(new Developer("Anders Hejlsberg", 350_000));
    mgrList.Add(new Manager("Dennis Ritchie", 500_000));
    mgrList.Add(new Manager("Alan Kay", 500_000));

    decimal sum = 0;
    foreach (var dev in devList )
      sum += dev.salary;

    foreach (var mgr in mgrList)
      sum += mgr.salary;

    Console.WriteLine($"The total company salary is {sum}");
  }
}
