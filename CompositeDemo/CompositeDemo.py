class Developer:
    def __init__(self, name: str, salary: float) -> None:
        self.name: str = name
        self.salary: float = salary

class Manager:
    def __init__(self, name: str, salary: float) -> None:
        self.name: str = name
        self.salary: float = salary

dev_list: list[Developer] = []
mgr_list: list[Manager] = []

dev_list.append(Developer("Brendan Eich", 100_000))
dev_list.append(Developer("James Gosling", 200_000))
dev_list.append(Developer("Guido van Rossum", 250_000))
dev_list.append(Developer("Anders Hejlsberg", 350_000))
mgr_list.append(Manager("Dennis Ritchie", 500_000))
mgr_list.append(Manager("Alan Kay", 500_000))

sum: float = 0
for dev in dev_list:
    sum += dev.salary

for mgr in mgr_list:
    sum += mgr.salary

print(f"The total company salary is {sum}")
