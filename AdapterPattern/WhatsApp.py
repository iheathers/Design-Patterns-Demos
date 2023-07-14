class WhatsApp:
    def __init__(self, receiver: str):
        self.receiver: str = receiver

    def submit_message(self, message: str):
        print(f"This message {message} has been sent")
