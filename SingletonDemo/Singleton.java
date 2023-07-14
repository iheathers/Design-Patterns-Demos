import java.io.FileWriter;
import java.io.PrintWriter;

class Logger {
  private PrintWriter writer;

  public Logger() throws Exception {
    FileWriter fw = new FileWriter("app.log");
    writer = new PrintWriter(fw);
  }

  public void info(String message) {
    writer.write("INFO: " + message);
  }

  public void close() {
    writer.close();
  }
}

public class Singleton {
  public static void main(String[] args) throws Exception {
    var logger = new Logger();
    logger.info("This is information");
    logger.close();
  }
}