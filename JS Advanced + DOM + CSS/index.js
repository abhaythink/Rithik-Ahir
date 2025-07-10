//---------------------- STRING AND STRING METHODS --------------------------------

// SLICE()

let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = arr.slice(0, 4);
console.log(newArr);
console.log(arr.slice(4));
console.log(arr.slice(-2, -1));
console.log(arr.slice(1, -3));

let str = "Rithik Ahir";
console.log(str.slice(0, 6));
console.log(str.slice(0, -5));
console.log(str.slice(-4));
console.log(str.slice());

let car = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

let myCar = [car, 2, 3, 4, 5];
let newCar = myCar.slice(0, 4);
console.log(newCar);

car.color = "blue";
console.log(myCar);
console.log(newCar);
newCar[0].color = "yellow";
console.log(car);
console.log(myCar);
console.log("--------END OF SLICE() METHOD------------");

// SPLIT()

arr = "Hello world Good Morning";
newArr = arr.split(" ");
console.log(newArr);
console.log(arr.split(" ", 2));

arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.split(" ")); //This is giving erro.

console.log("--------END OF SPLIT() METHOD------------");

// REPLACE()

let str1 = "Rithik Ahir";
console.log(str1.replace("Ahir", "Rithik"));

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("dog", "cat"));
let regex = /dog/i;
console.log(paragraph.replace(regex, "cat"));
console.log(str1.replace("", "_"));

console.log("--------END OF REPLACE() METHOD------------");

// INCLUDES()

arr = [1, 2, 3, 4, 5];
console.log(arr.includes(2));
arr = ["one", "two", "three", "four"];
console.log(arr.includes("three"));
console.log(arr.includes("five"));
console.log(arr.includes("three", 2));
console.log(arr.includes("two", -100));
arr = [1, 2, , 4, null, { name: "rithik" }];
console.log(arr.includes(undefined));
console.log(arr.includes(null));
console.log(arr.includes(Object));

console.log("--------END OF INCLUDES() METHOD------------");

// TOUPPERCASE()

str = "rithik ahir";
console.log(str.toUpperCase());

arr = ["one", "two", "three", "four"];

console.log(arr[1].toUpperCase());

console.log("--------END OF TOUPPERCASE() METHOD------------");

//  TRIM()

str = "    Rithik Ahir    ";

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log("--------END OF TRIM() METHOD------------");

// Capitalize first letter of each word in a sentence.

const sentence = "Capitalize first letter of each word in a sentence.";
const word = sentence.split(" ");
let result = "";
for (let wrd of word) {
  console.log(wrd);
  result += wrd.charAt(0).toUpperCase() + wrd.slice(1) + " ";
  result.trim();
}

console.log(result);

// Count word frequency in a string.

const word1 = "hello hello world world";
const wrd = word1.split(" ");
const obj = {};
for (let w in wrd) {
  if (obj[wrd[w]]) {
    obj[wrd[w]]++;
  } else {
    obj[wrd[w]] = 1;
  }
}
console.log(obj);
