class WhatsApp {
   receiver;

  constructor(receiver) {
    this.receiver = receiver;
  }

  submitMessage(message) {
    console.log("This message " + message + " has been sent");
  }
}
