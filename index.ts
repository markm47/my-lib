type User = {
  name: string;
  email: string;
  age?: number;
};

const user: User = {
  name: "Mark",
  email: "mark@gmail.com"
};

console.log(user);