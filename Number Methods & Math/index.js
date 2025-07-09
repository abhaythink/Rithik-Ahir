// ----------------------------- NUMBER METHODS -----------------------------------

// toFixed();

let x = 8.52887766;

console.log(x.toFixed(0)); //9
console.log(x.toFixed(1)); //8.5
console.log(x.toFixed(2)); //8.53
console.log(x.toFixed(3)); //8.529

// toPrecision()

x = 8.52887766;

console.log(x.toPrecision()); //8.52887766
console.log(x.toPrecision(1)); //9
console.log(x.toPrecision(2)); //8.5
console.log(x.toPrecision(3)); //8.53

// parseInt()

console.log(Number.parseInt("10")); //10
console.log(Number.parseInt("6.2")); //6
console.log(Number.parseInt("abc")); //NaN

// parseFloat()

console.log(parseFloat("4.17")); // 4.17
console.log(parseFloat(".6")); //0.6
console.log(parseFloat("abc1243")); //NaN

// isNaN()
let num = 90;
console.log(isNaN(num)); //false
console.log(isNaN(91)); //false
console.log(isNaN("91")); //false
console.log(isNaN("abc")); //true
console.log(isNaN(0 / 0)); //true
console.log(isNaN(undefined)); //true
console.log(isNaN(null)); //false

console.log("-------END OF NUMBER METHOD -------------");

// ----------------------------- MATH OPERATIONS ----------------------------------

//Math.round()

console.log(Math.round(9.9)); //10
console.log(Math.round(9.5)); //10
console.log(Math.round(9.09)); //9
console.log(Math.round(9.2)); //9
console.log(Math.round(-9.09)); //-9
console.log(Math.round(-9.5)); // -9
console.log(Math.round(-9.7)); //-10
console.log("---END OF MATH.ROUND");

//Math.floor()

console.log(Math.floor(9.9)); //9
console.log(Math.floor(9.2)); //9
console.log(Math.floor(9.5)); //9
console.log(Math.floor(-9.9)); //-10
console.log(Math.floor(-9.5)); //-10
console.log("---END OF MATH.FLOOR");

//Math.random()

console.log(Math.floor(Math.random() * 10));

const randNum = (min, max) => {
  let minFloor = Math.floor(min);
  let maxCeil = Math.ceil(max);
  console.log(Math.round(Math.random() * (maxCeil - minFloor) + minFloor));
};

randNum(1, 10);

console.log("-------END OF NUMBER METHOD -------------");

// ----------------------------- NUMBER GUSSING GAME ----------------------------
let input = document.getElementById("guessInput");
let x1 = Math.floor(Math.random() * 10 + 1);
let guess = 1;
let btn = document.getElementById("btn").addEventListener("click", () => {
  let y = input.value;
  if (x1 == y) {
    alert("Congratulation you have guess it right with " + guess + " guesses");
  } else if (x1 > y) {
    guess++;
    alert("Try a larger Number");
  } else if (x1 < y) {
    guess++;
    alert("Try a Smaller Number");
  }
});
