#include <iostream>
#include <string>
#include <list>

using namespace std;

class Developer {
    public:
    string name;
    double salary;

    Developer(string name, double salary) {
        this->name = name;
        this->salary = salary;
    }
};

class Manager {
    public:
    string name;
    double salary;

    Manager(string name, double salary) {
        this->name = name;
        this->salary = salary;
    }
};

int main(int argc, char const *argv[])
{
    list<Developer*> devList;
    list<Manager*> mgrList;

    devList.push_back(new Developer("Brendan Eich", 100000.0));
    devList.push_back(new Developer("James Gosling", 200000.0));
    devList.push_back(new Developer("Guido van Rossum", 250000.0));
    devList.push_back(new Developer("Anders Hejlsberg", 350000.0));

    mgrList.push_back(new Manager("Dennis Ritchie", 500000.0));
    mgrList.push_back(new Manager("Alan Kay", 500000.0));

    double sum = 0.0;
    for (auto dev : devList)
        sum += dev->salary;
    
    for (auto mgr: mgrList)
        sum+= mgr->salary;

    printf("The total company salary is %.2f", sum);
    return 0;
}
