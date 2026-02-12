let a =10 
let b =20
let age = 25
let flag
console.log("Addition of a+b = " + (a+b))
console.log("multiplication of a*b = " + (a*b))
console.log("division of a/b = " + (a/b))
console.log("subtraction of a-b = " + (a-b))
if(a>b){
    console.log("a is greater than b")
}else{
    console.log("a is not greater than b")
}
if(a<b){
    console.log("a is less than b")
}else{
    console.log("a is not less than b")
}
if(a==b){
    console.log("a is equal to b")
}else{    console.log("a is not equal to b")
}
if(a!=b){
    console.log("a is not equal to b")
}
if(a===b){
    console.log("a is strictly equal to b")
}else{
    console.log("a is not strictly equal to b")
}
console.log("remainder of a%b = " + (a%b))
console.log("power of a**b = " + (a**b))
console.log("increment of a = " + (++a))
console.log("decrement of a = " + (--a))

console.log("ternary operator example");

(age >= 18) ? console.log("you are an adult") : console.log("you are a minor");

switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
}

console.log("today is " + day);
flag = (day==="sunday") ? true : false;
console.log(flag);

(day === "sunday" && age >=18) ? console.log("you can go out") : console.log("you cannot go out");
(day === "sunday" || age >=18) ? console.log("you can go out") : console.log("you cannot go out");

let car = new Array(10);
console.log(car.length);

for (let i=0;i<car.length;i++){
    car[i]=i;
    console.log(car[i]);
}