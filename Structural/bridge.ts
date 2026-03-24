interface Engine {
  start(): void;
}

class PetrolEngine implements Engine {
  start(): void {
    console.log("Starting petrol engine...");
  }
}

class DieselEngine implements Engine {
  start(): void {
    console.log("Starting diesel engine...");
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log("Starting electric engine...");
  }
}

class Car {
  constructor(protected engine: Engine) {}

  drive(): void {
    this.engine.start();
    console.log("Driving the car...");
  }
}

class Hatchback extends Car {
  drive(): void {
    console.log("Hatchback:");
    super.drive();
  }
}

class Sedan extends Car {
  drive(): void {
    console.log("Sedan:");
    super.drive();
  }
}

class SUV extends Car {
  drive(): void {
    console.log("SUV:");
    super.drive();
  }
}

//Client code

const petrolCar = new Hatchback(new PetrolEngine());
const dieselCar = new Sedan(new DieselEngine());
const electricCar = new SUV(new ElectricEngine());

petrolCar.drive();
dieselCar.drive();
electricCar.drive();
