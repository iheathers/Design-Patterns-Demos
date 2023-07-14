class Logger {
  private StreamWriter writer;

  public Logger() {
    writer = new StreamWriter("app.log");
    Console.WriteLine(writer);
  }

  public void info(String message) {
    writer.WriteLine("INFO: " + message);
  }

  public void close() {
    writer.Close();
  }
}

public class Program {
  public static void Main(){
    var logger = new Logger();
    logger.info("This is information");
    logger.close();
  }
}