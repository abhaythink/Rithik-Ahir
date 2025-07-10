//--------------------------- Arrays & Array Methods -----------------------------------------

//MAP()

let arr = [1, 2, 3, 4, 5, 6, 7];

let modifyArr = arr.map((arr) => arr * 2);
console.log(modifyArr);
console.log(arr.map((arr) => Math.sqrt(arr)));

arr = [
  { key: 1, value: "one" },
  { key: 2, value: "Two" },
  { key: 3, value: "Three" },
];

const formatedArr = arr.map(({ key, value }) => ({ [key]: value }));
console.log(formatedArr);
const updatedArr = arr.map((arr) => {
  return (arr.price = 100);
});
const newArr = arr.map((arr) => ({
  ...arr,
  price: 100,
}));

console.log(newArr);

console.log(updatedArr);
console.log(arr);
console.log(arr.map(nameFunc));

function nameFunc(item) {
  return [item.key, item.value].join(" ");
}

console.log("---------------- END OF MAP() ----------------------------");
// FILTER()

arr = ["one", "two", "three", "four", "eleven"];
let result = arr.filter((arr) => arr.length > 3);
console.log(result);
const bigNum = (num) => {
  return num >= 100;
};
let filtered = [1, 2, 356, 78, 23, 100, 45, 999].filter(bigNum);

console.log(filtered);

const fruits = ["apple", "orange", "banana", "watermelon", "grapes"];

const checkFruits = (frt, query) => {
  return frt.filter((ele) => ele.toLowerCase().includes(query.toLowerCase()));
};

console.log(checkFruits(fruits, "ap"));
console.log(checkFruits(fruits, "ba"));

console.log("---------------- END OF FILTER() ----------------------------");

// REDUCE()

arr = [1, 2, 3, 4];

result = arr.reduce((acc, curr) => acc + curr);
console.log(result);

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

arr = [1, 2, 3, 4];

result = arr.reduce((acc, curr) => acc + curr, 10);
console.log(result);
const obj = [
  {
    x: 1,
  },
  { x: 2 },
  { x: 3 },
];

result = obj.reduce((acc, curr, i) => acc + curr.x, 0);
console.log(result);

console.log("---------------- END OF REDUCE() ----------------------------");

// FIND()

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result = arr.find((curr) => {
  return curr > 4;
});

console.log(result);

let obj1 = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 3 },
  { name: "watermelon", quantity: 7 },
  { name: "grapes", quantity: 8 },
];

result = obj1.find((frt) => {
  return frt.quantity > 4;
});

console.log(result);

let result1 = obj1.find(({ quantity }) => quantity === 8);
console.log(result1);

console.log("---------------- END OF REDUCE() ----------------------------");

// FOREACH()

arr = ["one", "two", "three", "four"];
arr.forEach((ele) => console.log(ele));

obj1 = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 3 },
  { name: "watermelon", quantity: 7 },
  { name: "grapes", quantity: 8 },
];

obj1.forEach((ele, i) => console.log(`${ele.name}, index: ${i}`));

console.log("---------------- END OF FOREACH() ----------------------------");

//Filter even numbers and calculate total using reduce().

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14];
const finalResult = numbers
  .filter((num) => num % 2 == 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(finalResult);
