let arr = [1, 2, 34, 4];
for (let x in arr) {
  console.log(x); //prints the keys
}
for (let x of arr) {
  console.log(x); // prints the values
}
// mainly used in objs

const letters = new Set(["a", "b", "c"]);

for (let x of letters) {
  console.log(x);
}

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const x of fruits) {
  console.log(x);
}


let myNumbers = {};

myNumbers[Symbol.iterator]= function (){
    let n = 0;
    done = false;
    return {
        next() {
            n+=10;
            if(n===100){done = true}
            return {value:n,done:done};
        }
    };
}

for (x of myNumbers){
    console.log(`This is iterable ${x}`)
}

let s=100,y=1;
function* Generator (s,y){
    yield s+y;
    yield s-y;
    return s*y;
}

console.log(Generator(s,y).next());