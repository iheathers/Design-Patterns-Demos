import java.text.MessageFormat;
import java.util.HashMap;
import java.util.Map;

import javax.print.attribute.standard.Media;

class Mediator {
  Map<Integer, User> userList = new HashMap<>();

  public void addFriend(User friend) {
    userList.put(friend.id, friend);
  }

  public void messageAll(String message) {
    for (var user : userList.entrySet()) {
      // System.out.println(user.getValue().name);
      user.getValue().sendMessage(MessageFormat.format("From [{0}]: {1}", user.getValue().name, message));
    }
  }

  public void messageOne(int id, String message) {
    var user = userList.get(id);
    if (user != null)
      user.sendMessage(MessageFormat.format("From [{0}] {1}", user.name, message));
  }

}

class User {
  int id;
  String name;
  private Mediator mediator;

  public User(int id, String name, Mediator mediator) {
    this.id = id;
    this.name = name;
    this.mediator = mediator;
    this.mediator.addFriend(this);

  }

  public void messageAll(String message) {
    this.mediator.messageAll(message);

  }

  public void messageOne(int id, String message) {
    this.mediator.messageOne(id, message);
  }

  void sendMessage(String msg) {
    System.out.println(MessageFormat.format("[{0}] got a message {1}", this.name, msg));
  }

}

public class MediatorDemo {

  public static void main(String[] args) {
    var mediator = new Mediator();

    var eric = new User(1, "Eric Gamma", mediator);
    var john = new User(2, "John Vlissides", mediator);
    var ralph = new User(3, "Ralph Johnson", mediator);
    var richard = new User(4, "Richard Helm", mediator);

    // eric.addFriend(john);
    // eric.addFriend(ralph);
    // eric.addFriend(richard);

    // john.addFriend(eric);
    // john.addFriend(ralph);
    // john.addFriend(richard);

    // ralph.addFriend(eric);
    // ralph.addFriend(john);
    // ralph.addFriend(richard);

    // richard.addFriend(eric);
    // richard.addFriend(john);
    // richard.addFriend(ralph);

    eric.messageAll("Hey everybody");
    ralph.messageOne(1, "Hi Eric");
  }
}
