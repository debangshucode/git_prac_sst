
//Function expression with-out function name , anonymous function 
let abc = function (a,b){
    return a+b
}
console.log(abc(1,2))

//function expression with named function . named function expression 
let cd = function fact(n){
    if(n<=1) return 1;
    return n* fact(n-1)
}
console.log(cd(5))
//fact() cannot be called outside the function , named function used for recursion 

//callback function

setTimeout(()=>{
    console.log("Hey it is a callback function example ")
},1000);

function call1(callback){
    console.log("the main function");
    callback();
}
function callback(){
    console.log("THis is call back function")
}


call1(callback);


// call() use to call a function - use another obj function 

const obj = {
    fullname : function(){
        return this.firstName+" "+this.lastName;
    }
}
const Person = {
    firstName:"Debangshu",
    lastName:"Dey"
}
console.log(`The full name of Person is ${obj.fullname.call(Person)}`)//Borrow the fullname function from obj 


function greet(msg){
    console.log(`${msg} ${this.firstName}`)
}
greet.call(Person,"Hello")//calling greet function for Person object when we use call it automatically takes the first parameter as this 

//in normal function this does not refer to the object Person 
function showName() {
  return this.name;
}

const person = { name: "John" };

// console.log(showName())
// console.log(showName.call(person))
// showName();
// showName.call(person);


//apply method is same as call but it does passes the arguments as a array for ex 
greet.apply(Person,["Hello"])

// both apply and call is not assign a function to a new function but Bind is use to do that 
//using bind new function can use the this of previous function 

let newFunction = greet.bind(Person,"Hello");
newFunction()


function multiply(a,b){
    return a*b;
}


//IIFE - Immediately invoked function expression 

//it is a function which is call immediately after defined 

(function(name){
    console.log(`hello ${name} this is a IIFE`)
})("Debangshu");

//closures

function counter(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}

let add = counter();
console.log(add(),add(),add())

/* .name use to get the name of the function 
    .length use to get the number of parameter accepted by the function 
    .toString represent the string of the function */

    