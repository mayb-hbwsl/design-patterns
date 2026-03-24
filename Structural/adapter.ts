interface PaymentProcessor {
    pay(amount: number): void;
}


//Third Party Payment Gateway

class Stripe {
    makePayment(amountInCents: number): void {
        console.log(`Processing payment of $${amountInCents} through Stripe.`);
    }
}

class Paypal {
    sendPayment(amountInDollars: number): void {
        console.log(`Processing payment of $${amountInDollars} through PayPal.`);
    }
}

//Adapter for Stripe

class StripeAdapter implements PaymentProcessor {
    
    constructor(private stripe: Stripe) {}

    pay(amount: number): void {
        this.stripe.makePayment(amount / 100);
    }

}

//Adapter for PayPal

class PaypalAdapter implements PaymentProcessor {
    
    constructor(private paypal: Paypal) {}

    pay(amount: number): void {
        this.paypal.sendPayment(amount / 100);
    }

}

//Client code

const stripe = new Stripe();
const paypal = new Paypal();

const stripeAdapter = new StripeAdapter(stripe);
const paypalAdapter = new PaypalAdapter(paypal);

stripeAdapter.pay(50);
paypalAdapter.pay(75); 