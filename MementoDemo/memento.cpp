#include <iostream>
#include <string>

using namespace std;

class Location {
    private:
    static int location_sequence;
    int sequence = Location::location_sequence++;
    string city;

    public:
    void move_to(string city) {
        this->city = city;
    }

    void print() {
        cout << sequence << ": " << city << endl;
    }
};
int Location::location_sequence = 1;

int main(int argc, char const *argv[]) {
    auto location = new Location();
    location->move_to("Kolkata");
    location->print();
    location->move_to("Indore");
    location->print();
    location->move_to("Mumbai");
    location->print();
    return 0;
}
