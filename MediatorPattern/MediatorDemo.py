from __future__ import annotations


class User:
    def __init__(self, id: int, name: str) -> None:
        self.id: int = id
        self.name: str = name
        self.user_list: dict[int, User] = {}

    def add_friend(self, friend: User) -> None:
        self.user_list.update({friend.id: friend})

    def message_all(self, message: str) -> None:
        for user in self.user_list.values():
            user.send_message(f"From [{self.name}]: {message}")

    def message_one(self, id: int, message: str)  -> None:
        user = self.user_list.get(id)
        if user is not None:
            user.send_message(f"From [{self.name}] {message}")

    def send_message(self, msg: str) -> None:
        print(f"[{self.name}] got a message {msg}")


eric = User(1, "Eric Gamma")
john = User(2, "John Vlissides")
ralph = User(3, "Ralph Johnson")
richard = User(4, "Richard Helm")

eric.add_friend(john)
eric.add_friend(ralph)
eric.add_friend(richard)

john.add_friend(eric)
john.add_friend(ralph)
john.add_friend(richard)

ralph.add_friend(eric)
ralph.add_friend(john)
ralph.add_friend(richard)

richard.add_friend(eric)
richard.add_friend(john)
richard.add_friend(ralph)

eric.message_all("Hey everybody")
ralph.message_one(1, "Hi Eric")
