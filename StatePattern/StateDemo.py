from enum import Enum


class State(Enum):
    open = 1
    closed = 2
    error = 3


class Connection:
    def __init__(self) -> None:
        self.state: State = State.closed

    def connect(self) -> None:
        if self.state == State.open:
            print("Connection already open")
        elif self.state == State.error:
            print("Connection is error state")
        self.state = State.open

    def send_message(self, message: str | None) -> None:
        if message is None:
            self.state = State.error

        if self.state == State.error:
            print("Connection is in error state")
        elif self.state == State.open:
            print(f"Sending message {message}")
        else:
            print("Connection is not open")

    def close(self) -> None:
        if self.state == State.closed:
            print("Connection is not open")


connection = Connection()
connection.send_message("Hello")
connection.connect()
connection.send_message("Hello")
connection.connect()
connection.send_message(None)
connection.close()
