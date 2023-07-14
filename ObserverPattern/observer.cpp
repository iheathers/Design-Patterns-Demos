#include <iostream>
#include <string>
#include <list>
#include <ctime>
#include <iomanip>
#include <sstream>

using namespace std;

enum TransType {
    DR,
    CR
};
const string TransTypeStr[] = { "Debit", "Credit" };

class Transaction {
    private:
    static long sequence;
    public:
    long txn_number;
    time_t date;
    double amount;
    string remarks;
    TransType type;

    public:
    Transaction(double amount, string remarks, TransType type) {
        this->txn_number = Transaction::sequence++;
        this->date = time(0);
        this->amount = amount;
        this->remarks = remarks;
        this->type = type;
    }

    string to_string() {
        return std::to_string(this->txn_number)
            + ": Rs. " + std::to_string(this->amount)
            + " - " + TransTypeStr[this->type]
            + ", " + this->remarks
            + " @ " + ctime(&(this->date));
    }
};
long Transaction::sequence = 100;

class Account {
    private:
    static long account_sequence;
    long account_number;
    string holders_name;
    double balance;
    list<Transaction *> transactions;

    public:

    Account(string holders_name, double balance) {
        this->account_number = Account::account_sequence++;
        this->holders_name = holders_name;
        this->balance = balance;
    }

    void withdraw(double amount, string remarks) {
        if (amount > this->balance)
            throw "Insufficient balance";

        this->balance -= amount;

        auto txn = new Transaction(amount, remarks, TransType::DR);
        transactions.push_back(txn);
    }

    void deposit(double amount, string remarks) {
        this->balance += amount;

        auto txn = new Transaction(amount, remarks, TransType::CR);
        transactions.push_back(txn);
    }

    string to_string() {
        return std::to_string(this->account_number)
            + ": " + this->holders_name
            + " " + std::to_string(this->balance);
    }

    list<Transaction *> getTransaction() {
        return this->transactions;
    }
};

long Account::account_sequence = 10;

int main(int argc, char const *argv[]) {
    auto account = new Account("Bjarne Stroustrup", 100000.00);
    account->deposit(10000, "salary");
    account->withdraw(1000, "rent");
    cout << account->to_string() << endl;
    for (auto txn : account->getTransaction())
        cout << txn->to_string() << endl;
}
