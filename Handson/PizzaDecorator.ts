/**
 A food ordering system allows customers to customize their orders. 
The base item is a simple dish (e.g., Pizza), and additional options such as extra cheese, toppings, and discount coupons can be applied dynamically.
 
Each additional option:
Modifies the final price
Updates the description of the order

The system should allow flexible combinations of these options without creating separate classes for every possible combination (e.g., PizzaWithCheeseAndToppings, PizzaWithDiscount, etc.).
The final bill should correctly reflect all applied modifications based on the selected options.

Task
Identify the appropriate design pattern and explain how your solution allows dynamic addition of features while maintaining correct pricing and description.
 */

//Base Interface

interface Pizza {
    cost(): number;
    description(): string;
}

//Concrete Component

class PlainPizza implements Pizza {
    cost(): number {
        return 100;
    }

    description(): string {
        return "Plain Pizza";
    }
}

//Base Decorator

class PizzaDecorator implements Pizza {
    constructor(protected pizza: Pizza) {}

    cost(): number {
        return this.pizza.cost();
    }

    description(): string {
        return this.pizza.description();
    }
}

//Multiple Decorators

class CheeseDecorator extends PizzaDecorator {
    cost(): number {
        return this.pizza.cost() + 20; //Adding rs 20 for extra cheese
    }

    description(): string {
        return this.pizza.description() + ", Cheese";
    }
}

class ToppingsDecorator extends PizzaDecorator {
    cost(): number {
        return this.pizza.cost() + 15; //Adding rs 15 for toppings
    }   

    description(): string {
        return this.pizza.description() + ", Toppings";
    }
}

class CouponDecorator extends PizzaDecorator {
    cost(): number {
        return this.pizza.cost() - 50 ; //Applying a discount of rs 50
    }

    description(): string {
        return "Coupon applied to " + this.pizza.description();
    }
}


//Multiple Decorators with recursive action

let myPizza: Pizza = new PlainPizza();
console.log(`${myPizza.description()} costs Rs.${myPizza.cost()}`);

myPizza = new CheeseDecorator(myPizza);
console.log(`${myPizza.description()} costs Rs.${myPizza.cost()}`);

myPizza = new ToppingsDecorator(myPizza);
console.log(`${myPizza.description()} costs Rs.${myPizza.cost()}`);

myPizza = new CouponDecorator(myPizza);

console.log(`${myPizza.description()} costs Rs.${myPizza.cost()}`);       