const user: {
  firstName: "Muhammad"; //literal type
  middleName?: string; //optional type
  readonly lastName: string;
  isMarried?: boolean; //optional type
} = {
  firstName: "Muhammad",
  middleName: "khayer",
  lastName: "Ahmed",
};

// user.lastName = "khan" //lastName couldn't be change because it's readonly
