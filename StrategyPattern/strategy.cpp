#include <iostream>
#include <string>
#include <list>
#include <algorithm>

using namespace std;

struct Product {
    string name;
    double unit_price;
    double quantity;

    Product(string name, double unit_price, int quantity)
        : name(name), unit_price(unit_price), quantity(quantity) { }
};

class Order {
    list<Product *> productList;

    public:
    string discount_strategy = "no discount";

    void add_product(Product *product) {
        productList.push_back(product);
    }

    list<Product *> get_product_list() {
        return productList;
    }

    void set_discount_strategy(string strategy) {
        this->discount_strategy = strategy;
        transform(this->discount_strategy.begin(), this->discount_strategy.end(), this->discount_strategy.begin(), ::tolower);
    }

    void checkout() {
        double total = 0;
        double discount = 0;
        for (auto product : productList) {
            total += product->unit_price * product->quantity;
        }

        if (discount_strategy == "no discount") {
            discount = 0;
        }
        else if (discount_strategy == "standard discount") {
            discount = total * .10;
        }
        else if (discount_strategy == "high value discount") {
            if (total > 1000) {
                discount = total * .20;
            }
            else {
                discount = total * .10;
            }
        }
        else if (discount_strategy == "vip discount") {
            discount = total * .30;
        }
        cout << "Order details" << endl;
        for (auto product : productList) {
            cout << product->name << " " << product->unit_price << " " << product->quantity << " " << product->unit_price * product->quantity << endl;
        }
        cout << "Amount: " << total << endl;
        cout << "Discount: " << discount << endl;
        cout << "Net: " << total - discount << endl;
    }
};


int main(int argc, char const *argv[]) {
    auto order = new Order();
    order->add_product(new Product("iPhone", 100000, 1));
    order->add_product(new Product("AirPods", 30000, 2));
    order->add_product(new Product("Macbook", 220000, 1));
    order->set_discount_strategy("standard discount");
    order->checkout();

    return 0;
}
