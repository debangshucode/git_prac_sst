//Q1 You are given an array of numbers. Filter out all numbers less than or equal to 10, and then double each of the remaining numbers. Return the final array.
let numbers = [5, 12, 3, 20, 8, 15];
let result = numbers.filter(num => num > 10).map(num => num * 2);
console.log(`Q1:  ${result}`);
//Q2 Write a function that takes a string and returns it reversed.
let str ="Hello Debangshu"
console.log(`Q2: ${str.split("").reverse().join("")}`)
//Q3 You have an array of objects where each object contains a  name and a score. Sort the array in descending order of score.
let obj1 = {Name:"DEB",Score:10}
let obj2 = {Name:"RAJ",Score:6}
let obj3 = {Name:"WWW",Score:20}
let arr = [obj1,obj2,obj3]
console.table(arr.sort((a,b)=>{return b.Score-a.Score}));
//Q4 Given a sentence, count how many times each word appears and return the result as an object where keys are words and values are their counts.
let str1 = "Bottle";
function checkF(str1){
    let obj ={};
    for(let x of str1){
        obj[x]=(obj[x]||0)+1;
    }
    return obj;
}
console.log(checkF(str1))
//Q5 Write a function that checks if a given string is a palindrome. The check should be case-insensitive and should ignore spaces.
let str2 = "ABC cba";
function isPalindrome(str2){
    let str3 = str2.replace(" ","").toLowerCase();
    let str4 =str3.split("").reverse().join("");
    return str3 === str4; 
}
console.log((isPalindrome(str2))?"Q5 Palindrome":"Q5 Not Palindrome")


//Q6 You have an array containing duplicate values. Remove all duplicates without using set and return the cleaned array.
let arr1 = [1, 2, 3, 2, 4, 1, 5];
let uArr1 = arr1.filter((v,i)=> {return arr1.indexOf(v)===i});
console.log(`Q6 : ${uArr1}`)
//Q7 Write a function that splits an array into chunks of a given size and returns them as an array of arrays.
function arArr(arr,size){
    let res = [];
    for (let i=0;i<arr.length;i+=size){
        res.push(arr.slice(i,i+size));
    }
    return res;
}
console.log("Q7")
console.log(arArr(arr1,2))
//Q8 Given a sentence, return a new sentence where the first letter of every word is capitalized.
let sen = "hi how are u";
function capitalize(){
    let split = sen.split(" ");
    let newSen = split.map((x)=>{return x.charAt(0).toUpperCase()+x.slice(1)})
    return newSen.join(" ");
}
console.log(`Q8 : ${capitalize(sen)}`)
//Q9 Convert an object into an array of key, value pairs.
let Person = { 
    Name: "Debangshu",
    Age:26
}
let pArr = Object.entries(Person);
console.table(pArr)
//Q10 Given a string, count how many times each character appears (ignoring spaces) and return the result as an object.
let word = "Heyyy my name is Debangshu";
function checkF(str){
    let cleanW = str.replaceAll(" ","");
    let obj ={};
    for(let x of cleanW){
        obj[x]=(obj[x]||0)+1;
    }
    return obj;
}
console.log(checkF(word))
//Q11 Flatten a deeply nested array into a single-level array.
let nArr = [[1,[2,3]],[[2,3],4],[[[3,4],3],5]]
console.log(`Q11 : ${nArr.flat(Infinity)}`)
//Q12 Write a function that finds the largest and smallest number in an array.
function findMaxMin(arr){
    let sArr = arr.sort((a,b)=>{return a-b})
    console.log(`max: ${sArr[sArr.length-1]}, min: ${sArr[0]}`)
}
findMaxMin(arr1)
//Q13 Given two arrays, return a new array containing only the elements that are present in both.
let a1 =[1,2,3,4,5],b = [2,5,4,7,8]
let resArr =[]
function sameElm(arr1,arr2){
    for(let x of arr1){
        if(arr2.includes(x)){
            resArr.push(x);
        }
    }
    return resArr;
}
console.log(`Q13 : ${sameElm(a1,b)}`)


 