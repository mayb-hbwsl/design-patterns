//Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

//Concrete Strategies

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing credit card payment of $${amount}.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}.`);
  }
}

class UPIPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing UPI payment of $${amount}.`);
  }
}

//Context Class

class PaymentContext {
  private strategy!: PaymentStrategy;

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  executePayment(amount: number): void {
    if (!this.strategy) {
      console.log("Payment strategy not set.");
      return;
    }
    this.strategy.pay(amount);
  }
}

//Usage
const payment = new PaymentContext();
payment.setPaymentStrategy(new CreditCardPayment());
payment.executePayment(100);

payment.setPaymentStrategy(new PayPalPayment());
payment.executePayment(150);

payment.setPaymentStrategy(new UPIPayment());
payment.executePayment(200);
