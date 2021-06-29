const carmakers: string[] = ["ford", "tesla", "toyota"];
const dates: Date[] = [new Date(), new Date()];

const carByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting values
const car = carmakers[0];
const myCard = carmakers.pop();

// prevent incompatible values

carmakers.push(100);

// help with map

carmakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible arrays

const importantDates: (string | Date)[] = [new Date(), "2021-11-31"];

importantDates.push(new Date());
importantDates.push("2021-11-4");
importantDates.push(21521)
