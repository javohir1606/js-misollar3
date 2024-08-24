// let a = [1, 2, 3, 4];
// let b = [2, 3, 4, 5, 6, 7];

// const x = (arr, arr2) => {
//   let newArr = [...arr, ...arr2];
//   let result = [];

// };

// x(a, b);


// let a = [2, 10, 5, 8, 12];

// const x = (arr) => {
// let max = arr[0];
// let min = arr[0];

// for(let i of arr){
//   if(max < i){
//     max = i;
//   }
//   if(min > i){
//     min = i;
//   }
// }
// return {min, max}

// }

// console.log(x(a));


// Uygi-vazifa
// array 1-misol
// function findObjectByValue(arr, key, value) {
//   return arr.find(obj => obj[key] === value);
// }
// const objectsArray = [
//   { name: "John", id: 1, age: 20 },
//   { name: "Jane", id: 2, age: 25 },
//   { name: "Alice", id: 3, age: 30 }
// ];
// let userInputKey = "name"; 
// let userInputValue = "Jane"; 
// const foundObject = findObjectByValue(objectsArray, userInputKey, userInputValue);
// console.log(foundObject); 


// array 2-misol
// function findObjectByKey(arr, key, value){
//   return arr.find(obj => obj[key] === value);
// }

// const arr = [
//   {name: "john", id: 1, age: 10},
//   {name: "john", id: 2, age: 20},
//   {name: "john", id: 3, age: 30}
// ]
// let userInput = "john";
// let foundObject = findObjectByKey(arr, "name", userInput);
// console.log(foundObject);

// array 3-misol
// const arr = [
//   { name: "jhon", id: 1, age: 10 },
//   { name: "jhon", id: 2, age: 20 },
//   { name: "jhon", id: 3, age: 30 }
// ]
// function getObjectById(arr, id) {
//   const foundObject = arr.find(obj => obj.id === id);
//   return foundObject ? foundObject : `Object with id ${id} not found`;
// }

// let userInput = 1;
// let result = getObjectById(arr, userInput);
// console.log(result);


// array 4-misol
// function toArray(str){
//        return str.split('').reverse().map(Number);
// }

// let string = "34567";
// let array = toArray(string);
// console.log(array);


////////////////////////////////
// 1-misol
// function rem(str) {
//   return str.split('').reverse().join('');
// }

// let str = "salom dunyo";
// let sum = rem(str);

// console.log(sum);

// 2-misol
// function separateNumbersAndWords(str) {
//   // Sonlarni arrayga solish
//   const numbers = str.match(/\d+/g).map(Number);
//   // So'zlarni stringga o'zlashtirish
//   const words = str.replace(/\d+/g, '').trim();
//   return {
//       numbersArray: numbers,
//       wordsString: words
//   };
// }
// let inputString = "1java2script3 5deve6lo4per";
// let result = separateNumbersAndWords(inputString);
// console.log(result.numbersArray); // [1, 2, 3, 5, 6, 4]
// console.log(result.wordsString);  // "javascript developer"

// 3-misol
// function sumPositiveNumbers(arr) {
//   return arr.reduce((sum, num) => {
//       return num > 0 ? sum + num : sum;
//   }, 0);
// }

// let numbers = [1, -5, 2, 3, 4, -7];
// let result = sumPositiveNumbers(numbers);

// console.log(result);
