{
    //Type vs interface
    //interface

    type User1 = {
        name: string,
        age: number,
    }

    interface User2 {
        name: string,
        age?: number
    }

    type User1WithRole = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user1: UserWithRole2 = {
        name: "Shihab",
        age: 22,
        role: "Manager"
    }

    // Interface can be use in object and array

    type Roll1 = number[]

    interface Roll2 {
        [index: number] : number
    }

    const roll1: Roll2 = [1, 2, 3]

    //function

    type Add = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2;







}