class Superman {
    fly() {
        console.log("Flying superman")
    }
}

class Plane {
    fly() {
        console.log("flying Plane")
    }
}

class Mosquito {
    fly() {
        console.log("flying mosquito")
    }
}

const flyingObjects = [new Superman(), new Plane(), new Mosquito()]

for (const obj of flyingObjects) {
    obj.fly()
}
