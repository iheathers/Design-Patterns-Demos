enum TransType
{
    DR,
    CR
}

class Transaction
{
    private static long sequence = 100;
    public long txnNumber;
    public DateTime date;
    public double amount;
    public string remarks;
    public TransType type;

    public Transaction(double amount, string remarks, TransType type)
    {
        this.txnNumber = Transaction.sequence++;
        this.date = DateTime.Now;
        this.amount = amount;
        this.remarks = remarks;
        this.type = type;
    }

    public override string ToString() =>
        $"{txnNumber}: {date.Date:yyyy-MM-dd} {remarks} {amount} {type}";
}

class Account
{
    private static long accountSequence = 10;
    private long accountNumber;
    private string holdersName;
    private double balance;
    private List<Transaction> transactions = new();

    public Account(string holdersName, double balance)
    {
        this.accountNumber = Account.accountSequence++;
        this.holdersName = holdersName;
        this.balance = balance;
    }

    public void Withdraw(double amount, string remarks)
    {
        if (amount > this.balance)
            throw new Exception("Insufficient balance");

        this.balance -= amount;

        var txn = new Transaction (amount, remarks, TransType.DR);
        transactions.Add(txn);
    }

    public void Deposit(double amount, string remarks)
    {
        this.balance += amount;

        var txn = new Transaction(amount, remarks, TransType.CR);
        transactions.Add(txn);
    }


    public override string ToString() =>
        $"{accountNumber}: {holdersName} {balance}";

    public List<Transaction> GetTransaction()
    {
        return this.transactions;
    }
}

public class ObserverDemo
{
    public static void Main(string[] args)
    {
        Account account = new("Anders Hejlsberg", 100_000);
        account.Deposit(10000, "salary");
        account.Withdraw(1000, "rent");
        System.Console.WriteLine(account);
        foreach (var txn in account.GetTransaction())
            System.Console.WriteLine(txn);
    }
}
