type person = {
  firstName: string;
  lastName: string;
  age: number;
};

//union = can be number or string
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101);
printId("202");

//intersection = combine two interfaces or types
interface Employee1  {
  name: string;
  startDate: Date;
};

interface Manager  {
  name: string;
  department: string;
};

type TeamLead = Employee1 & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(2024, 1, 3),
  department: "Software developer",
};
