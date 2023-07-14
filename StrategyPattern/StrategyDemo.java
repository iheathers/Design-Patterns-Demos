import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;

interface DiscountStrategy {
  double calculateDiscount(double total);
}

class NoDiscountStrategy implements DiscountStrategy {

  @Override
  public double calculateDiscount(double total) {
    return 0;
  }

}

class StandardDiscountStrategy implements DiscountStrategy {
  @Override
  public double calculateDiscount(double total) {
    return total * 0.10;
  }
}

class HighValueDiscountStrategy implements DiscountStrategy {
  @Override
  public double calculateDiscount(double total) {

    // WE CAN CREATE A MAP IF THERE ARE TOO MANY IF ELSE
    if (total > 1000) {
      return total * .20;
    }

    return total * .10;

  }
}

class VipDiscountStrategy implements DiscountStrategy {
  @Override
  public double calculateDiscount(double total) {
    return total * .30;
  }
}

class Product {
  String name;
  double unitPrice;
  double quantity;

  Product(String name, double unitPrice, int quantity) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }
}

class Order {
  List<Product> productList = new ArrayList<>();
  // String discountStrategy = "no discount";
  DiscountStrategy strategy;

  Order(DiscountStrategy strategy) {
    this.strategy = strategy;
  }

  public void addProduct(Product product) {
    productList.add(product);
  }

  public List<Product> getProductList() {
    return productList;
  }

  // void setDiscountStrategy(String strategy) {
  // this.discountStrategy = strategy.toLowerCase();
  // }

  void checkOut() {
    double total = 0;
    double discount = 0;
    for (var product : productList) {
      total += product.unitPrice * product.quantity;
    }

    discount = this.strategy.calculateDiscount(total);

    System.out.println("Order details");
    for (var product : productList) {
      System.out.println(MessageFormat.format("{0} {1} {2} {3}", product.name, product.unitPrice, product.quantity,
          product.unitPrice * product.quantity));
    }
    System.out.println(MessageFormat.format("Amount: {0}", total));
    System.out.println(MessageFormat.format("Discount: {0}", discount));
    System.out.println(MessageFormat.format("Net: {0}", total - discount));
  }
}

public class StrategyDemo {

  public static void main(String[] args) {
    var order = new Order(new VipDiscountStrategy());
    order.addProduct(new Product("iPhone", 1_00_000, 1));
    order.addProduct(new Product("AirPods", 30_000, 2));
    order.addProduct(new Product("Macbook", 2_20_000, 1));

    // order.setDiscountStrategy("standard discount");

    order.checkOut();
  }
}
