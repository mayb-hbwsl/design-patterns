interface PaymentStrategy {
    pay (amount: number): void;
}


class CreditCard implements PaymentStrategy {
    pay (amount: number) : void {
        console.log('Credit Card payment of Rs.' + amount);
    }
}

class UPI implements PaymentStrategy {

    pay (amount: number) : void {
        console.log('UPI payment of Rs.' + amount);
    }
}

class NetBanking implements PaymentStrategy {
    pay(amount: number) : void {
        console.log('Net Banking payment of Rs.' + amount);
    }
}

class PaymentContext {
    strategy!: PaymentStrategy;

    setPaymentStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    executePayment(amount: number) {

        this.strategy.pay(amount);

    }
}

const payment = new PaymentContext();

payment.setPaymentStrategy(new CreditCard());
payment.executePayment(10000);

payment.setPaymentStrategy(new UPI());
payment.executePayment(5000);

payment.setPaymentStrategy(new NetBanking());
payment.executePayment(15000);