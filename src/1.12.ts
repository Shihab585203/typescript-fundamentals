{
  //Null Types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There has nothing to Search");
    }
  };

  // searchName(null);

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`Speed is: ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`Speed is: ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong Input!");
    }
  };

  getSpeedInMeterPerSecond(null);

  //Never

  const throwError = (message: string): never => {
    throw new Error(message)
  };

  throwError("Ye Kya hua");
}
