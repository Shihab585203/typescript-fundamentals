{
  // Type Assertion

  let anything: any;

  anything = "Next Level Web Development";

  anything = 1213;

  anything as string;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Converted Value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type customError = {
    message: string;
  } 

  try {
  } catch (error) {
    console.log((error as customError).message);
  }
}
