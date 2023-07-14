
class Account:
    def __init__(self, account_number: int, holders_name: str, balance: float) -> None:
        self.account_number: int = account_number
        self.holders_name: str = holders_name
        self.balance: float = balance


class Bank:
    def __init__(self, account: Account | None = None) -> None:
        self.accounts: list[Account] = []
        self.accounts.append(Account(101, "Mukesh Ambani", 100_000_000))
        self.accounts.append(Account(102, "Gautam Adani", 200_000_000))
        self.accounts.append(Account(103, "Anil Ambani", 100_000))

    def get_account(self, name: str) -> Account | None:
        search_name: str = name.strip().lower()
        found = next(filter(lambda account: account.holders_name.strip().lower()
                            == search_name, self.accounts), None)
        return found


class Rating:
    def __init__(self, name: str, rating: int) -> None:
        self.name: str = name
        self.rating: int = rating


class CreditRating:
    def __init__(self) -> None:
        self.ratings: list[Rating] = []
        self.ratings.append(Rating("Mukesh Ambani", 900))
        self.ratings.append(Rating("Gautam Adani", 750))
        self.ratings.append(Rating("Anil Ambani", 250))

    def eligible_for_loan(self, name: str) -> bool:
        search_name = name.strip().lower()
        person = next(
            filter(lambda rating: rating.name.strip().lower() == search_name, self.ratings), None)
        if person is not None:
            return person.rating >= 650
        return False


class LoanHistory:
    def __init__(self, name: str, loan_amount: int, paid: str) -> None:
        self.name: str = name
        self.loan_amount: int = loan_amount
        self.paid: str = paid


class CreditHistory:
    def __init__(self) -> None:
        self.history: list[LoanHistory] = []
        self.history.append(LoanHistory("Mukesh Ambani", 100_000, "paid"))
        self.history.append(LoanHistory("Mukesh Ambani", 500_000, "ongoing"))
        self.history.append(LoanHistory(
            "Gautam Ambani", 10_000_000, "ongoing"))
        self.history.append(LoanHistory(
            "Gautam Ambani", 15_000_000, "ongoing"))
        self.history.append(LoanHistory("Gautam Ambani", 2_000_000, "paid"))
        self.history.append(LoanHistory("Anil Ambani", 5_000_000, "paid"))
        self.history.append(LoanHistory(
            "Anil Ambani", 10_000_000, "defaulted"))

    def has_defaulted(self, name: str) -> bool:
        search_name = name.strip().lower()
        result = next(filter(lambda history:
                             history.name.strip().lower() == search_name
                             and history.paid.strip().lower() == "defaulted", self.history), None)
        return result is not None


name = "Anil Ambani"
amount = 100_000
approved = True

bank = Bank()
rating = CreditRating()
history = CreditHistory()
account: Account | None = bank.get_account(name)
if not bank.get_account(name):
    print(f"Application {name} does not have a bank account")
    approved = False
if approved and not rating.eligible_for_loan(name):
    print(f"Application {name} is not eligible for loan")
    approved = False
if approved and history.has_defaulted(name):
    print(f"Application {name} has defaulted before")
    approved = False
if approved and account is not None:
    if account.balance < amount / 10:
        print(f"Application {name} does not have sufficient funds")
        approved = False

print(
    f"Loan of amount {amount} of {name} has{ ' ' if approved else ' not '}been approved")
