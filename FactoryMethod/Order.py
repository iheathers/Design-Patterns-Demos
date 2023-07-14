from abc import abstractmethod
class Computer:
  def __init__(self):
    self.description = ""

  @abstractmethod
  def make_product(self, cpu : int, ram: int, storage: int, display:int) -> None :
    pass

  def get_info(self) -> str:
    return self.description

class PC(Computer):
  def make_product(self, cpu : int, ram: int, storage: int, display:int) -> None :
    self.description = f"DELL PC: CPU {cpu}, RAM{ram}, STORAGE: {storage}, DISPLAY {display}"

class Laptop(Computer):
  def make_product(self, cpu : int, ram: int, storage: int, display:int) -> None :
    self.description = f"DELL Laptop: CPU {cpu}, RAM{ram}, STORAGE: {storage}, DISPLAY {display}"
  
class Order:
  def place_order(self, type: str, cpu : int, ram: int, storage: int, display:int) -> Computer :
    product : Computer

    if type == "PC":
      product = PC()
      product.make_product(cpu, ram, storage, display)
    elif type == "Laptop":
      product = Laptop()
      product.make_product(cpu, ram, storage, display)
    return product

order = Order()
computer = order.place_order("PC", 4, 16, 512, 16)
print(computer.get_info())