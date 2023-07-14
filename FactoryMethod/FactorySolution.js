// class Computer {
//     description;
//     getInfo() {
//         return this.description;
//     }
// }

// class PC extends Computer {
//     makeComputer(cpu, ram, storage, display) {
//         this.description = `Dell PC: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
//     }
// }

// class Laptop extends Computer {
//     makeComputer(cpu, ram, storage, display) {
//         this.description = `Dell Laptop: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
//     }
// }

// class Order {

//     placeOrder(type, cpu, ram, storage, display) {
//         let product;

//         switch (type) {
//             case "PC":
//                 product = new PC();
//                 product.makeComputer(cpu, ram, storage, display);
//                 return product;
//             case "Laptop":
//                 product = new Laptop();
//                 product.makeComputer(cpu, ram, storage, display);
//                 return product;
//         }
//         return null;
//     }
// }

// const order = new Order();
// computer = order.placeOrder("PC", 4, 16, 512, 16);
// console.log(computer.getInfo());


// // 

// Abstract Creator
class OrderSystem {
    create() {
        throw new Error("create() method must be implemented.");
    }

    placeOrder(type, cpu, ram, storage, display) {
        const product = this.create();
        product.makeComputer(cpu, ram, storage, display);
        return product;
    }

    listOrder() {
        // Implement code to list orders
    }
}

// Concrete Creator
class Order extends OrderSystem {
    create() {
        return new PC();
    }
}

class Computer {
    description;

    getInfo() {
        return this.description;
    }
}

class PC extends Computer {
    makeComputer(cpu, ram, storage, display) {
        this.description = `Dell PC: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
    }
}

class Laptop extends Computer {
    makeComputer(cpu, ram, storage, display) {
        this.description = `Dell Laptop: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
    }
}

const order = new Order();
const computer = order.placeOrder("PC", 4, 16, 512, 16);
console.log(computer.getInfo());
