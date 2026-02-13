let letters = new Set(["a","b","c","d"]);
letters.add("e");
console.log(letters);
letters.delete("b");
console.log(letters);
// sets only carry unique values

console.log(letters.has("c"));  

let myIterator = letters.values();
console.log(myIterator);
let text = "";
for (let entry of letters) text+=entry;
console.log(text);