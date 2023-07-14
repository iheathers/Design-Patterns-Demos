const TransType = {
    DR: 0,
    CR: 1
}

class Transaction {
    static sequence = 100;
    txnNumber;
    date;
    amount;
    remarks;
    type

    constructor(amount, remarks, type) {
        this.txnNumber = Transaction.sequence++;
        this.date = new Date();
        this.amount = amount;
        this.remarks = remarks;
        this.type = type;
    }

    toString() {
        return `${this.txnNumber}: ${this.date.toString()} ${this.remarks} ${this.amount} ${this.type}`;
    }
}

class Account {
    static accountSequence = 10;
    accountNumber;
    holdersName;
    balance;
    transactions = [];

    constructor(holdersName, balance) {
        this.accountNumber = Account.accountSequence++;
        this.holdersName = holdersName;
        this.balance = balance;
    }

    withdraw(amount, remarks) {
        if (amount > this.balance)
            throw new Error("Insufficient balanace");

        this.balance -= amount;

        let txn = new Transaction(amount, remarks, TransType.DR);
        this.transactions.push(txn);
    }

    deposit(amount, remarks) {
        this.balance += amount;

        let txn = new Transaction(amount, remarks, TransType.CR);
        this.transactions.push(txn);
    }

    toString() {
        return `${this.accountNumber}: ${this.holdersName} ${this.balance}`;
    }

    getTransaction() {
        return this.transactions;
    }
}

let account = new Account("Brendan Eich", 100_000);
account.deposit(10000, "salary");
account.withdraw(1000, "rent");
console.log(`${account}`);

for (let txn of account.getTransaction()) {
    console.log(`${txn}`);
}
