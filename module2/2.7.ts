{
  // generic constraint with keyof operator

  type vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof vehicle


  const getPropertyValue = <X,Y extends keyof X>(obj: X, key: Y)=> {
    return obj[key];
  }

  const user = {
    name: "momin",
    age: 22,
    address: "ng"
  }

  const car = {
    model: "marchidis",
    year: 2000,
  }

  const result1 = getPropertyValue(car, "model");

  // obj ['key'] 26

  //
}