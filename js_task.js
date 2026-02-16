// 1️⃣ Write a program to reverse an array using built-in JavaScript methods.
 let arr = [9,2,0,4,6,3,7];
 console.log(`reversed array = ${arr.reverse()}`);
// 2️⃣ Sort an array of numbers in ascending order without using loops.
 console.log(`sorted array = ${arr.sort()}`);
// 3️⃣ Demonstrate the difference between slice() and splice() methods in arrays.
 let arr1 = arr.slice(0,2);
 console.log(`sliced array - ${arr1},orginal array ${arr}`)
 
 let arr2 = arr.splice(0,2,2,2);
 console.log(`spliced array - ${arr2},orginal array ${arr}`)
  
// 4️⃣ Create a new array by doubling each element of another array using the map() method.
 let dblArr = arr.map((x)=>{ return x*2});
 console.log(`double array = ${dblArr}`)
// 5️⃣ From a given array, return only those numbers that are greater than 50 using filter().
 let newArr = [10,90,70,30,29,50,60,70];
 let arr50 = newArr.filter((x)=>{ return x>50})
 console.log(`greater than 50 items are -${arr50}`)
// 6️⃣ Calculate the sum of all numbers in an array using the reduce() method.
 let sum = newArr.reduce((x,y)=>{return x+y})
 console.log(`sum of newArr is = ${sum}`)
// 7️⃣ Check if all numbers in an array are even using every(), and if at least one is even using some().
 console.log(`does all nums are even - ${newArr.every((x)=>{return x%2==0})}`)
 console.log(`Atleast one is even - ${newArr.some((x)=>{return x%2==0})}`)
// 8️⃣ Split a string by a specific character and then join the result with a different separator.
 let abc = "Have a nice day";
 spAbc= abc.replaceAll(" ","_");
 console.log(spAbc)
// 9️⃣ Replace all occurrences of a word in a string with another word using a single JavaScript statement.
 console.log(spAbc.replaceAll("a","A"));
// 🔟 Remove extra spaces from the beginning and end of a string and convert it to uppercase.
 let str="    abc   "
 console.log(`the string with spaces${str}`)
 console.log((str.trim()).toUpperCase())
// 1️⃣1️⃣ Extract all keys, values, and key–value pairs from an object using built-in object methods.
 const obj = {
    Name : "Debangshu Dey",
    Age : 24
 }
console.log(`keys of obj is ${Object.keys(obj)}`)
console.log(`values of obj is ${Object.values(obj)}`)
console.log(`Key-value pair of obj is ${Object.entries(obj)}`)
// 1️⃣2️⃣ Use object destructuring to extract specific properties from an object and store them in separate variables.


// 1️⃣3️⃣ Merge two objects into one using the spread operator and explain how duplicate keys are handled.



// 1️⃣4️⃣ Extract one property from an object and group the remaining ones into a new object using the rest operator.
 
// 1️⃣5️⃣ Remove duplicate elements from an array using the Set object.
 
// 1️⃣6️⃣ Create a Map to store user data (like name and age) and retrieve one property using its key.
 
// 1️⃣7️⃣ Access a deeply nested property safely using optional chaining (?.) to avoid runtime errors.
 
// 1️⃣8️⃣ Use the nullish coalescing operator (??) to provide a default value when a variable is null or undefined.
 let var1 = null;
 let var2 = var1 ?? "Default";
 console.log(`Default value when var is null : ${var2}`)
// 1️⃣9️⃣ Find the first number greater than 25 in an array and its index using find() and findIndex().
 console.log(`new array - ${newArr}`)
 let num25 = newArr.find((x)=>{return x>25})
 let num25I = newArr.findIndex((x)=>{return x>25})
 console.log(`The first number which is grater than 25 is -${num25}`)
 console.log(`The index of the first num that is grater than 25 is : ${num25I}`)
// 2️⃣0️⃣ Flatten a deeply nested array into a single-level array using the flat() method.
let nArr=[1, [2, 3, [4, 5]], 6, [7, [8, [9]]]]
console.log(`flat- ${nArr.flat(Infinity)}`);