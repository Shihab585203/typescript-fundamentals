{
// type alias

type student = {
    fullName: string,
    address: string,
    phone: number,
    gender: string
}

const user1: student = {
    fullName: "Komor Uddin",
    address: "Barkait",
    phone: 8801655555,
    gender: "male",
}
const user2: student = {
    fullName: "Omar",
    address: "Voishkhola",
    phone: 880169955,
    gender: "male",
}
const user3: student = {
    fullName: "Mizbaul",
    address: "Chandiara",
    phone: 8801699555,
    gender: "male",
}

type UserName = string;
type IsAdmin = boolean;

const userName: UserName = "Saif Ali";
const isAdmin: IsAdmin = true;

type Add = ( num1: number, num2: number ) => number;

const add: Add = ( num1, num2 ) => num1 + num2;

}