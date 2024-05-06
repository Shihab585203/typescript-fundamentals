{
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number) => num1 + num2;

// == object --> function --> method

const poorUser = {
  name: "Shihab",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

//map

const arr: number[] = [25, 55, 77];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
}