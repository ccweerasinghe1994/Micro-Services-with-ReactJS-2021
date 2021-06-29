const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["pepsi", true, 78];
const tea: Drink = ["tea", false, 0];
const sprite: Drink = ["sprite", true, 78];

const carSpecs: [number, number] = [400, 2322];

const carStats = {
    horsepower:400,
    weight:2322
};
