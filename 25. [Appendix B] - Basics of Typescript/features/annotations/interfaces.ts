interface Reportable {
  summery(): string;
}

const lodCivic = {
  name: "civic",
  year: 2001,
  broken: true,
  summery() {
    return `this is the ${this.year}`;
  },
};

const drink = {
  name: "sprite",
  carbonated: true,
  sugar: 56,
  summery() {
    return `this drink has ${this.name}`;
  },
};

const printSummery = (item: Reportable) => {
  console.log(item.summery());
};

printSummery(lodCivic);
printSummery(drink);
