from abc import ABC, abstractmethod


class Communication(ABC):

    @abstractmethod
    def send_message(self, message: str):
        pass

class Email(Communication):
    def __init__(self, recipient: str):
        super().__init__()
        self.recipient: str = recipient

    def send_message(self, message: str):
        print(f"Email sent to {self.recipient}")

class SMS(Communication):
    def __init__(self, recipient: str):
        super().__init__()
        self.recipient: str = recipient

    def send_message(self, message: str):
        print(f"SMS sent to {self.recipient}")

class Subscriber:
    def __init__(self, first_name: str, last_name: str):
        self.first_name: str = first_name
        self.last_name: str = first_name
        self.notifier: list[Communication] = []

    def add_notifier(self, comm: Communication):
        self.notifier.append(comm)

    def notify_subscriber(self, message: str):
        for comm in self.notifier:
            comm.send_message(message)

person_list: list[Subscriber] = []
bill: Subscriber = Subscriber("Bill", "Gates")
bill.add_notifier(Email("billg@microsoft.com"))
person_list.append(bill)

elon: Subscriber = Subscriber("Elon", "Musk")
elon.add_notifier(SMS("1-CALL-ELONMUSK"))
person_list.append(elon)

for person in person_list:
    person.notify_subscriber("Bill due in 3 days")
