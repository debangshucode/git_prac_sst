// What is the difference between ; optional vs required?
//ans : js will automatically assign ; but for the function expression we have to provide ; for js ; is optional most of the time , for other languages like c++ it is not 
// What happens if you forget let/var/const?
//ans : it will declear as a global variable 
// Is JavaScript case-sensitive?
//yes 
// What is Automatic Semicolon Insertion?
//at end of each statement js insert semicolon automatically 
// What will this output?

// console.log("5" - 2);
//3

// Can you declare variable starting with number?
// no
// let $name = "Ezio";
// works 

// What is strict mode?
// js works strictly in strictmode so the hoisting not works there , good for optimize code 
// What does "use strict" prevent?
//it prevents var re-delearation 
// What is a statement vs expression?
//statemnt is a line of code which execute and expression is var = function ()



// 1️⃣ What is hoisting?
// hoisting shifts the delcearation at top for ex if we use var a before it is bening declear or defined then it shows undefined because var a is being define at the top ex-{
//console.log(a)
//var a ;
//will become 
//var a ;console.log(a)
//}
// What gets hoisted?
//the initialization 
// What does NOT get hoisted?
//value 
// 2️⃣ Difference between var, let, and const?
// Explain in terms of:
//
// Scope
//let const are blocked scope and var is function scope 
// Redeclaration
//we can re-declear var not let and const 
// Reassignment
//we cannot reassign const but can let and var 
// Hoisting
//var supports hoisting and return undefined while let const throw ref error 

// 3️⃣ What is Temporal Dead Zone (TDZ)?
// temporal deadzone is basically when we try to access a variable before it gets initialize  
// Give example.
//console.log(a)
//let a - here a is in temporal deadzone 
// 4️⃣ What will this output and why?
// console.log(a);
// var a = 10;
//undefined beacause js will move the decleration at the top means var a , then perform console.log then assign value 10 to a 
// 5️⃣ What will this output and why?
// console.log(b);
// let b = 10;
//reff errror because let does not support hoisting and it will give refference error 
// 6️⃣ Can you modify a const object? Why?
//yes we can modify a const obj as obj.propertys , because it is modifiation not re-assign 
// Example required.
//const obj ={ name : "name ", age : 20} ; obj.name = "deb"
// 7️⃣ What is the difference between:
//
// undefined
//undefined means the value is not defined 
// not defined
//
// null
//null is a object type and we have to set null to a variable unlike undefined it is not auto set to empty variables 
//
// 8️⃣ What happens if you redeclare:
// let x = 10;
// let x = 20;
//it will throw error 
//
// And what about var?
//it works 
//
// 9️⃣ What is block scope? Give example.
//{let a =10 } console.log(a) --- throw error because we try to access a outside it scope 
// 🔟 What is shadowing?
//dont know 
// Example required.

/*
1️⃣ What is the difference between == and ===?
== does not check type  ===checks type 
Give one example where they give different results.
10 == "10" true , 10 === "10" false 
2️⃣ What will this output and why?
console.log(0 == false);
console.log(0 === false);
true 
false (as 0 is number and false is boolian )
3️⃣ What will this output?
console.log(null == undefined);
console.log(null === undefined);
true 
false (null is obj and undefined is undefined type )

Explain why.

4️⃣ What does the ! operator do?
invert the result or boolian expression means !true = false ,it means not 
What is the output?

console.log(!"hello"); false 
console.log(!0);true 

5️⃣ What is short-circuiting in JavaScript?
it means setting default if true or false 
Explain using && and ||.
let a =10 ; let b = true && 20 
means b value set to 20 if true like we can do b= a && 20 here a is true or truthy so b value set to 20 
and || set value in false 
6️⃣ What will this output?
console.log(5 && 0);
console.log(5 || 0);
0 because 5 true so 0 is assign 
5 beacause 5 true so 5 assign 

Explain why.

7️⃣ What is the ?? (Nullish Coalescing) operator?
it is use to set default value like if first value is null or undefined then a default is set 
How is it different from ||?
dont know 
Example required.

8️⃣ What will this output?
let x = "5";
console.log(+x);
console.log(typeof +x);
5 
number 
beacuse + oporator at front of string convert it to number 
Explain.

9️⃣ What is operator precedence?
(*>/>+>-)
Which runs first?

console.log(2 + 3 * 4);
3*4=12 12+2 =14
🔟 What will this output?
console.log([] == false);
console.log([] === false);
false 
false 

This one tests deep understanding 😈
*/



