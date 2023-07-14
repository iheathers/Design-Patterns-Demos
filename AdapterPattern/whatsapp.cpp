#include <iostream>
#include <string>

using namespace std;

class WhatsApp {
    string receiver;

    public:
    WhatsApp(string receiver) {
        this->receiver = receiver;
    }

    void submit_message(string message) {
        cout << "This message: " << message << " has been sent."  << endl;
    }
};
