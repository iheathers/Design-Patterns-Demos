#include <iostream>
#include <string>
#include <list>

#define interface struct

using namespace std;

interface Communication {
    virtual void send_message(string message) = 0;
};

class Email: public Communication {
    string recipient;

    public:
    Email(string recipient) {
        this->recipient = recipient;
    }

    void send_message(string message) override {
        cout << "Email sent to: " << this->recipient << endl;
    }
};

class SMS : public Communication {
    string recipient;

    public:
    SMS(string recipient) {
        this->recipient = recipient;
    }

    void send_message(string message) override {
        cout << "SMS sent to: " << this->recipient << endl;
    }
};

class Subscriber {
    string first_name;
    string last_name;
    list<Communication*> notifier;

    public:
    Subscriber(string first_name, string last_name) {
        this->first_name = first_name;
        this->last_name = last_name;
    }

    void add_notifier(Communication* comm) {
        notifier.push_back(comm);
    }

    void notify_subscriber (string message) {
        for (auto comm : this->notifier)
            comm->send_message(message);        
    }
};

int main(int argc, char const *argv[])
{
    list<Subscriber*> subscribers;
    
    auto bill = new Subscriber("Bill", "Gates");
    bill->add_notifier(new Email("bill@microsoft.com"));
    
    subscribers.push_back(bill);

    auto elon = new Subscriber("Elon", "Musk");
    elon->add_notifier(new SMS("1-CALL-ELONMUSK"));

    subscribers.push_back(elon);

    for (auto person : subscribers)
        person->notify_subscriber("Bill due in 3 days!");
    
    return 0;
}
