"use strict";
{
    // Spread Operator
    // Rest Operator
    //Learn Spread Operator
    const bros1 = ['Said', "Jaker", 'Rofique'];
    const bros2 = ['Moidul', "kashem", 'bulbul'];
    bros1.push(...bros2);
    const course1 = {
        python: "Sadiqur",
        javaScript: "Jhankar",
        php: "Hasin"
    };
    const course2 = {
        react: "rabbil",
        nodeMongo: "hmNayem"
    };
    const mentorList = Object.assign(Object.assign({}, course1), course2);
    // Learn Rest Operator
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
        friends.forEach(friend => console.log(`Hi ${friend}`));
    };
    greetFriends("Ena", "Mina", "Tina", "Moyna", "Jayna");
}
