"use strict";
// Destructuring
//Object Destructuring
const bioData = {
    name: {
        firstName: "Shihab",
        lastName: "Ahmed"
    },
    age: 45,
    Phone: "018888888",
    gender: "Male"
};
const { name: { lastName }, age } = bioData;
//Array Destructuring
const names = ["Mainul", "Koohinur", "Khawaja", "Shahid"];
const [, , bestFriend, ...rest] = names; // ...rest means you can call rest element after your desire array element.
