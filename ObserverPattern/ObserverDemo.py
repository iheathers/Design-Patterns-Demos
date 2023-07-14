from datetime import datetime
from enum import Enum


class TransType(Enum):
    DR = 1
    CR = 2


class Transaction:
    __sequence: int = 100

    def __init__(self, amount: float, remarks: str, type: TransType) -> None:
        self.txn_number: int = Transaction.__sequence
        Transaction.__sequence += 1
        self.date: datetime = datetime.now()
        self.amount: float = amount
        self.remarks: str = remarks
        self.type: TransType = type

    def __str__(self) -> str:
        return f"{self.txn_number}: {self.date.date()} {self.remarks} {self.amount} {self.type.name}"


class Account:
    __account_sequence: int = 10

    def __init__(self, holders_name: str, balance: float) -> None:
        self.__account_number: int = Account.__account_sequence
        Account.__account_sequence += 1
        self.__holders_name: str = holders_name
        self.__balance: float = balance
        self.__transactions: list[Transaction] = []

    def withdraw(self, amount: float, remarks: str) -> None:
        if amount > self.__balance:
            raise Exception("Insufficient balance")

        self.__balance -= amount
        txn: Transaction = Transaction(amount, remarks, TransType.DR)
        self.__transactions.append(txn)

    def deposit(self, amount: float, remarks: str) -> None:
        self.__balance += amount

        txn: Transaction = Transaction(amount, remarks, TransType.CR)
        self.__transactions.append(txn)

    def __str__(self) -> str:
        return f"{self.__account_number}: {self.__holders_name} {self.__balance}"

    def get_transaction(self) -> list[Transaction]:
        return self.__transactions


account = Account("Guido van Rossum", 100_000)
account.deposit(10000, "salary")
account.withdraw(1000, "rent")
print(account)
for txn in account.get_transaction():
    print(txn)
