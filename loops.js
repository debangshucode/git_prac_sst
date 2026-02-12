// for loop example--------------------------------

console.log("for loop example");
for (let i=0;i<10;i++){
    console.log(i);
}

// while loop example--------------------------------
console.log("while loop example");
let j=0;
while(j<10){
    console.log(j);
    j++;
}
// do while loop example--------------------------------
console.log("do while loop example");
let k=11;
do{
    console.log(k);
    k++;
}
while(k<10);

// continue and break statement example -------------------------------
console.log("continue and break statement example");
for (let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    if(i===8){
        break;
    }
    console.log(i);
}