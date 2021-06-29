const person = {
  name: "chamara",
  age: 34,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = person;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
