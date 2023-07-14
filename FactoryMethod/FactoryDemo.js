class Computer {
  description;

  getInfo(){
    return this.description;
  }
}

class PC extends Computer {
  makeComputer(cpu, ram, storage, display){
    this.description = `Dell PC: CPU ${cpu}, RAM ${ram}, Storage ${storage}, Display ${display}`
  }
}

class Laptop extends Computer {
  makeComputer(cpu, ram, storage, display){
    this.description = `Dell Laptop: CPU ${cpu}, RAM ${ram}, Storage ${storage}, Display ${display}`
  }
}

class OrderSystem {
  productList = []

  placeOrder(type, cpu, ram, storage, display){
    const product = this.create(type, cpu, ram, storage, display);

    if (product)
      this.productList.push(product)
    
  }


  listOrder(){
    this.productList.forEach(product => console.log(product.getInfo()))
  }


  create(type, cpu, ram, storage, display){}

}

class Order extends OrderSystem{
  creatorList = {
    'pc': () => new PC(),
    'laptop': () => new Laptop()
  }

  create(type, cpu, ram, storage, display){
    const creator = this.creatorList[type.toLowerCase()]?.();

    if (creator)
      creator.makeComputer(cpu, ram, storage, display)
    

    return creator
  }
}

const order = new Order();

pcConfig = {
  type: "PC",
  cpu: 4, 
  ram: 14, 
  storage: 334, 
  display: 15
}

order.placeOrder("PC", 4, 14, 334, 15);
order.placeOrder("Laptop", 1, 4, 512, 14)
order.listOrder()