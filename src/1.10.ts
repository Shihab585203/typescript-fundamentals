// types of Union and Intersection

//Union Types

// type FrontendDeveloper = "junior Developer" | "mid Developer";
// type FullStackDeveloper = "frontend Developer" | "backend Developer";

// type Developer = FrontendDeveloper | FullStackDeveloper;


// const frontendDeveloper: FrontendDeveloper = "mid Developer";

// type user = {
//     name: string,
//     phone: number,
//     email?: string,
//     blood: "A+" | "B+" | "O+",
//     gender: "male" | "female"
// }

// const user1: user = {
//     name: "Jui",
//     phone: 880458444,
//     blood: "B+",
//     gender: "female"
// }

// Intersection Types

type FrontendDeveloper = {
    skills: string[],
    designation1: "Frontend Developer"
}

type BackendDeveloper = {
    skills: string[],
    designation2: "Backend Developer"
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;


const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
    
}