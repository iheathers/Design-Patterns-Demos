#include <iostream>
#include <string>
#include <list>
#include <algorithm> // for find_if, transform functions.

using namespace std;

class Account {
    public:
    int account_number;
    string holders_name;
    double balance;

    Account(int account_number, string holders_name, double balance)
        : account_number(account_number),
        holders_name(holders_name),
        balance(balance) { }
};

class Bank {
    list<Account *> accounts;

    public:
    Bank(Account *account) {
        accounts.push_back(new Account(101, "Mukesh Ambani", 100000000.0));
        accounts.push_back(new Account(102, "Gautam Adani", 200000000.0));
        accounts.push_back(new Account(103, "Anil Ambani", 100000.0));
    }

    Account *get_account(string name) {
        auto find_itr = find_if(accounts.begin(), accounts.end(), [&](const Account *const acc) {
            auto name_lower = name;
            transform(name_lower.begin(), name_lower.end(), name_lower.begin(), ::tolower);

            auto acc_name_lower = acc->holders_name;
            transform(acc_name_lower.begin(), acc_name_lower.end(), acc_name_lower.begin(), ::tolower);

            return name_lower == acc_name_lower;
        });
        return accounts.end() != find_itr ? *find_itr : nullptr;
    }
};

class Rating {
    public:
    string name;
    int rating;

    Rating(string name, int rating) : name(name), rating(rating) { }
};

class CreditRating {
    list<Rating *> ratings;

    public:
    CreditRating() {
        ratings.push_back(new Rating("Mukesh Ambani", 900));
        ratings.push_back(new Rating("Gautam Adani", 750));
        ratings.push_back(new Rating("Anil Ambani", 250));
    }

    bool eligible_for_loan(string name) {
        auto rating_itr = find_if(ratings.begin(), ratings.end(), [&](const Rating *const person) {
            auto name_lower = name;
            transform(name_lower.begin(), name_lower.end(), name_lower.begin(), ::tolower);

            auto rating_name_lower = person->name;
            transform(rating_name_lower.begin(), rating_name_lower.end(), rating_name_lower.begin(), ::tolower);

            return name_lower == rating_name_lower
                && 650 <= person->rating;
        });

        return ratings.end() != rating_itr ? *rating_itr : nullptr;
    }
};

class LoanHistory {
    public:
    string name;
    int loan_amount;
    string paid;

    LoanHistory(string name, int loan_amount, string paid)
        : name(name),
        loan_amount(loan_amount),
        paid(paid) { }
};

class CreditHistory {
    list<LoanHistory *> histories;

    public:
    CreditHistory() {
        histories.push_back(new LoanHistory("Mukesh Ambani", 100000, "paid"));
        histories.push_back(new LoanHistory("Mukesh Ambani", 500000, "ongoing"));
        histories.push_back(new LoanHistory("Gautam Ambani", 10000000, "ongoing"));
        histories.push_back(new LoanHistory("Gautam Ambani", 15000000, "ongoing"));
        histories.push_back(new LoanHistory("Gautam Ambani", 2000000, "paid"));
        histories.push_back(new LoanHistory("Anil Ambani", 5000000, "paid"));
        histories.push_back(new LoanHistory("Anil Ambani", 10000000, "defaulted"));
    }

    bool has_defaulted(string name) {
        auto history_itr = find_if(histories.begin(), histories.end(), [&](const LoanHistory *const history) {
            auto name_lower = name;
            transform(name_lower.begin(), name_lower.end(), name_lower.begin(), ::tolower);

            auto history_name_lower = history->name;
            transform(history_name_lower.begin(), history_name_lower.end(), history_name_lower.begin(), ::tolower);

            auto paid_lower = history->paid;
            transform(paid_lower.begin(), paid_lower.end(), paid_lower.begin(), ::tolower);

            return name_lower == history_name_lower
                && "defaulted" == paid_lower;
        });

        return histories.end() != history_itr ? *history_itr : nullptr;
    }
};

int main(int argc, char const *argv[]) {
    string name = "Anil Ambani";
    double loan_amount = 100000.0;


    Bank *bank = new Bank(nullptr);
    CreditRating *rating = new CreditRating();
    CreditHistory *history = new CreditHistory();

    Account *account = bank->get_account(name);

    bool approved = true;
    if (!account) {
        cout << "Application " << name << " does not have a bank account" << endl;
        approved = false;
    }

    if (!rating->eligible_for_loan(name)) {
        cout << "Application " << name << " is not eligible for loan" << endl;
        approved = false;
    }

    if (history->has_defaulted(name)) {
        cout << "Application " << name << " has defaulted before" << endl;
        approved = false;
    }

    if (account) {
        if (account->balance < loan_amount / 10) {
            cout << "Application " << name << " does not have sufficient funds" << endl;
            approved = false;
        }
    }
    
    string appStr = approved ? " " : " not ";
    cout << "Loan of amount " << loan_amount << " of " << name << " has" << appStr << "been approved" << endl;

    return 0;
}
