// 1️⃣ Write a program to reverse an array using built-in JavaScript methods.
{
    let arr: number[] = [1, 23, 4, 45, 5, 6, 2]
    console.log(`Q1 : ${arr.toReversed()}`)
}
// 2️⃣ Sort an array of numbers in ascending order without using loops.
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4,]
    arr.sort((a: number, b: number): number => a - b)
    console.log(`Q2 : ${arr}`)
}
// 3️⃣ Demonstrate the difference between slice() and splice() methods in arrays.
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let sliceArr: number[] = arr.slice(1, 3)
    arr.splice(1, 3)
    console.log(`Q3 : slice: ${sliceArr}, splice: ${arr} `)
}
// 4️⃣ Create a new array by doubling each element of another array using the map() method.
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let newArr: number[] = arr.map((x: number): number => x * 2)
    console.log(`Q4 : ${newArr}`)
}
// 5️⃣ From a given array, return only those numbers that are greater than 50 using filter().
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let newArr: number[] = arr.filter((x: number): boolean => x > 50)
    console.log(`Q5 : ${newArr}`)
}
// 6️⃣ Calculate the sum of all numbers in an array using the reduce() method.
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let sum: number = arr.reduce((acc: number, cur: number): number => {
        return acc + cur;
    }, 0)
    console.log(`Q6 : ${sum}`)
}
// 7️⃣ Check if all numbers in an array are even using every(), and if at least one is even using some().
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let all: boolean = arr.every((x: number): boolean => x % 2 === 0);
    let some: boolean = arr.some((x: number): boolean => x % 2 === 0)
    console.log(`Q7 every : ${all}, some : ${some}`)
}
// 8️⃣ Split a string by a specific character and then join the result with a different separator.
{
    let str: string = "hi debangshu how ara you";
    let str2: string = str.split(" ").join(",");
    console.log(`Q8 : ${str2}`)
}
// 9️⃣ Replace all occurrences of a word in a string with another word using a single JavaScript statement.
{
    let str: string = "hi debangshu how ara you,hi wasim how are you";
    let str2: string = str.replaceAll("hi", "Yo")
    console.log(`Q9 : ${str2}`)
}
// 🔟 Remove extra spaces from the beginning and end of a string and convert it to uppercase.
{
    let str: string = "            hi debangshu how ara you              ";
    let str2: string = str.trim().toUpperCase();
    console.log(`Q10 : ${str2}`)
}
// 1️⃣1️⃣ Extract all keys, values, and key–value pairs from an object using built-in object methods.
{
    interface Person {
        Name: string;
        Age: number;
        Address: string
    }
    const objPerson: Person = {
        Name: "Debangshu Dey",
        Age: 22,
        Address: "Ahmedabad"
    }
    let keys: string[] = Object.keys(objPerson);
    let value: unknown[] = Object.values(objPerson);
    let keyValue: [string, any][] = Object.entries(objPerson);
    console.log(`Q11 : keys : ${keys}`)
    console.log(`Q11 : values : ${value}`)
    console.log(`Q11 : keyValue : ${keyValue}`)
}
// 1️⃣2️⃣ Use object destructuring to extract specific properties from an object and store them in separate variables.
{
    const objPerson = {
        Name: "Debangshu Dey",
        Age: 22,
        Address: "Ahmedabad"
    }
    const { Name, Age, Address }: { Name: string, Age: number, Address: string } = objPerson
    console.log(`Q12 : ${Name} | ${Age} | ${Address}`)
}
// 1️⃣3️⃣ Merge two objects into one using the spread operator and explain how duplicate keys are handled.
{
    interface Person {
        Name: string,
        Age: number,
        Address?: string,
        Number?: number,
    }
    const person1: Person = {
        Name: "string",
        Age: 22,
        Address: "string",
    }
    const person2: Person = {
        Name: "string",
        Age: 22,
        Number: 2345432234,
    }
    const person3: Person = { ...person1, ...person2 }
    console.log(`Q13 ${JSON.stringify(person3)}`)
}
// 1️⃣4️⃣ Extract one property from an object and group the remaining ones into a new object using the rest operator.
{
    const person1 = {
        Name: "string",
        Age: 22,
        Address: "string",
    }
    const { Name, ...AgeAddress }: { Name: string, [key: string]: string | number } = person1;
    console.log(`Q14 : Name : ${Name} and Rest : ${JSON.stringify(AgeAddress)}`)
}
// 1️⃣5️⃣ Remove duplicate elements from an array using the Set object.
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4];
    let set: number[] = [...new Set(arr)];
    console.log(`Q15 : ${set}`)
}
// 1️⃣6️⃣ Create a Map to store user data (like name and age) and retrieve one property using its key.
{
    let map: Map<string, string | number> = new Map<string, string | number>([["Name", "Debangshu"], ["Age", 22]]);
    console.log(`Q16 : ${Array.from(map)}`)
}
// 1️⃣7️⃣ Access a deeply nested property safely using optional chaining (?.) to avoid runtime errors.
{
    interface Home {
        sqrf: number,
        yeard?: {
            sqrf: number,
        }
    }
    function getYeard(home: Home): string | number {
        if (home.yeard?.sqrf === undefined) {
            return "No Yeard"
        }
        else return home.yeard.sqrf
    }
    const home: Home = {
        sqrf: 23,
    }

    console.log(`Q17 : ${getYeard(home)}`)
}
// 1️⃣8️⃣ Use the nullish coalescing operator (??) to provide a default value when a variable is null or undefined.
{
    interface Home {
        sqrf: number,
        yeard?: {
            sqrf: number,
        }
    }
    function getYeard(home: Home): string | number {
        return home.yeard?.sqrf ?? "no Yeard is available"
    }
    const home: Home = {
        sqrf: 23,
    }

    console.log(`Q18 : ${getYeard(home)}`)
}
// 1️⃣9️⃣ Find the first number greater than 25 in an array and its index using find() and findIndex().
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let num: number | undefined = arr.find((x: number): boolean => x > 25);
    let index: number | undefined = arr.findIndex((x: number): boolean => x > 25)
    console.log(`Q19 : number :${num}, index:${index}`)
}
// 2️⃣0️⃣ Flatten a deeply nested array into a single-level array using the flat() method.
{
    let arr: (number | number[])[] = [9, [76, 4], [3, 2], [57, 2, 4]]
    arr = arr.flat(Infinity)
    console.log(`Q20 : ${arr}`)
}
// 2️⃣1️⃣ You are given an array of numbers. Filter out all numbers less than or equal to 10, and then double each of the remaining numbers. Return the final array.
{
    let arr: number[] = [9, 76, 4, 3, 2, 57, 2, 4]
    let arr2: number[] = arr.filter((x: number): boolean => x > 10).map((x: number): number => x * 2)
    console.log(`Q21 : ${arr2}`)
}
// 2️⃣2️⃣ Write a function that takes a string and returns it reversed.
{
    let str: string = "ABCDE"
    function reverse(str: string): string[] {
        let strF: string[] = str.split("");
        for (let i: number = 0; i < strF.length / 2; i++) {
            let temp: string = strF[i]!;
            let x: number = i + 1;
            strF[i] = strF[strF.length - x]!
            strF[strF.length - x] = temp
            console.log(temp, strF[i], strF[strF.length - x])
        }
        return strF;
    }
    let str1 = reverse(str)
    console.log(`Q22 ${str1}`)
}
// 2️⃣3️⃣ You have an array of objects where each object contains a name and a score. Sort the array in descending order of score.
{
    interface Student {
        Name: string,
        Score: number
    }

    let arr: Student[] = [{ Name: "RAj", Score: 37 }, { Name: "Shan", Score: 57 }, { Name: "Pritam", Score: 9 }, { Name: "Sabya", Score: 100 }]
    arr.sort((a: Student, b: Student): number => {
        return (b.Name).charCodeAt(1) - (a.Name).charCodeAt(1) //sort based on name
    })
    console.log(`Q23 : ${JSON.stringify(arr)}`)
}
// 2️⃣4️⃣ Given a sentence, count how many times each word appears and return the result as an object where keys are words and values are their counts.
{
    let str: string = "HI HI HI HI HI hi HOW how How"
    let strAr: string[] = str.toLowerCase().split(" ");
    type objects = { [key: string]: number }
    let object = strAr.reduce((obj: objects, cur: string): objects => {
        obj[cur] = (obj[cur] || 0) + 1
        return obj
    }, {})
    console.log(`Q24 ${JSON.stringify(object)}`)
}
// 2️⃣5️⃣ Write a function that checks if a given string is a palindrome. The check should be case-insensitive and should ignore spaces.
{
    let str: string = "abc CBa"
    let str2: string = str.toLowerCase().replaceAll(" ", "");
    let str3: string = str2.split("").reverse().join("");

    (str2 === str3) ? console.log(`Q25 palindrome`) : console.log(`Q25 not palindrome`)
}
// 2️⃣6️⃣ You have an array containing duplicate values. Remove all duplicates without using set and return the cleaned array.
{
    let arr: number[] = [2, 2, 3, 3, 4, 5, 4, 5]
    let arr2: number[] = arr.filter((x: number, index: number): boolean => arr.indexOf(x) === index)
    console.log(`Q26 : ${arr2}`)
}
// 2️⃣7️⃣ Write a function that splits an array into chunks of a given size and returns them as an array of arrays.
{
    let arr: number[] = [2, 2, 3, 3, 4, 5, 4, 5]
    type DArr = number[][];
    function chunks(arr: number[], size: number): DArr {
        let arr2: DArr = [];
        for (let i = 0; i < arr.length; i += size) {
            arr2.push(arr.slice(i, size + i))
        }
        return arr2;
    }
    let arr2: DArr = chunks(arr, 3)
    console.log("Q27 -")
    console.log(arr2)
}
// 2️⃣8️⃣ Given a sentence, return a new sentence where the first letter of every word is capitalized.
{
    let str: string = "hi how are you"
    let str2: string[] = str.split(" ")
    let str3: string = str2.map((x: string): string => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")
    console.log(`Q28 : ${str3}`)
}
// 2️⃣9️⃣ Convert an object into an array of key, value pairs.
{
    interface Person {
        Name: string,
        Age: number
    }
    let obj: Person = { Name: "Debangshu", Age: 22 }
    let arr: [string, number][] = Object.entries(obj)
    console.log(`Q29 array of key-value pair : ${JSON.stringify(arr)}`)
}
// 3️⃣0️⃣ Given a string, count how many times each character appears (ignoring spaces) and return the result as an object.
{
    let str: string = "aa bb bccc cdd ddd"
    type Objects = { [key: string]: number }
    function count(str: string) {
        let str2 = str.replaceAll(" ", "").split("");
        return str2.reduce((obj: Objects, x: string) => {
            obj[x] = (obj[x] || 0) + 1;
            return obj;
        }, {})
    }
    console.log(`Q30 occurence of characters : ${JSON.stringify(count(str))}`)
}
// 3️⃣1️⃣ Flatten a deeply nested array into a single-level array.
{

    type NestedNumberArray = (number | NestedNumberArray)[];
    let arr: NestedNumberArray = [1, 2, 3, [2, 3, 4, 5, [6, 4, 3], [3, 5, 5, 56], [4, 34, 3, 5]]]
    let arr2: number[] = (arr as number[]).flat(Infinity) as number[]
    console.log(`Q31 flatten a deeply nested array : ${arr2}`)
}
// 3️⃣2️⃣ Write a function that finds the largest and smallest number in an array.
{
    let arr: number[] = [1, 9, 2, 4, 12, 6, 1, 0]
    function maxMin(arr: number[]): { [key: string]: number } {
        let max: number = Math.max(...arr)
        let min: number = Math.min(...arr)
        return { max, min }
    }
    let res: { [key: string]: number } = maxMin(arr);
    console.log(`Q32 Max: ${res.max} | Min: ${res.min}`)
}
// 3️⃣3️⃣ Given two arrays, return a new array containing only the elements that are present in both.
{
    let arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    let arr1: number[] = [10, 9, 8, 7, 6, 5, 4]
    let arr2: number[] = arr.filter((x: number): boolean => arr1.includes(x))
    console.log(`Q33 1st array : ${arr} | 2nd array : ${arr1} | elements have both array : ${arr2}`)
}
// 3️⃣3️⃣ merge 2 array into one while removing the obj that have same age 
{
type Objects = {[key: string]: number | string}
let arr: Objects[] = [{id:1,Name:"Debangshu",Age:22},{id:1,Name:"wasim",Age:23}]
let arr1: Objects[] = [{id:1,Name:"ayush",Age:22},{id:1,Name:"arpan",Age:21}]
let merge = [...arr, ...arr1];

let arr2 = merge.filter((x:Objects, index, self:Objects[]):boolean =>
  self.filter((y:Objects):boolean => y.Age === x.Age).length === 1
);
console.log(`Q33 1st array : ${JSON.stringify(arr)} | 2nd array : ${JSON.stringify(arr1)} | after removing duplicate age  : ${JSON.stringify(arr2)}`)
}
// 