function sayHello(name) {
    return "hello " + name;
}
console.log(sayHello("Debangshu"));
document.getElementById("demo").innerHTML = sayHello("Debangshu Dey");

function createCalculator(){
    let history = [];

    return{
        add: function(a,b){
        let result = a+b;
        history.push(`${a} + ${b} = ${result}`);
        return result;
    },
    substract: function(a,b){
        let result = a-b;
        history.push(`${a}-${b} = ${result}`);
        return result;
    },
    multiply: function(a,b){
        let result = a*b;
        history.push(`${a}*${b} = ${result}`);
        return result;
    },
    divide: function(a,b){
        if(b===0){
            history.push(`division by zero error`);
            throw "Error: division by zero";
        }
        let result = a/b;
        history.push(`${a}/${b} = ${result}`);
        return result;
    },
    getHistory: function(){
        return history;
    },
    clearHistory: function(){
        history = [];
    }
    }
   
}
let calc = createCalculator();
let aditioon = calc.add(10,20);
console.log(aditioon);

const add = (a,b) => a+b;
console.log(add(5,10));

const abc = function(a){
    return a;
}