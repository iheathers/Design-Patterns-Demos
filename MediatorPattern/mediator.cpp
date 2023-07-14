#include <iostream>
#include <string>
#include <map>
#include <algorithm>

using namespace std;

class User {
    int id;
    string name;
    map<int, User *> friends;

    void send_message(string message) {
        cout << name << " got a message: " << message << endl;
    }

    public:
    User(int id, string name) : id(id), name(name) { }

    void add_friend(User *user) {
        friends.insert({ user->id, user });
    }

    void message_all(string message) {
        for (pair<int, User *> entry : friends)
            entry.second->send_message("[ From: " + name + " ] " + message);
    }

    void message_one(int id, string message) {
        if (friends.find(id) != friends.end())
            friends[id]->send_message("[ From: " + name + " ] " + message);
    }
};

int main(int argc, char const *argv[]) {
    auto eric = new User(1, "Eric Gamma");
    auto john = new User(2, "John Vlissides");
    auto ralph = new User(3, "Ralph Johnson");
    auto richard = new User(4, "Richard Helm");

    eric->add_friend(john);
    eric->add_friend(ralph);
    eric->add_friend(richard);

    john->add_friend(eric);
    john->add_friend(ralph);
    john->add_friend(richard);

    ralph->add_friend(eric);
    ralph->add_friend(john);
    ralph->add_friend(richard);

    richard->add_friend(eric);
    richard->add_friend(john);
    richard->add_friend(ralph);

    eric->message_all("Hey everybody!");
    ralph->message_one(1, "Hi Eric!");

    return 0;
}
