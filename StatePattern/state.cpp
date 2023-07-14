#include <iostream>
#include <string>

using namespace std;

enum State {
    OPEN,
    CLOSED,
    ERROR,
};

#define S_OPN State::OPEN
#define S_CLS State::CLOSED
#define S_ERR State::ERROR

class Connection {
    State state;

    public:
    Connection() : state(S_CLS) { }

    void connect() {
        if (S_OPN == state)
            cout << "Connection already open" << endl;
        else if (S_ERR == state)
            cout << "Connection is in error state" << endl;

        state = S_OPN;
    }

    void send_message(string message) {
        if (message.empty())
            state = S_ERR;

        if (S_ERR == state)
            cout << "Connection is in error state" << endl;
        else if (S_OPN == state)
            cout << "Sending message: " << message << endl;
        else
            cout << "Connection is not open" << endl;
    }

    void close() {
        if (S_CLS == state) {
            cout << "Connection is not open" << endl;
        }
    }
};

int main(int argc, char const *argv[]) {
    auto connection = new Connection();

    connection->send_message("Hello");
    connection->connect();

    connection->send_message("Hello");
    connection->connect();

    connection->send_message("");
    connection->close();

    return 0;
}
