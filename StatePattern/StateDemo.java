// enum State {
//   open,
//   closed,
//   error,
// }

interface State {
  State open();

  State close();

  State sendMessage(String message);

}

class ClosedState implements State {

  @Override
  public State open() {
    System.out.println("The state is opened");
    return new OpenState();
  }

  @Override
  public State close() {
    return this;
  }

  @Override
  public State sendMessage(String message) {
    System.out.println("Cannot send message. Connection is closed");
    return this;
  }

}

class OpenState implements State {

  @Override
  public State open() {
    System.out.println("Connnection is already open.");
    return this;
  }

  @Override
  public State close() {
    System.out.println("Connection will be closed.");
    return new ClosedState();
  }

  @Override
  public State sendMessage(String message) {
    System.out.println("Message is sent" + message);
    return this;
  }

}

class ErrorState implements State {

  @Override
  public State open() {
    System.out.println("Connection cannot be opened");
    return this;
  }

  @Override
  public State close() {
    System.out.println("Connection is closed");
    return new ClosedState();
  }

  @Override
  public State sendMessage(String message) {
    System.out.println("Cannot send message");
    return this;
  }

}

class Connection {

  State state;

  Connection() {
    // state = State.closed;
    state = new ClosedState();
  }

  void sendMessage(String message) {
    state = state.sendMessage(message);
  }

  void open() {
    state = state.open();
  }

  void close() {
    state = state.close();
  }

}

public class StateDemo {
  public static void main(String[] args) {
    var connection = new Connection();
    connection.sendMessage("Hello");
    connection.open();
    connection.sendMessage("Hello");
    connection.open();
    connection.sendMessage(null);
    connection.close();
  }
}
