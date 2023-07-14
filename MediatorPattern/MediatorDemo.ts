class User {
    private userList = new Map<number, User>();

    public constructor(
        private id: number,
        private name: string
    ) { }

    addFriend(friend: User) {
        this.userList.set(friend.id, friend);
    }

    messageAll(message: string) {
        for (let entry of this.userList.entries()) {
            entry[1].sendMessage(`From [${this.name}]: ${message}`);
        }
    }

    messageOne(id: number, message: string) {
        let user = this.userList.get(id);

        if (null != user) {
            user.sendMessage(`From [${this.name}] ${message}`);
        }
    }

    sendMessage(msg: string) {
        console.log(`[${this.name}] got a message ${msg}`);
    }
}

let eric = new User(1, "Eric Gamma");
let john = new User(2, "John Vlissides");
let ralph = new User(3, "Ralph Johnson");
let richard = new User(4, "Richard Helm");

eric.addFriend(john);
eric.addFriend(ralph);
eric.addFriend(richard);

john.addFriend(eric);
john.addFriend(ralph);
john.addFriend(richard);

ralph.addFriend(eric);
ralph.addFriend(john);
ralph.addFriend(richard);

richard.addFriend(eric);
richard.addFriend(john);
richard.addFriend(ralph);

eric.messageAll("Hey everybody");
ralph.messageOne(1, "Hi Eric");
