let name = "Debangshu 'Dey' Debangshu ";
console.log("Hello, " + name);
console.log(typeof name);

// string templates ------------------
let text = `He's name is "${name}"`;
console.log(text);

let result = 80;
console.log(`${name}s result is ${(result / 100) * 100}%`);

// Escape Characters
let newtext = "We are the so-called \\Humans\\ from the north.";
console.log(newtext);

// breaking a string into multiple ---------------------------------
let abc = "abc" + "def";
console.log(abc);

// string methods-------------------------------
// string codePointAt - This gives the actual Unicode code point. works better for emijis ES6
{
  let text = "HELLO WORLD";
  let code = text.codePointAt(4);
  console.log(code);
}
// string charCodeAt - This gives the UTF-16 code unit. works better for normal characters ES5
{
  let text = "HELLO WORLD";
  let code = text.charCodeAt(0);
  console.log(code);
}
//  For normal characters codePointAt and charCodeAt gives the same result real diff understand with emojis

// at()-index method
console.log(name.at(3));
// concat-------------------------------
{
  let str1 = "hello";
  let str2 = "world";
  console.log(str1.concat(" ", str2));
  console.log(str1 + " " + str2);
}

// extract part of string

console.log("extract part of string");
{
  let str = "hello world";
  console.log(str.slice(-5));
  console.log(str.substring(1, 10));
}

// uppecase and lowercase
{
  let str = "hello WORLD";
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
}
// well formed and broken string--------------------------------
console.log(name.isWellFormed());
let broken = "\uD83D";
console.log(broken.isWellFormed());
let welf = broken.toWellFormed();
console.log(welf);

// trim --------------------------------
{
  let str = "   hello world   ";
  console.log(str.trim());
  console.log(str.padStart(30));
}
// text.split("")-------------------------------
console.log(name.split(" "));

// JavaScript String Search ---------------------------------------------
let index = name.indexOf("Debangshu");
console.log(index);

{
  let text = "Please locate where 'locate' occurs!";
  console.log(text.search(/locate/));
  console.log(text.matchAll(/locate/g));
  console.log(text.includes("locate",20));
  console.log(text.startsWith("Please"));
}
