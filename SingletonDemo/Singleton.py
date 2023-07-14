
class Logger:
  def __init__(self):
    self.log_file = open("app.log", "w")

  def info(self, message: str):
    self.log_file.write(f"INFO: {message}\n")

  def warn(self, message: str):
    self.log_file.write(f"WARN: {message}\n")

  def error(self, message: str):
    self.log_file.write(f"ERROR: {message}\n")

  def close(self):
    self.log_file.close()

log=Logger()
log.warn("This is a warning")
log.close()