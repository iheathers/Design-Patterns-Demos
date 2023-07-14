// class Singleton {
//     constructor() {
//       if (Singleton.instance) {
//         return Singleton.instance;
//       }
//       Singleton.instance = this;
  
//       // Your constructor code here
//       this.name = 'Singleton Instance';
//     }
//   }
  
//   // Usage:
//   const instance1 = new Singleton();
//   console.log(instance1.name); // Output: "Singleton Instance"
  
//   const instance2 = new Singleton();
//   console.log(instance2.name); // Output: "Singleton Instance"
  
//   console.log(instance1 === instance2); // Output: true
  

class Singleton {

    counter = 1


    static #instance = new Singleton();

    static getInstance(){
        return Singleton.#instance

        // return this.#instance THIS WORKED AS WELL. NEED TO EXPLORE ABOUT this AGAIN
    }

    getNextCounter(){
        return this.counter++
    }

}

const one = Singleton.getInstance();
console.log(one.getNextCounter())

const two = Singleton.getInstance();
console.log(two.getNextCounter())

const three = Singleton.getInstance();
console.log(three.getNextCounter())