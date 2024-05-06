{
  //generic constraints with Keyof operator

  type Vehicles = {
    car: string;
    bicycle: string;
    bike: string;
  };

  type owner = "Rana" | "Jaynal" | "Moynal"; //manually

  type owner2 = keyof Vehicles

  const getPropertyValue = < X, Y extends keyof X >(obj: X, key: Y) => {
    return obj[key]
  }

  const user = {
    name: "Shihab",
    age: 22,
    address: "Cumilla"
  }

  const result1 = getPropertyValue(user, 'address')

}
