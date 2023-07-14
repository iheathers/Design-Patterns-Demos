#include <iostream>
#include <string>
#include <list>
#include <tuple>

using namespace std;

struct Employee {
    int id;
    string name;

    Employee(int id, string name)
        : id(id), name(name) { }
};

class Manager {
    public:
    int id;
    string name;

    Manager(int id, string name)
        : id(id), name(name) { }

    void approve(Employee *emp, double amount) {
        cout << "Manager " << name << " approves " << emp->name << "'s expenses of " << amount << endl;
    }
};

class VicePresident {
    public:
    int id;
    string name;

    VicePresident(int id, string name)
        : id(id), name(name) { }

    void approve(Employee *emp, double amount) {
        cout << "VicePresident " << name << " approves " << emp->name << "'s expenses of " << amount << endl;
    }
};

class President {
    public:
    int id;
    string name;

    President(int id, string name)
        : id(id), name(name) { }

    void approve(Employee *emp, double amount) {
        cout << "President " << name << " approves " << emp->name << "'s expenses of " << amount << endl;
    }

};

int main(int argc, char const *argv[]) {

    auto ramesh = new Employee(7, "Ramesh");
    auto suresh = new Employee(6, "Suresh");
    auto ram = new Employee(5, "Ram");
    auto shyam = new Employee(4, "Shyam");
    auto khichai = new Manager(3, "Khichai");
    auto sichai = new VicePresident(3, "Sichai");
    auto pichai = new President(1, "Pichai");

    list<tuple<Employee *, double>> expenses{
        { ramesh, 1000.50 },
        { suresh, 10000.75 },
        { ram, 2000.00 },
        { shyam, 50000.00 }
    };

    for (auto entry : expenses) {
        auto emp = get<0>(entry);
        auto amount = get<1>(entry);

        if (2000 > amount)
            khichai->approve(emp, amount);
        else if (20000 > amount)
            sichai->approve(emp, amount);
        else
            pichai->approve(emp, amount);
    }

    return 0;
}
