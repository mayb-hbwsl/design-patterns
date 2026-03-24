class User2{
    constructor(public name:string, public address: {city: string}){}

    clone(): User2 {
        return new User2(this.name, { ...this.address });
    }
}

const user1 = new User2("John Doe", { city: "New York" });
const user2 = user1.clone();

console.log(user1);
console.log(user2);

user2.name = "Rahul Doe";
user2.address.city = "Los Angeles";

console.log(user1); // User2 { name: 'John Doe', address: { city: 'New York' } }
console.log(user2); // User2 { name: 'Rahul Doe', address: { city: 'Los Angeles' } }

