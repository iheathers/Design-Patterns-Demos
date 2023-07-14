enum State {
  open,
  closed,
  error,
}

class Connection {

  State state;

  public Connection() {
    state = State.closed;
  }

  public void Connect() {
    if (state == State.open)
      Console.WriteLine("Connection already open");
    else if (state == State.error)
      Console.WriteLine("Connection is error state");
    state = State.open;
  }

  public void SendMessage(String? message) {
    if (message == null)
      state = State.error;

    if (state == State.error)
      Console.WriteLine("Connection is in error state");
    else if (state == State.open)
      Console.WriteLine("Sending message " + message);
    else
      Console.WriteLine("Connection is not open");
  }

  public void Close() {
    if (state == State.closed)
      Console.WriteLine("Connection is not open");
  }
}

public class StateDemo {
  public static void Main() {
    var connection = new Connection();
    connection.SendMessage("Hello");
    connection.Connect();
    connection.SendMessage("Hello");
    connection.Connect();
    connection.SendMessage(null);
    connection.Close();
  }
}
