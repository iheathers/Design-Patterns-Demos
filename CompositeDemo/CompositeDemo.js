class CEO {
  constructor(name, salary, mgrList) {
    this.name = name;
    this.salary = salary;
    this.mgrList = mgrList;
  }

  //   addEmployee(){

  //   }

  calculate() {
    let total_salary = this.salary;

    for (const mgr of this.mgrList) {
      total_salary += mgr.calculate();
    }

    return total_salary;
  }
}

class Manager {
  constructor(name, salary, devList) {
    this.name = name;
    this.salary = salary;
    this.devList = devList;
  }

  //   addEmployee(){

  //   }

  calculate() {
    let total_salary = this.salary;

    for (const dev of this.devList) {
      total_salary += dev.calculate();
    }

    return total_salary;
  }
}

class Developer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  //   Developer won't have addEmployee method. Is that right?

  calculate() {
    return this.salary;
  }
}

dev1List = [];
dev2List = [];
mgrList = [];

dev1List.push(new Developer("Brendan Eich", 100_000));
dev1List.push(new Developer("James Gosling", 200_000));

dev2List.push(new Developer("Guido van Rossum", 250_000));
dev2List.push(new Developer("Anders Hejlsberg", 350_000));

// Is that the right approach? Maybe make same signature. Dont' change signature.
// And add addEmployee method on each class.
// OOP

mgrList.push(new Manager("Dennis Ritchie", 500_000, dev1List));
mgrList.push(new Manager("Alan Kay", 500_000, dev2List));

const ceo = new CEO("CEO", 1_000_000, mgrList);
const total_salary = ceo.calculate();

console.log(`The total company salary is ${total_salary}`);
