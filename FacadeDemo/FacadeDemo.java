import java.util.List;
import java.text.MessageFormat;
import java.util.ArrayList;

class Account {
    int accountNumber;
    String holdersName;
    double balance;

    public Account(int accountNumber, String holdersName, double balance) {
        this.accountNumber = accountNumber;
        this.holdersName = holdersName;
        this.balance = balance;
    }
}

class Bank {
    List<Account> accounts = new ArrayList<>();

    public Bank(Account account) {
        accounts.add(new Account(101, "Mukesh Ambani", 100_000_000));
        accounts.add(new Account(102, "Gautam Adani", 200_000_000));
        accounts.add(new Account(103, "Anil Ambani", 100_000));
    }

    public Account geAccount(String name) {
        String search_name = name.trim().toLowerCase();
        Account found = accounts
                .stream()
                .filter(account -> account.holdersName.trim().toLowerCase().equals(search_name))
                .findFirst()
                .orElse(null);

        return found;
    }
}

class Rating {
    String name;
    int rating;

    public Rating(String name, int rating) {
        this.name = name;
        this.rating = rating;
    }
}

class CreditRating {
    List<Rating> ratings = new ArrayList<>();

    public CreditRating() {
        ratings.add(new Rating("Mukesh Ambani", 900));
        ratings.add(new Rating("Gautam Adani", 750));
        ratings.add(new Rating("Anil Ambani", 250));
    }

    public boolean eligibleForLoan(String name) {
        String search_name = name.trim();
        Rating person = ratings
                .stream()
                .filter(rating -> rating.name.trim().equalsIgnoreCase(search_name))
                .findFirst()
                .orElse(null);
        if (null != person)
            return person.rating >= 650;
        return false;
    }
}

class LoanHistory {
    String name;
    int loanAmount;
    String paid;

    public LoanHistory(String name, int loanAmount, String paid) {
        this.name = name;
        this.loanAmount = loanAmount;
        this.paid = paid;
    }
}

class CreditHistory {
    List<LoanHistory> history = new ArrayList<>();

    public CreditHistory() {
        history.add(new LoanHistory("Mukesh Ambani", 100_000, "paid"));
        history.add(new LoanHistory("Mukesh Ambani", 500_000, "ongoing"));
        history.add(new LoanHistory("Gautam Ambani", 10_000_000, "ongoing"));
        history.add(new LoanHistory("Gautam Ambani", 15_000_000, "ongoing"));
        history.add(new LoanHistory("Gautam Ambani", 2_000_000, "paid"));
        history.add(new LoanHistory("Anil Ambani", 5_000_000, "paid"));
        history.add(new LoanHistory("Anil Ambani", 10_000_000, "defaulted"));
    }

    public boolean hasDefaulted(String name) {
        String search_name = name.trim();
        LoanHistory result = history
                .stream()
                .filter(his -> his.name.trim().equalsIgnoreCase(search_name)
                        && his.paid.equalsIgnoreCase("defaulted"))
                .findFirst()
                .orElse(null);
        return null != result;
    }
}

public class FacadeDemo {
    public static void main(String[] args) {
        String name = "Mukesh Ambani";
        double loanAmount = 100_000;

        Bank bank = new Bank(null);
        CreditRating rating = new CreditRating();
        CreditHistory history = new CreditHistory();
        Account account = bank.geAccount(name);

        boolean approved = true;
        if (null == account) {
            System.err.println(MessageFormat.format("Application {0} does not have a bank account", name));
            approved = false;
        }

        if (approved && !rating.eligibleForLoan(name)) {
            System.err.println(MessageFormat.format("Application {0} is not eligible for loan", name));
            approved = false;
        }

        if (approved && history.hasDefaulted(name)) {
            System.err.println(MessageFormat.format("Application {0} has defaulted before", name));
            approved = false;
        }

        if (approved && null != account) {
            if (account.balance < loanAmount / 10) {
                System.err.println(MessageFormat.format("Application {0} does not have sufficient funds", name));
                approved = false;
            }
        }
        String appStr = approved ? " " : " not ";
        System.out.println(
                MessageFormat.format("Loan of amount {0} of {1} has{2}been approved", loanAmount, name, appStr));
    }
}
