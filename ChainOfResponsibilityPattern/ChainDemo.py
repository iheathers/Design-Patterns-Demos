from __future__ import annotations


class President:
    def __init__(self, id: int, name: str) -> None:
        self.id: int = id
        self.name: str = name

    def approve(self, emp: Employee, amount: float) -> None:
        print(f"{self.name} approves {emp.name}'s expense of {amount}")


class VicePresident:
    def __init__(self, id: int, name: str) -> None:
        self.id: int = id
        self.name: str = name

    def approve(self, emp: Employee, amount: float) -> None:
        print(f"{self.name} has approved {emp.name}'s expense of {amount}")


class Manager:
    def __init__(self, id: int, name: str) -> None:
        self.id: int = id
        self.name: str = name

    def approve(self, emp: Employee, amount: float) -> None:
        print(f"Manager {self.name} allows {emp.name}'s expense of {amount}")


class Employee:
    def __init__(self, id: int, name: str) -> None:
        self.id: int = id
        self.name: str = name


ramesh = Employee(7, "Ramesh")
suresh = Employee(6, "Suresh")
ram = Employee(5, "Ram")
shyam = Employee(4, "Shyam")
khichai = Manager(3, "Khichai")
sichai = VicePresident(3, "Sichai")
pichai = President(1, "Pichai")

expenses: dict[Employee, float] = {
    ramesh: 1000.50,
    suresh: 10000.75,
    ram: 2000.0,
    shyam: 50000.00
}

for emp, amount in expenses.items():
    if amount < 2000:
        khichai.approve(emp, amount)
    elif amount < 20000:
        sichai.approve(emp, amount)
    else:
        pichai.approve(emp, amount)
