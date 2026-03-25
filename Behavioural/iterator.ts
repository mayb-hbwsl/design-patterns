interface xIterator<T> {
  hasNext(): boolean;
  next(): T;
}

class NameCollection {
  private names: string[] = [];

  add(name: string) {
    this.names.push(name);
  }

  getIterator(): NameIterator {
    return new NameIterator(this.names);
  }
}

class NameIterator implements xIterator<string> {
  private index = 0;

  constructor(private names: string[]) {}

  hasNext(): boolean {
    return this.index < this.names.length;
  }

  next(): string {
    return this.names[this.index++];
  }
}

const collection = new NameCollection();

collection.add("Mayur");
collection.add("Rahul");
collection.add("Amit");

const iterator = collection.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}