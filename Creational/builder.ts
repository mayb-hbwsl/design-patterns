class User {
  constructor(
    public name: string,
    public email: string,
    public age?: number,
    public phone?: string,
    public address?: string,
  ) {}
}

class UserBuilder {
  private name!: string;
  private email!: string;
  private age?: number;
  private phone?: string;
  private address?: string;

  setName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  setPhone(phone: string): UserBuilder {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): UserBuilder {
    this.address = address;
    return this;
  }

  build(): User {
    if (!this.name || !this.email) {
      throw new Error("Name and email are required");
    }
    return new User(this.name, this.email, this.age, this.phone, this.address);
  }
}

const user = new UserBuilder()
    .setName("John Doe")
    .setEmail("John@example.com")
    .setAge(30)
    .setPhone("123-456-7890")
    .setAddress("123 Main St")
    .build();

console.log(user);
