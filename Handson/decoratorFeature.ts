/**A payment processing system allows adding optional features such as logging, fraud detection, and discount handling on top of basic payment processing. 
 * These features should be added dynamically without modifying the existing payment classes or creating multiple subclasses for every combination.
 * Task
Identify the appropriate design pattern and implement it in js. Explain how your solution allows dynamic addition of responsibilities. */



// Base Interface for Payment
interface Payment {
    processPayment(amount: number): void;
}

// Concrete Component for Basic Payment Processing
//This class implements the basic payment processing logic. It serves as the core component that can be decorated with additional features.
class BasicPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing payment of Rs.${amount}`);
    }
}


//Base Decorators

abstract class PaymentDecorator implements Payment {
    constructor(protected payment: Payment){};

    processPayment(amount: number): void {
        this.payment.processPayment(amount);
    }
}


//Concrete Decorators for Additional Features
//These decorators (class) will extend the base decorator and add specific functionalits

class LoggingDecorator extends PaymentDecorator {
    processPayment(amount: number): void {
        console.log(`We are logging innnnn`);
        super.processPayment(amount);
    }
}

class FraudDetectionDecorator extends PaymentDecorator {
    processPayment(amount: number): void {
        console.log("We are detecting fraud.");
        super.processPayment(amount);
    }
}

class DiscountDecorator extends PaymentDecorator {
    processPayment(amount: number): void {
        console.log("Here is your Discount");
        super.processPayment(amount);
    }
}


let myPayment: Payment = new BasicPayment();
myPayment.processPayment(1000);

myPayment = new LoggingDecorator(myPayment);
myPayment.processPayment(1000);

myPayment = new FraudDetectionDecorator(myPayment);
myPayment.processPayment(1000);

myPayment = new DiscountDecorator(myPayment);
myPayment.processPayment(1000);


