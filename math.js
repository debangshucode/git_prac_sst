console.log(Math.E  ,      // returns Euler's number
Math.PI   ,    // returns PI
Math.SQRT2  ,  // returns the square root of 2
Math.SQRT1_2 , // returns the square root of 1/2
Math.LN2   ,   // returns the natural logarithm of 2
Math.LN10  ,   // returns the natural logarithm of 10
Math.LOG2E ,   // returns base 2 logarithm of E
Math.LOG10E, ) //returns base 10 logarithm E
let x=6.7;
console.log(Math.round(x))	//Returns x rounded to its nearest integer
console.log(Math.ceil(x))	//Returns x rounded up to its nearest integer
console.log(Math.floor(x))	//Returns x rounded down to its nearest integer
console.log(Math.trunc(x))	//Returns the integer part of x (new in ES6)
console.log(Math.pow(x,2))

console.log(Math.sign(0))
console.log(Math.sign(4))
console.log(Math.sign(-4))

console.log(Math.abs(-4.7))//return absolute possetive value of x


Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
console.log(Math.random()) //returns random values 0-1 alws less than 1;
console.log(Math.random()*10) //returns 0-9 random values 