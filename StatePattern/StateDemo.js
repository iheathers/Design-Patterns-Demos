const State = {
    open: 0,
    closed: 1,
    error: 2
};

class Connection {
    constructor() {
        this.state = State.open;
    }

    connect() {
        if (this.state == State.open) {
            console.log("Connection already open");
        }
        else if (this.state == State.error) {
            console.log("Connection is error state");
        }

        this.state = State.open;
    }

    sendMessage(message) {
        if (null == message)
            this.state = State.error;

        if (this.state == State.error)
            console.log("Connection is in error state");
        else if (this.state == State.open)
            console.log(`Sending message ${message}`);
        else
            console.log("Connection is not open");
    }

    close() {
        if (this.state == State.closed)
            console.log("Connection is not open");
    }
}

let connection = new Connection();
connection.sendMessage("Hello");
connection.connect();
connection.sendMessage("Hello");
connection.connect();
connection.sendMessage(null);
connection.close();

