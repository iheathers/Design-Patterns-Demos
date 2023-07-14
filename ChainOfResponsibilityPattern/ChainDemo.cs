
class President {
  public int id;
  public String name;

  public President(int id, String name) {
    this.id = id;
    this.name = name;
  }

  public void Approve(Employee emp, double amount) {
    Console.WriteLine($"{name} approves {emp.name}'s expense of {amount}");
  }
}

class VicePresident {
  public int id;
  public String name;

  public VicePresident(int id, String name) {
    this.id = id;
    this.name = name;
  }

  public void Approve(Employee emp, double amount) {
    Console.WriteLine($"{name} has approved {emp.name}''s expense of {amount}");
  }
}

class Manager {
  public int id;
  public String name;

  public Manager(int id, String name) {
    this.id = id;
    this.name = name;
  }

  public void Approve(Employee emp, double amount) {
    Console.WriteLine($"Manager {name} allows {emp.name}'s expense of {amount}");
  }
}

class Employee {
  public int id;
  public String name;

  public Employee(int id, String name) {
    this.id = id;
    this.name = name;
  }
}

class ChainDemo {

  public static void Main() {

    var ramesh = new Employee(7, "Ramesh");
    var suresh = new Employee(6, "Suresh");
    var ram = new Employee(5, "Ram");
    var shyam = new Employee(4, "Shyam");
    var khichai = new Manager(3, "Khichai");
    var sichai = new VicePresident(3, "Sichai");
    var pichai = new President(1, "Pichai");

    var expenses = new Dictionary<Employee, Double>();
    expenses.Add(ramesh, 1000.50);
    expenses.Add(suresh, 10000.75);
    expenses.Add(ram, 2000.00);
    expenses.Add(shyam, 50000.00);

    foreach (var expense in expenses) {
      var emp = expense.Key;
      double amount = expense.Value;
      if (amount < 2000)
        khichai.Approve(emp, amount);
      else if (amount <20000)
        sichai.Approve(emp, amount);
      else
        pichai.Approve(emp, amount);
    }
  }
}