{
  // Ternary, Optional Chaining & Nullish Coalescing Operator

  let age: number = 15;

  if( age >= 18){
    console.log("Adult");
  } else {
    console.log("Younger");
  }

  //Ternary Operator
  const isAdult = age >= 18 ? "Adult" : "Younger"
    // console.log({ isAdult });

  //Nullish Coalescing Operator
  //null / undefined ---> decision making
  
  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  

//   console.log({ result1, result2 });


  type User = {
    name: string,
    address: {
        city: string,
        road: string,
        house: number,
        present: string,
        permanent?: string
    }
  }

  const user: User = {
    name: "Sehab",
    address: {
        city: "Cumilla",
        road: "Vanga",
        house: 1550,
        present: "Chandiara"
    }
  }

  const permanentAddress = user?.address?.permanent ?? "No Permanent Address" ;
  console.log(permanentAddress);

}
