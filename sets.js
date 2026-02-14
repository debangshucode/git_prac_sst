let letters = new Set(["a","b","c","d"]);
letters.add("e");
console.log(letters);
letters.delete("b");
console.log(letters);
// sets only carry unique values and remove duplicates 

console.log(letters.has("c"));  

let myIterator = letters.values();
console.log(myIterator);
let text = "";
for (let entry of letters) text+=entry;
console.log(text);
let vowels = new Set(["a","e","i","o","u"]);
let newLetters =new Set(["p","q","r","s","t"]);
let SunLetter = new Set([...letters].filter(x=>vowels.has(x)));
let union = letters.union(vowels);
console.log(union);
let diff = letters.difference(vowels);
console.log("diff");
console.log(diff);
let inter = letters.intersection(vowels);
console.log(inter);
console.log(SunLetter.isSubsetOf(letters));
console.log(SunLetter);
console.log(letters.isSupersetOf(SunLetter));
console.log(letters.isDisjointFrom(newLetters));
console.log(letters.symmetricDifference(vowels));

// js weakset -----------

let mySet =new WeakSet();

let myObj = {fname:"Debangshu",lname:"Dey"};

mySet.add(myObj);
track(myObj)
console.log(`Dose the obj is in set : ${(mySet.has(myObj) ? "Yes" : "No")}`);
console.log(mySet)


function track(v){
    if(mySet.add(myObj)){
        console.log(`${myObj.fname} is visiting `);
    }else{
        mySet.add(v);
        console.log(`${myObj.fname} is visiting for the first time`);
    }
}

console.log(mySet.WeakMap(myObj));