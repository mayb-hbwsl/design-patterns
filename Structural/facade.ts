//Complex Subsystems

class Kitchen {
  cook(item: string) {
    console.log(`Cooking ${item}...`);
  }
}

class Payment {
  pay(amount: number) {
    console.log(`Paid $${amount}...`);
  }
}

class Delivery {
  deliver(item: string) {
    console.log(`Delivering ${item}...`);
  }
}


//Facade

class FoodOrderFacade {
  private kitchen: Kitchen;
  private payment: Payment;
  private delivery: Delivery;

  constructor() {
    this.kitchen = new Kitchen();
    this.payment = new Payment();
    this.delivery = new Delivery();
  } 

  orderFood(item: string, amount: number) {

    console.log("Starting food order process...");
    this.payment.pay(amount);
    this.kitchen.cook(item);
    this.delivery.deliver(item);
    console.log("Food order process completed.");
  }

}

const order = new FoodOrderFacade();
order.orderFood("Pizza", 20);
