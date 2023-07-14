
class Email {
  recipient;

  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(Message) {
    console.log(`Email sent to ${this.recipient}`);
  }
}

class SMS {
  recipient;

  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(Message) {
    console.log(`SMS sent to ${this.recipient}`);
  }
}


class WhatsApp {
  receiver;

 constructor(receiver) {
   this.receiver = receiver;
 }

 submitMessage(message) {
   console.log("This message " + message + " has been sent");
 }
}


class WhatsAppAdapter {
  recipient;

  constructor(recipient){
    this.recipient = recipient
    
  }

  sendMessage(message){
    const whatsapp = new WhatsApp(this.recipient);
    whatsapp.submitMessage(message)
  }
}

// class WhatsAppAdapter{
//   whatsapp;
  

//   constructor(recipient){
//     this.whatsapp = new WhatsApp(recipient);

//   }


//   sendMessage(message){
//     this.whatsapp.submitMessage(message)
//   }
// }

class Subscriber {

  firstName;
  lastName;

  notifier = [];

  // Subscriber(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
  }

  addNotifier(comm) {
    this.notifier.push(comm);
  }

  notifySubscriber(message) {
    this.notifier.forEach(comm => comm.sendMessage(message));
  }
}

var list = [];
var bill = new Subscriber("Bill", "Gates");
bill.addNotifier(new Email("billg@microsoft.com"));
list.push(bill);

var elon = new Subscriber("Elon", "Musk");
elon.addNotifier(new SMS("1-CALL-ELONMUSK"));
list.push(elon);

var brendan = new Subscriber("Brendan", "Eich");
brendan.addNotifier(new WhatsAppAdapter("Whatsapp Brendan"))
list.push(brendan)

list.forEach(person => {
  person.notifySubscriber("Bill due in 3 days");
});

