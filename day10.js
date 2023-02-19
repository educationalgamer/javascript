let fruits = ['apple', 'banana', 'orange'];
fruits.push('pear');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'pear']

fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'banana', 'orange']

fruits.shift();
console.log(fruits); // Output: ['apple','banana', 'orange']

let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['banana','orange']

console.log(fruits.indexOf(2));
console.log(fruits.lastIndexOf(2));
console.log(fruits.indexOf('banana'));


