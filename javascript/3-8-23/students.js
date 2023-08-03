const students = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Ruby",
  },
  {
    id: 3,
    name: "Aisha",
  },
  {
    id: 4,
    name: "Abin",
  },
  {
    id: 5,
    name: "Christina",
  },
];

console.log(students);

let concatNames = "";
// using foreach
students.forEach((item) => {
  concatNames === ""
    ? (concatNames = item.name)
    : (concatNames = `${concatNames} , ${item.name}`);
});

console.log(concatNames);

//using reduce()
const fn = (concatNames, item) => {
  if (concatNames === "") return (concatNames = item.name);
  else return (concatNames = `${concatNames} , ${item.name}`);
};

console.log(students.reduce(fn, ""));

// console.log(
//   students.reduce((concatNames, item) => {
//     if (concatNames === "") return (concatNames = item.name);
//     else return (concatNames = `${concatNames} , ${item.name}`);
//   }, "")
// );


