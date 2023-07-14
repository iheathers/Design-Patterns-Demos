import java.text.MessageFormat;
import java.util.HashMap;

interface Approver {
  void approve(Employee emp, double amount);

  void setBoss(Approver boss);

}

class President implements Approver {
  int id;
  String name;
  Approver boss;

  President(int id, String name) {
    this.id = id;
    this.name = name;
  }

  @Override
  public void approve(Employee emp, double amount) {
    if (amount > 30000) {
      this.boss.approve(emp, amount);
    } else {

      System.out.println(MessageFormat.format("{0} approves {1}''s expense of {2}", name, emp.name, amount));
    }
  }

  @Override
  public void setBoss(Approver boss) {
    this.boss = boss;
  }
}

class VicePresident implements Approver {
  int id;
  String name;
  Approver boss;

  VicePresident(int id, String name) {
    this.id = id;
    this.name = name;
  }

  @Override
  public void approve(Employee emp, double amount) {

    if (amount > 20000) {
      this.boss.approve(emp, amount);

    } else {
      System.out.println(MessageFormat.format("{0} has approved {1}''s expense of {2}", name, emp.name, amount));

    }
  }

  @Override
  public void setBoss(Approver boss) {
    this.boss = boss;
  }

}

class Manager implements Approver {
  int id;
  String name;
  Approver boss;

  Manager(int id, String name) {
    this.id = id;
    this.name = name;
  }

  @Override
  public void approve(Employee emp, double amount) {

    if (amount > 2000) {
      this.boss.approve(emp, amount);
    } else {

      System.out.println(MessageFormat.format("Manager {0} allows {1}''s expense of {2}", name, emp.name, amount));
    }
  }

  public void setBoss(Approver boss) {
    this.boss = boss;
  }
}

class Employee {
  int id;
  String name;

  Employee(int id, String name) {
    this.id = id;
    this.name = name;
  }
}

class ChainDemo {

  public static void main(String[] args) {

    var ramesh = new Employee(7, "Ramesh");
    var suresh = new Employee(6, "Suresh");
    var ram = new Employee(5, "Ram");
    var shyam = new Employee(4, "Shyam");

    var khichai = new Manager(3, "Khichai");
    var sichai = new VicePresident(3, "Sichai");
    var pichai = new President(1, "Pichai");

    var expenses = new HashMap<Employee, Double>();
    expenses.put(ramesh, 1000.50);
    expenses.put(suresh, 10000.75);
    expenses.put(ram, 2000.00);
    expenses.put(shyam, 50000.00);

    for (var expense : expenses.entrySet()) {
      var emp = expense.getKey();
      double amount = expense.getValue();

      khichai.setBoss(sichai);
      sichai.setBoss(pichai);

      khichai.approve(emp, amount);
      // if (amount < 2000)
      // khichai.approve(emp, amount);
      // else if (amount <20000)
      // sichai.approve(emp, amount);
      // else
      // pichai.approve(emp, amount);
    }
  }
}