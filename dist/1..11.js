"use strict";
var _a, _b;
{
    // Ternary, Optional Chaining & Nullish Coalescing Operator
    let age = 15;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Younger");
    }
    //Ternary Operator
    const isAdult = age >= 18 ? "Adult" : "Younger";
    // console.log({ isAdult });
    //Nullish Coalescing Operator
    //null / undefined ---> decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    const user = {
        name: "Sehab",
        address: {
            city: "Cumilla",
            road: "Vanga",
            house: 1550,
            present: "Chandiara"
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log(permanentAddress);
}
