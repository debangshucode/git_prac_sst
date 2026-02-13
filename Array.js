const cars = ["Saab", "Volvo", "BMW"];
console.log(cars.sort().reverse());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

cars[5] = "Audi";
console.log(cars);

// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array isArray()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array slice()
// Array splice()
// Array toSpliced()

// Array Search Methods
// Array indexOf()
// Array lastIndexOf()
// Array includes()
// Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()

let numbers = [4, 1, 16, 25];
numbers.sort((a, b) => a - b);
console.log(numbers);
let newNum =  numbers.flatMap((x)=>[x,x*2]);
console.log(newNum);
let sum = numbers.reduce((total,val)=>{return total+val},100);
console.log(sum);

let someOver16 = numbers.some((value) => value > 16);
console.log(someOver16);

let Name = "Debnagshu ";
console.log(Array.from(Name));

let myArr =Array.from(numbers, x => x * 2);
console.log(myArr);
let text = "";
let keys = fruits.keys();
for (let x of keys){
    console.log(x);
}

let arr3 = [numbers,...myArr];
console.log(arr3);
