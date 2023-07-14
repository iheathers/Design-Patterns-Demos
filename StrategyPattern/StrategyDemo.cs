interface DiscountStrategy
{
    double CalculateDiscount();
}

class Product
{
    public string name;
    public double unitPrice;
    public double quantity;

    public Product(string name, double unitPrice, int quantity)
    {
        this.name = name;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }
}

class Order
{
    List<Product> productList = new();
    string discountStrategy = "no discount";

    public void AddProduct(Product product)
    {
        productList.Add(product);
    }

    public List<Product> GetProductList()
    {
        return productList;
    }

    public void SetDiscountStrategy(string strategy)
    {
        this.discountStrategy = strategy.ToLower();
    }

    public void CheckOut()
    {
        double total = 0;
        double discount = 0;
        foreach (var product in productList)
        {
            total += product.unitPrice * product.quantity;
        }

        if (discountStrategy == "no discount")
        {
            discount = 0;
        }
        else if (discountStrategy == "standard discount")
        {
            discount = total * .10;
        }
        else if (discountStrategy == "high value discount")
        {
            if (total > 1000)
            {
                discount = total * .20;
            }
            else
            {
                discount = total * .10;
            }
        }
        else if (discountStrategy == "vip discount")
        {
            discount = total * .30;
        }
        System.Console.WriteLine("Order details");
        foreach (var product in productList)
        {
            System.Console.WriteLine($"{product.name} {product.unitPrice} {product.quantity} {product.unitPrice * product.quantity}");
        }
        System.Console.WriteLine($"Amount: {total}", total);
        System.Console.WriteLine($"Discount: {discount}");
        System.Console.WriteLine($"Net: {total - discount}");
    }
}

public class StrategyDemo
{
    public static void Main(string[] args)
    {
        var order = new Order();
        order.AddProduct(new Product("iPhone", 1_00_000, 1));
        order.AddProduct(new Product("AirPods", 30_000, 2));
        order.AddProduct(new Product("Macbook", 2_20_000, 1));
        order.SetDiscountStrategy("standard discount");
        order.CheckOut();
    }
}