/*
1️⃣ List ALL falsy values in JavaScript.
null ,undefined , "",0,false
(No missing allowed.)

2️⃣ What will this output?
if ("0") {
  console.log("true");
} else {
  console.log("false");
}
true

Explain why.
because "0" is true as it is non-empty string 
3️⃣ What will this output?
if ([]) {
  console.log("yes");
}
true as empty array is truthy

Why?

4️⃣ What will this output?
if (null) {
  console.log("A");
} else {
  console.log("B");
}
b as null is falsy 
5️⃣ Does switch use strict comparison (===) or loose comparison (==)?
it uses ===
6️⃣ What will this output?
let x = 2;

switch (x) {
  case "2":
    console.log("string");
    break;
  case 2:
    console.log("number");
    break;
}
number
7️⃣ What happens if you remove break in switch?
it will iterate all the cases 
Example required.
let x = 2;
switch (x) {
  case 2:
    console.log("number");
    
  case "2":
    console.log("string");
    break;
}
    output number string 
8️⃣ Rewrite this using ternary operator:
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
  (age >=18)?console.log("Adult"):console,log("Minor");

9️⃣ What is nested if?
if(){
    if(){
    }
    }

    one if statement inside another if 
When should it be avoided?
to much confusion and costly 
🔟 What will this output?
let a = 5;

if (a = 10) {
  console.log("yes");
} else {
  console.log("no");
}
yes , 
inside if statement a assing to 10

This one checks deep understanding 😈
*/


/*
1️⃣ What is the difference between for, while, and do...while?
while check condition first and then iterate if do while iterate at least one , even if condition false as it do iteration first then check condition , 
When would you use each?
when traversing array use for , when check condition to itarate use while , when sitiuation is at least iterate once use do while 
2️⃣ What will this output?
for (let i = 0; i < 3; i++) {
  console.log(i);
}
0,1,2
3️⃣ What will this output?
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}
  0,1,2

4️⃣ What will this output?
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 0);

0
Explain why. as do while itarate atleast one first do then check conditon 

5️⃣ What is the difference between:

for...in-return index 

for...of - return values 

Which one is better for arrays?
for of
6️⃣ What will this output?
let arr = ["a", "b", "c"];

for (let i in arr) {
  console.log(i);
}
0,1,2
7️⃣ What will this output?
let arr = ["a", "b", "c"];

for (let i of arr) {
  console.log(i);
}
"a", "b", "c"
8️⃣ What does break do?
break from the loop like go out from the loop 
What does continue do?
skip the current iteration 
Example required.
let arr = [1,2,3,4,5,6,7,8,9,0]
for (i of arr){
    if(i==3) continue; 
    if(i==9) break;
    console.log(i);// 3 will not print 1,2,4,...8. 9 and 0 not print 
}
9️⃣ What is an infinite loop?
which does not stop , because of wrong condition
Give example.
while (0===0 ){
console.log(a)}
🔟 What will this output?
for (var i = 0; i < 3; i++) {}

console.log(i);
2

This tests scope knowledge 😈
*/

//-----------------------------------------------------------------
/*
1️⃣ What is the difference between:
'hello'
"hello"
`hello`
all are string , if we use 'hello' then we can use "" inside string like 'hello "Debangshu"' vice verca for "hello"
`hello` here we can use '' "" both also expressions like ${x+1} inside it 

When should you use backticks?
when we have to show expressions or values inside string 
2️⃣ What will this output?
console.log("5" + 5);55
console.log("5" - 5);0


Explain why.
for the first case js will perform concatination and convert the 5 in string 
for second case "5" converted to number as - is a arithmatic operation perfomed on number but + can use for additon also for concat 
3️⃣ How do you check if a string contains a substring?
atr1.includes("abc") 
Example required.
str1  = "abcd"
str1.includes("abc")
4️⃣ What is the difference between:

slice() it accepts negetive index , takes parameter like this (star index ,end  index  ), slice from start to end-1 index 

substring() cannot accept negetive index (start,end) slice from start to end-1 index 

Any special behavior difference? 

5️⃣ What does trim() do?
trim the white space form first and last of a string 
What will this output?

console.log("  hello  ".trim().length);
5
6️⃣ How do you convert:

String → Number
let a ="abc"
+a
Number → String
let a =10 
a.toString()
Example required.

7️⃣ Are strings mutable or immutable?
immutable
Example to prove your answer.
we cannot change in string using its index 
8️⃣ What will this output?
let str = "hello";
str[0] = "H";
console.log(str);
hello as string is immutable 

Why?

9️⃣ How do you reverse a string?
let str = "addwdw"
str.spilt("").reverse().join("")
(Without using built-in reverse method directly on string)

🔟 What will this output?
console.log("hello" == new String("hello"));
console.log("hello" === new String("hello"));

true 
false
This tests deep understanding 😈
*/

