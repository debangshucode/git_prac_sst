let x = 123;

console.log(x.toString(2));
console.log(typeof x.toString(2));

console.log("---toExponential---");
{
  let x = 9.656;
  console.log(x.toExponential(2));
  console.log(x.toExponential(4));
  console.log(x.toExponential(6));
}
console.log("---toFixed---");
{
  let x = 9.656;
  console.log(x.toFixed(0));
  console.log(x.toFixed(2));
  console.log(x.toFixed(4));
  console.log(x.toFixed(6));
}
console.log("---toPrecision---");
{
  let x = 9.656;
  console.log(x.toPrecision());
  console.log(x.toPrecision(2));
  console.log(x.toPrecision(4));
  console.log(x.toPrecision(6));
  console.log(x.valueOf());
  console.log(Number.isFinite(x));
  console.log(Number.isNaN(x));
  console.log(Number.isSafeInteger(x));
  console.log(Number.parseInt("-10.23"));
  
}
// ---JavaScript Number Properties-------------------------------
{
    let x =  Number.POSITIVE_INFINITY;
    console.log(x);
}
    
// -------JavaScript Number constructor-------------------------------
{
    let x = 130.334;
    console.log(x.constructor);
}