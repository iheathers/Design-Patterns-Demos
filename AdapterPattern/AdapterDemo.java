import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

interface Communication {
  void sendMessage(String message);
}

class Email implements Communication {
  String recipient;

  Email(String recipient) {
    this.recipient = recipient;
  }

  public void sendMessage(String Message) {
    System.out.println(MessageFormat.format("Email sent to {0}", recipient));
  }
}

class SMS implements Communication {
  String recipient;

  SMS(String recipient) {
    this.recipient = recipient;
  }

  public void sendMessage(String Message) {
    System.out.println(MessageFormat.format("SMS Message sent to {0}", recipient));
  }
}

class Subscriber {

  String firstName;
  String lastName;
  List<Communication> notifier = new ArrayList<Communication>();

  Subscriber(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public void addNotifier(Communication comm) {
    notifier.add(comm);
  }

  public void notifySubscriber(String message) {
    for (var comm : notifier)
      comm.sendMessage(message);
  }
}

public class AdapterDemo {

  public static void main(String[] args) {
    var list = new ArrayList<Subscriber>();
    var bill = new Subscriber("Bill", "Gates");
    bill.addNotifier(new Email("billg@microsoft.com"));
    list.add(bill);

    var elon = new Subscriber("Elon", "Musk");
    elon.addNotifier(new SMS("1-CALL-ELONMUSK"));
    list.add(elon);

    for (var person : list)
      person.notifySubscriber("Bill due in 3 days");
    System.out.println("Done");
  }
}
