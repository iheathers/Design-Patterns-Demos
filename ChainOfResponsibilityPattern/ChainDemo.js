class President {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    approve(emp, amount) {
        console.log(`${this.name} approves ${emp.name}'s expense of ${amount}`);
    }
}

class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Manager {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    approve(emp, amount) {
        console.log(`Manager ${this.name} allows ${emp.name}'s expense of ${amount}`);
    }
}


class VicePresident {
    constructor(id, name) {
        this.id = id; this.name = name;
    }

    approve(emp, amount) {
        console.log(`${this.name} has approved ${emp.name}'s expense of ${amount}`);
    }
}

let ramesh = new Employee(7, "Ramesh");
let suresh = new Employee(6, "Suresh");
let ram = new Employee(5, "Ram");
let shyam = new Employee(4, "Shyam");
let khichai = new Manager(3, "Khichai");
let sichai = new VicePresident(3, "Sichai");
let pichai = new President(1, "Pichai");

let expenses = new Map();
expenses.set(ram, 1000.5);
expenses.set(suresh, 10000.75);
expenses.set(ram, 2000);
expenses.set(shyam, 50000);

for (let expense of expenses.entries()) {
    let emp = expense[0];
    let amount = expense[1];

    if (amount < 2000)
        khichai.approve(emp, amount);
    else if (amount < 20000)
        sichai.approve(emp, amount);
    else
        pichai.approve(emp, amount);
}