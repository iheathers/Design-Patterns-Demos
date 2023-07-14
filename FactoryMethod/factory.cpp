#include <iostream>
#include <string>

using namespace std;

class Product {
    protected:
    string description = "";

    public:
    virtual void make_computer(int cpu, int ram, int storage, int display) = 0;

    string get_info() {
        return this->description;
    }
};

class PC : public Product {
    public:
    void make_computer(int cpu, int ram, int storage, int display) override {
        this->description = "DELL PC: CPU " + to_string(cpu)
            + ", RAM " + to_string(ram)
            + ", STORAGE " + to_string(storage)
            + ", DISPLAY " + to_string(display);
    }
};

class Laptop : public Product {
    public:
    void make_computer(int cpu, int ram, int storage, int display) override {
        this->description = "DELL Laptop: CPU " + to_string(cpu)
            + ", RAM " + to_string(ram)
            + ", STORAGE " + to_string(storage)
            + ", DISPLAY " + to_string(display);
    }
};

class Order {
    public:
    Product *place_order(char type, int cpu, int ram, int storage, int display) {
        Product *product = nullptr;
        switch (type) {
            case 'P':
                product = new PC();
                product->make_computer(cpu, ram, storage, display);
                break;
            case 'L':
                product = new Laptop();
                product->make_computer(cpu, ram, storage, display);
                break;
        }
        return product;
    }
};

int main() {
    auto order = new Order();
    auto computer = order->place_order('P', 4, 16, 512, 16);
    cout << computer->get_info() << endl;
    return 0;
}
