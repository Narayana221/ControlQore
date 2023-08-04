const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//let new_data = (data.forEach((item) => item.reduce((sum, curr_value) => sum + curr_value)));
let new_data = (data.map((item) => item.reduce((sum, curr_value) => sum + curr_value)));
console.log(new_data)

