"use strict";
{
    // Normal Function
    // Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    const addArrow = (num1, num2) => num1 + num2;
    // == object --> function --> method
    const poorUser = {
        name: "Shihab",
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        },
    };
    //map
    const arr = [25, 55, 77];
    const newArr = arr.map((elem) => elem * elem);
}