//------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
/* 
1️⃣ What is NaN?
NaN means not a number ,type of NaN is number 
Is NaN == NaN true or false? Why?
false , dont know why
2️⃣ What will this output?
console.log(0 / 0); NaN, why?
console.log(typeof NaN); Number

3️⃣ What is the difference between:

Number(make the string to number )

parseInt(make the string to integer )

parseFloat(make the string to floating value )

Example required.
int i=5.5
praseInt(i) - 5
parseFloat(i)-5.5
Number(i)-5.5
4️⃣ What is Infinity in JavaScript?
Infinity is a number type in js , it produces when a expression goes to infinity like 1/0, we can say it is a silent logical error 
Give example that produces it.
1/0
5️⃣ What will this output?
console.log(0.1 + 0.2);
0.30004 something like this as js have wrong calculation with float to fix it we need to do (0.1/10 + 0.2/10)

Why does this happen?
dont know
6️⃣ How do you round a number?
Math.round(1.5) =2
Down
Math.floor(1.5) =1
Up
Math.ceil(1.5) =2 
Normal rounding
Math.round(1.5) =2 
Example required.

7️⃣ What does toFixed() return?
toFixed return the string to a spesific number of decimel value like for ex - 3.55.toFixed()=4 and same with toFixed(1)=3.5
What will this output?

let num = 10.567;
console.log(num.toFixed(2)); = 10.56
console.log(typeof num.toFixed(2));= string

8️⃣ What is the maximum safe integer in JavaScript?
dont know
Why is it called “safe”?

9️⃣ How do you check if a value is a number?
using typeOf
Example required.
let i =10
typeOf(10)=number
🔟 What will this output?
console.log(1 / 0);infinity 
console.log(-1 / 0); -infinity 

Explain.
*/

//=================================================================

/* 
1️⃣ What is the difference between:

Function Declaration
function abc(){}

no need to store in a var 
can be hoisted 


Function Expression
let abc = function(){
}
need to store in a variable 
act as variable cannot be hoisted , if delear with let or const then cannot redeclear 
Give example of both.

2️⃣ What is an Arrow Function?
arror function is a short way to write a function for ex - (a,b )=>{ return } also can write like this x=>x+1
How is it different from normal function in terms of:
arrow function is easy to write , this keyword not support in arrow function and it is a function expression 
this
not work in arrow fnc 
arguments
no need to give bracket for single args 
Hoisting
do nt support hoisting for arrow fnc 
3️⃣ What will this output?
greet();

function greet() {
  console.log("Hello");
}
Hello 

And what about this?

greet();

var greet = function() {
  console.log("Hello");
};
undefined

Explain clearly.
first one is Function Declaration which supports complete hoisting and can be call before decleare and 2nd one is function expression  which works as a variable so give same result as var , or if declear with let and const the ref error 
4️⃣ What is a Callback Function?
callback function is a function use as a parameter in anoter function 
Give real example.
function setTimeOut(callback()){
  console.log("setTimeOutfunction")
  callback()
}
  function callback(){
  console.log("callbackfnc")}

  setTimeOut(callback());
5️⃣ What is a Higher-Order Function?
a function which take another function as argument or return a function
Give example.
for ex .map,.filter 
6️⃣ What is a Closure?
closure is inner function can use the variable of outer function even if the outer function is ended 
Explain with example.
function outer(){
let count = 0
  return function inner(){
  count++
  return count;
  }
}
  let count1 = outer()
  console.log(count1)1
  console.log(count1)2
  let count2=outer()
  console.log(count2)=1
(Important interview question 😈)

7️⃣ What is an IIFE?
it is a function which calls imideately after define 
Why do we use it?
when we need to run a function only one time 
Example required.
(function(){
}());
8️⃣ What are default parameters?
default parameter are the values to set if no argument is passed for ex - function abc(a,b){} now when call abc(a), here b stays undefined but in defult parameter function(a=0,b=0){} if we call same way as previous b value is set as 0 
Example required.

9️⃣ What is the rest parameter (...)?
rest is use to give multiple element at once rater than send them in a function by a,b,c,d,and so on 
Example required.
let arr =[1,2,3,4,5,5,56]
function abc(...arr){
}
🔟 What will this output?
function test() {
  console.log(this);
}

test();
dont know 

And what changes in strict mode?
*/

