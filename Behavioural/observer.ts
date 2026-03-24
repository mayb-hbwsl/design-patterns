//Observer: 
interface Observer {
    update(message: string): void;
}


//Subject : This basically maintains a list of observers and notifies them of any state changes, usually by calling one of their methods.
class Group{
    private users: Observer[] = [];

    subscribe(user: Observer): void {
        this.users.push(user);
    }

    notify(message: string): void {
        this.users.forEach(user => user.update(message));
    }
}


//Observer: Those who wants to receive updates 
class User implements Observer {
    constructor(public name: string) {}

    update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

//Usage
const group = new Group();

const u1 = new User("Alice");
const u2 = new User("Bob");

group.subscribe(u1);
group.subscribe(u2);

group.notify("Hello, Guyss!!!");

