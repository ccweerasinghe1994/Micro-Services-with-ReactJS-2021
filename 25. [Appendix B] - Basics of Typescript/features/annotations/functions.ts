const add = (a: number, b: number) => {
  return a + b;
};

// normal function
function devide(a: number, b: number): number {
  return a / b;
}
// anonymorse function
const mutiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (): void => {
  console.log("logging");
  //   return null;
  //   return undefined;
};

const throeError = (message): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forcast: { date: Date; weather: string }): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
};

const logWeatherwithDestructuring = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
