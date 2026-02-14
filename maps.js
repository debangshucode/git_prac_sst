// creates an empty map 
let fruits = new Map();

fruits.set("apples",1000);
fruits.set("banana",666);
fruits.set("apple",5550);

let fruits1 = new Map([
    ["oranges",900],
    ["mango",900],
    ["Strawberry",900],
    ["Guava",900],
])


console.log(fruits.get("apples"))

for (let x of fruits.keys()) {
 console.log(`It will return keys only such as - ${x}`)
}


for (let x of fruits.entries()) {
 console.log(`It will return key value pair such as - ${x}`)
}

fruits.forEach (function(value,key) {
  console.log(`it will return value and keys such as - "${value},${MediaKeySession}", if only only have one parameter then it will return the value only - "${value}"`);
})

// Map.values() returns value only 

// we can use obj as keys as its a important feature in maps 

let Cars ={
    name:"BMW",
    Year:"2023"
}
let Bike ={
    name:"zx10r",
    Year:"2022"
}
let Property ={
    name:"House",
    Year:"2020"
}

let PersonP = new Map();

PersonP.set(Cars,"Pending");
PersonP.set(Bike,"Done");
PersonP.set(Property,"Done");

console.log(PersonP.get(Cars))
console.log(PersonP.forEach((x,y)=>{console.log(x,y)}));


// Map.groupBy() use a callback fnc to group same elem together 

const Veg = [
  {name:"veg_apples", quantity:300},
  {name:"veg_bananas", quantity:500},
  {name:"veg_oranges", quantity:200},
  {name:"veg_kiwi", quantity:150}
]; //array of objs

function myCallback({name}){ // call back fnc it takes the parameter as obj keys 
    return name === "veg_apples" ? "ok" : "low";
}


console.log(Map.groupBy(Veg,myCallback)) // group by fnc uses the array as first and the call back fnc as 2nd parameter


// weakmap 

let myMap = new WeakMap();

let obj = {fname:"Debangshu",lname:"Dey"};

myMap.set(obj, " player");

// weak maps and sets are not iterable 
