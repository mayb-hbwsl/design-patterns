interface xNotification {
    send(message: string): void;
}

class EmailNotification implements xNotification {

    send(message : string){
        console.log(`Sending email notification: ${message}`);
    }

}

class SMSNotification implements xNotification {
    send(message : string){
        console.log(`Sending SMS notification: ${message}`);
    }

}

class NotificationFactory {
    static createNotification(type: string): xNotification {
        if (type === "email") {
            return new EmailNotification();
        } else if (type === "sms") {
            return new SMSNotification();
        } else {
            throw new Error("Invalid notification type");
        }
    }
}

const notifier = NotificationFactory.createNotification("email");
notifier.send("Hello, this is a notification!");