//==============================================================================
/*
How do you create an object in JavaScript?
Give 3 different ways.
let obj ={};
let obj = new Object()
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Let deb = new Person("deb","deb",23,"blue")

2️⃣ What is the difference between:
obj.name
obj["name"]
both are to access name property in a object 

When must you use bracket notation?
dont know 
3️⃣ How do you:

Add a property?
let obj={}
obj.name = "Debangshu"
Update a property?
obj.name = "ABC"
Delete a property?
delete obj.name
Example required.

4️⃣ What will this output?
let obj = { a: 1 };
let copy = obj;

copy.a = 5;

console.log(obj.a);
5

Explain why.
shallow copy, need to do structuredclone(obj) 
5️⃣ What is the difference between:

Shallow copy
changes one change in another as both holds same reference 
Deep copy
changes are independent , different references just value or elements get copied or cloned 
Give example.
let obj = { a: 1 };
let copy = obj;

copy.a = 5;

console.log(obj.a);5 as it is sahllow copy 
let copy = structuredClone(obj)
copy.a=5
console.log(obj.a); 1 as deepcopy 
console.log(copy.a); 5

6️⃣ What is object destructuring?
object destruction is using reset operator ... it uses to assgin the propertys of a obj to diff variables 
Example required.
let obj={name:"hfujefhj",age:234,hhjh:"wdwd"}
const{name,age}=obj

7️⃣ What is the this keyword inside an object method?
it refers to the object it self
Example required.
this.name = "debangshu" means the the current object's name property value assign to "debangshu"
8️⃣ What will this output?
let user = {
  name: "Ezio",
  greet: function() {
    console.log(this.name);
  }
};

let fn = user.greet;
fn();
Ezio

This tests deep understanding 😈

9️⃣ What is the difference between:

Object
stores key value pair but keys can only be string 
Map
store key value pair but key or value can be any type 
When should you use Map instead?
when i need to store keys as any value or diff values 
🔟 What will this output?
let obj = { a: 1 };
let newObj = { ...obj };

newObj.a = 10;

console.log(obj.a);
1
as it is a deep copy of a obj using rest operator 
Explain.
*/

//=================================================================================================
/*
1️⃣ What is the difference between:

map()
map return a new array 
forEach()
does not return anything use for console.log()
When should you use each?
when i need to create a new modified array from one array use map()
when need to log the output of operation on a array use forEach()
2️⃣ What does filter() return?
filter return the values which satisfy a condition
What will this output?

let arr = [1, 2, 3, 4];
let result = arr.filter(n => n > 2);
console.log(result);
[3,4]
3️⃣ What does reduce() do?
reduce the array to sum
What will this output?

let arr = [1, 2, 3];
let result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result);
6
it will sum 1+2 then 3+3 and return 6

Explain step-by-step.

4️⃣ What is the difference between:

slice()-slice array from start to end-1 

splice()-splice takes index , values to remove or replace, items 

Which one mutates the original array?
splice
5️⃣ What will this output?
let arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
console.log(arr);[0,1,2,3,4]

6️⃣ Does sort() modify the original array?
yes
What will this output?

let arr = [10, 2, 5];
arr.sort();
console.log(arr);
[10, 2, 5]

Why?
sort() need a compare function 
7️⃣ How do you remove duplicates from an array?
using set
let arr= [1,1,1,11,1,2,3]
let arrSet = new Set([...arr])
Example required.

8️⃣ What will this output?
console.log([1,2,3] == [1,2,3]);
console.log([1,2,3] === [1,2,3]);

false
Explain why.dont know 

9️⃣ What is array destructuring?
dont know, may be [2,...arr]
Example required.

🔟 What will this output?
let arr = [1, 2, 3];
let newArr = arr;

newArr[0] = 100;

console.log(arr[0]);
100 
reference copy


*/