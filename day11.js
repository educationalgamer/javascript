//arrays in js

let fruit=['apple','banana','mango','orange'];

fruit.push('kiwi');
// console.log(fruit);
fruit.unshift('anshu');
// console.log(fruit);
let citrus=fruit.slice(0,3);
// console.log(citrus);


//slice method
let number=[1,2,3,4,5];
let result=number.slice(1,4);
// console.log(result)
const greeting="hello anshu";
const slice=greeting.slice(2,8);
// console.log(slice);

//splice method
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1);

console.log(days); // ["Monday"]
console.log(months); // ["January", "February", "Tuesday"


//fill method
const n=[1,2,3,4,5];
const b=n.fill(0);
console.log(b); // [0, 0, 0, 0, 0]


//filter method
const ages = [32, 33, 16, 40];
const rt = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 33;
}
console.log(rt); 