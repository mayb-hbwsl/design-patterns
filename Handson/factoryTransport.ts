/*
A booking platform allows users to book different transport types such as Car, Bike, or Bus. 
The system should create the appropriate transport object based on user selection without exposing instantiation logic.

Task:
Identify the pattern and implement it in js. Explain how your solution improves scalability.* */

// Factory Interface
interface Transport {
    travel(): void;
}

// Concrete Products
//Each concrete class implements the Transport interface, providing specific implementations for the travel method.
class Bike implements Transport {
    travel(): void {
        console.log("Using Bike fro travel");
    }
}

class Car implements Transport {
    travel(): void {
        console.log("Using Car for travel");
    }
}

class Bus implements Transport {
    travel(): void {
        console.log("Using bus..");
    }
}

//Factory Class
//This will handle the  logic and talk to the client and then decide which object needs to be created
class TransportFactory {
    static createTransport(type: string): Transport {
        switch (type) {
            case "bike":
                return new Bike();
            case "car":
                return new Car();
            case "bus":
                return new Bus();
            default:
                throw new Error("Invalid transport type");
        }
    }
}

//Client Code
let transportType = "car";
let transport = TransportFactory.createTransport(transportType);
transport.travel();

transportType = "bike";

transport = TransportFactory.createTransport(transportType);
transport.travel();

transportType = "bus";
transport = TransportFactory.createTransport(transportType);
transport.travel();

