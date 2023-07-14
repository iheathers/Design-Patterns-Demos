class Memento {
  constructor() {
    this.state = [];
  }
}

class Location {
  static locationSequence = 1;
  #sequence;
  //   #sequence = Location.#locationSequence++;
  #city;

  constructor() {
    this.#city = "";
  }

  print() {
    console.log(`${this.#sequence}: ${this.#city}`);
  }

  moveTo(city) {
    this.#city = city;
    this.#sequence = Location.locationSequence++;
  }

  createMemento() {
    console.log("Create memento");
    const memento = new Memento();

    memento.state[0] = this.#sequence;
    memento.state[1] = this.#city;

    return memento;
  }

  getMemento(memento) {
    this.#sequence = memento.state[0];
    this.#city = memento.state[1];
  }
}

const careTaker = [];

let location = new Location();
location.moveTo("Kolkata");
location.print();
const memento1 = location.createMemento();
careTaker.push(memento1);

location.moveTo("Indore");
location.print();
location.createMemento();
const memento2 = location.createMemento();
careTaker.push(memento2);

location.moveTo("Mumbai");
location.print();
location.createMemento();
const memento3 = location.createMemento();
careTaker.push(memento3);

stack.pop(location.getMemento());
location.print();

stack.pop(location.getMemento());
location.print();
