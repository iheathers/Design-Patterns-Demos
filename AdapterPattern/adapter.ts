interface Communication {
    sendMessage(message: string): void;
}

class Email implements Communication {
    private recipient: string;

    constructor(recipient: string) {
        this.recipient = recipient;
    }

    public sendMessage(message: string): void {
        console.log(`Email sent to: ${this.recipient}`);
    }
}

class SMS implements Communication {
    private recipient: string;

    constructor(recipient: string) {
        this.recipient = recipient;
    }

    public sendMessage(message: string): void {
        console.log(`SMS sent to: ${this.recipient}`);
    }
}

type List<T> = T[];

class Subscriber {
    private firstName: string;
    private lastName: string;
    private notifier: List<Communication> = [];

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public addNotifier(comm: Communication): void {
        this.notifier.push(comm);
    }

    public notifySubscriber(message: string): void {
        this.notifier.forEach(comm => comm.sendMessage(message));
    }
}

const subscribers: List<Subscriber> = [];

const bill = new Subscriber("Bill", "Gates");
bill.addNotifier(new Email("bill@microsoft.com"));

subscribers.push(bill);

const elon = new Subscriber("Elon", "Musk");
elon.addNotifier(new SMS("1-CALL-ELONMUSK"));

subscribers.push(elon);

subscribers.forEach(person => person.notifySubscriber("Bill due in 3 days!"));
