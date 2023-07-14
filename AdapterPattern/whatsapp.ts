class WhatsApp {
    receiver: string;
    
    constructor(receiver: string) {
        this.receiver = receiver;
    }

    public submitMessage(message: string): void {
        console.log(`This message: ${message} has been sent.`);
    }
}
