class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("honk honk");
  }
}

class Car extends Vehicle {
  constructor(whells: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car(4, "blue");

car.drive();
console.log(car.color);
