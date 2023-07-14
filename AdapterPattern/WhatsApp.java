public class WhatsApp {
  String receiver;

  WhatsApp(String receiver) {
    this.receiver = receiver;
  }

  public void submitMessage(String message) {
    System.out.println("This message " + message + " has been sent");
  }
}
