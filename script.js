/* 1 */

const NumbArr = [1, 2, 3, 4, 5];
let NumbSum = 0;

for (const i of NumbArr) {
  NumbSum += i;
}
console.log(NumbSum);


console.log(" ");


/* 2 */

const maxValueArr = [1, 3, 5, 7];
let maxValue = 0;

for (const i of maxValueArr) {
  if (i > maxValue) {
    maxValue = i
  }
}

console.log(maxValue);

console.log(" ");

/* 3 */


const stringArr = ["Hello", "JavaScript", "itfriends", "halls"];

for (const i of stringArr) {
  if (i.length > 5) {
    console.log(i);
  }
}

console.log(" ");

/* 4 */

const searchElem = [1, 3, 4, 6, "Hello world"];

for (const i of searchElem) {
  if (i == 3) {
    console.log(i);
  }else {
    console.log("Елементу немає");
  }
}

console.log(" ");

/* 5 */

/* ---------------- */



/* 1 (2) */

const filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const i of filterArr) {
  if (i > 10 && i % 2 == 0) {
    console.log(i);
  }
}

console.log(" ");


/* 2 (2) */

/* ------------ */


/* 3 (1) */


for (let i = 1; i <= 10; i++) {
  console.log(i); 
}

console.log(" ");

/* 3 (2) */


for (let i = 0; i <= 20; i += 2) {
  console.log(i);
  
}

console.log(" ");

/* 4 (2) */

let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i
}
console.log(sum);

console.log(" ");

/* 5 (2) */

const arr = [1, 3, 7, 13, 2];
let mostBigValue = 0

for (const i of arr) {
  if (i > mostBigValue) {
    mostBigValue = i;
    console.log(i);
  }
}

/* не совсем то что нужно */

console.log(" ");

/* 6 (2) */

/* - */

/* 7 (2) */


/* ----- */



/* 8 (2) */

const arifmater = [13, 45, 2, 8];
let resaultArf = 0

for (const i of arifmater) {
  resaultArf = (i + i)/ arifmater.length
  console.log(resaultArf);
}

/* не получилось ((( */

/* 9 (2)*/

let js = "JavaScript";

for (let i = 0; i < js.length; i++) {
  let jsWord = js[i]
  console.log( jsWord);
}
console.log(" ");

/* 10 (2) */

let obernStr = "Hello";
let returnStr = "";

for (let i = obernStr.length - 1; i >= 0; i--) {
  returnStr += obernStr[i]
  
  console.log(returnStr);
}