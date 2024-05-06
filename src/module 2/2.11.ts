{
  //Utility

  //Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type nameAge = Pick<Person, "name" | "age">;

  //Omit

  type doOmit = Omit<Person, "age">;

  //Require

  type personRequired = Required<Person>;

  //Partial

  type partialPerson = Partial<Person>

  // Readonly

  type PersonReadOnly = Readonly<Person>

  const user1: PersonReadOnly = {
    name: "Mr Khanna",
    age: 45,
    contactNo: "015555"
  }

  user1.name = "Mr Ozil"

  //Record 

//   type MyObj = {
//     a: string;
//     b: string;
//   }

  type MyObj = Record<string, string>

  const EmptyObj : Record<string, unknown> = {}

  const user: MyObj = {
    a: "aa",
    b: "bbbb"
  }

  //
}
