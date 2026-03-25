
//Hanfler Interface
abstract class ATMHandler {
    protected nextHandler: ATMHandler | null = null;

    setNext(handler : ATMHandler) : ATMHandler {
        this.nextHandler = handler;
        return handler;
    }

    abstract withdraw(amount: number): void;
}

//Concrete Handlers

class TwoThousandHandler extends ATMHandler {
    
    withdraw(amount: number): void {
        const notes = Math.floor(amount / 2000);
        const remainder = amount % 2000;

        if (notes > 0) {
            console.log(`Dispensing ${notes} x 2000 notes`);
        }

        if(remainder > 0 && this.nextHandler) {
            this.nextHandler.withdraw(remainder);
        } else if (remainder > 0) {
            console.log(`Cannot dispense remaining amount: ${remainder}`);
        }
    }
}

class FiveHundredHandler extends ATMHandler {

    withdraw(amount: number): void {
        const notes = Math.floor(amount / 500);
        const remainder = amount % 500;

        if (notes > 0) {
            console.log(`Dispensing ${notes} x 500 notes`);
        }

        if(remainder > 0 && this.nextHandler) {
            this.nextHandler.withdraw(remainder);
        } else if (remainder > 0) {
            console.log(`Cannot dispense remaining amount: ${remainder}`);
        }
    }
}

const HundredHandler = class extends ATMHandler {

    withdraw(amount: number): void {
        const notes = Math.floor(amount / 100);
        const remainder = amount % 100;

        if (notes > 0) {
            console.log(`Dispensing ${notes} x 100 notes`);
        }

        if(remainder > 0 && this.nextHandler) {
            this.nextHandler.withdraw(remainder);
        } else if (remainder > 0) {
            console.log(`Cannot dispense remaining amount: ${remainder}`);
        }
    }
}

//Usage
const twoThousandHandler = new TwoThousandHandler();
const fiveHundredHandler = new FiveHundredHandler();
const hundredHandler = new HundredHandler();

twoThousandHandler.setNext(fiveHundredHandler).setNext(hundredHandler);

twoThousandHandler.withdraw(3700);

