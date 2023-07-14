enum TransType {
    DR,
    CR
}

class Transaction {
    private static sequence = 100;
    public txnNumber: number;
    public date: Date;
    public amount: number;
    public remarks: string;
    public type: TransType

    public constructor(amount: number, remarks: string, type: TransType) {
        this.txnNumber = Transaction.sequence++;
        this.date = new Date();
        this.amount = amount;
        this.remarks = remarks;
        this.type = type;
    }

    public toString() {
        return `${this.txnNumber}: ${this.date.toString()} ${this.remarks} ${this.amount} ${this.type}`;
    }
}

class Account {
    private static accountSequence = 10;
    private accountNumber: number;
    private holdersName: string;
    private balance: number;
    private transactions: Transaction[] = [];

    public constructor(holdersName: string, balance: number) {
        this.accountNumber = Account.accountSequence++;
        this.holdersName = holdersName;
        this.balance = balance;
    }

    public withdraw(amount: number, remarks: string) {
        if (amount > this.balance)
            throw new Error("Insufficient balanace");

        this.balance -= amount;

        let txn = new Transaction(amount, remarks, TransType.DR);
        this.transactions.push(txn);
    }

    public deposit(amount: number, remarks: string) {
        this.balance += amount;

        let txn = new Transaction(amount, remarks, TransType.CR);
        this.transactions.push(txn);
    }

    public toString() {
        return `${this.accountNumber}: ${this.holdersName} ${this.balance}`;
    }

    public getTransaction() {
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
