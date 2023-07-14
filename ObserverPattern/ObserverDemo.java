import java.text.MessageFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

enum TransType {
  DR,
  CR
}

class Transaction {
  private static long sequence = 100;
  public long txnNumber;
  public LocalDateTime date;
  public double amount;
  public String remarks;
  public TransType type;

  Transaction(double amount, String remarks, TransType type) {
    this.txnNumber = Transaction.sequence++;
    this.date = LocalDateTime.now();
    this.amount = amount;
    this.remarks = remarks;
    this.type = type;
  }

  @Override
  public String toString() {
    return MessageFormat.format("{0}: {1} {2} {3} {4}", txnNumber, date.toLocalDate(), remarks, amount, type);
  }
}

class Account {
  private static long accountSequence = 10;
  private long accountNumber;
  private String holdersName;
  private double balance;
  private List<Transaction> transactions = new ArrayList<>();

  Account(String holdersName, double balance) {
    this.accountNumber = Account.accountSequence++;
    this.holdersName = holdersName;
    this.balance = balance;
  }

  public void withdraw(double amount, String remarks) throws Exception {
    if (amount > this.balance)
      throw new Exception("Insufficient balance");

    this.balance -= amount;

    var txn = new Transaction(amount, remarks, TransType.DR);
    transactions.add(txn);
  }

  public void deposit(double amount, String remarks) {
    this.balance += amount;

    var txn = new Transaction(amount, remarks, TransType.CR);
    transactions.add(txn);
  }

  @Override
  public String toString() {
    return MessageFormat.format("{0}: {1} {2}", accountNumber, holdersName, balance);
  }

  List<Transaction> getTransaction() {
    return this.transactions;
  }
}

public class ObserverDemo {

  public static void main(String[] args) throws Exception {
    var account = new Account("James Gosling", 100_000);
    account.deposit(10000, "salary");
    account.withdraw(1000, "rent");
    System.out.println(account);
    for (var txn : account.getTransaction())
      System.out.println(txn);
  }
}
