// package Factory.Java.Problem;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;


abstract class Product {
  protected String description;

  public abstract void makeComputer(int cpu, int ram, int storage, int display);

  public String getInfo() {
    return this.description;
  }
}

class PC extends Product {
  public void makeComputer(int cpu, int ram, int storage, int display) {
    this.description = MessageFormat.format("DELL PC: CPU {0}, RAM {1}, STORAGE {2}, DISPLAY {3}", cpu, ram, storage,
        display);
  }
}

class Laptop extends Product {
  public void makeComputer(int cpu, int ram, int storage, int display) {
    this.description = MessageFormat.format("DELL Laptop: CPU {0}, RAM {1}, STORAGE {2}, DISPLAY {3}", cpu, ram,
        storage, display);
  }
}


public class FactoryDemo {

  public static Product create(String type, int cpu, int ram, int storage, int display) {
    Product product = null;
    switch (type) {
      case "PC": 
        product = new PC();
        product.makeComputer(cpu, ram, storage, display);
        break;
      case "Laptop":
        product = new Laptop();
        product.makeComputer(cpu, ram, storage, display);
        break;
    }
    return product;
  }

  public static void main(String[] args) {

    var computer = create("PC", 4, 32, 2, 16);

    System.out.println(computer.getInfo());
  }
}
