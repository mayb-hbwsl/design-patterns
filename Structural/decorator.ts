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
        return this.pizza.cost() + 20;
    }

    description(): string {
        return this.pizza.description() + ", Cheese";
    }
}

class OlivesDecorator extends PizzaDecorator {
    cost(): number {
        return this.pizza.cost() + 15;
    }

    description(): string {
        return this.pizza.description() + ", Olives";
    }
}

class MushroomDecorator extends PizzaDecorator {
    cost(): number {
        return this.pizza.cost() + 25;
    }

    description(): string {
        return this.pizza.description() + ", Mushrooms";
    }
}


//Multiple Decorators in Action

let myPizza: Pizza = new PlainPizza();
// console.log(`${myPizza.description()} costs $${myPizza.cost()}`);

myPizza = new CheeseDecorator(myPizza);
// console.log(`${myPizza.description()} costs $${myPizza.cost()}`);

myPizza = new OlivesDecorator(myPizza);
// console.log(`${myPizza.description()} costs $${myPizza.cost()}`);

myPizza = new MushroomDecorator(myPizza);

console.log(`${myPizza.description()} costs $${myPizza.cost()}`);       