
// 1️⃣ Write a program to reverse an array using built-in JavaScript methods.
    {
        let arr = [1,23,4,5,6,7];
        arr.reverse();//mutates the orginal array
        console.log(`Q1  reversed array :${arr}`) 
    }
// 2️⃣ Sort an array of numbers in ascending order without using loops.
    {
        let Numbers = [28,3,26,3,65,34,3,2,67,78,1,99];
        Numbers.sort((a,b)=>a-b);
        console.log(`Q2 sorted array: ${Numbers}`)
    }
// 3️⃣ Demonstrate the difference between slice() and splice() methods in arrays.
    {
        let arr = [1,2,4,6,7,788,4];
        let arr1 = arr.slice(1,3); //returns a array with sliced items arr.slice(start , end-1)
        console.log(`Q3 slice array : ${arr1}, orginal array ${arr}`);
        arr.splice(1,3,0,0,0); // modify the orginal array by splice also can replace items from the array splice(Index, Numbers of items, item1 ,item2,..)
        console.log(`Q3 spliced array : ${arr}`)
    }
// 4️⃣ Create a new array by doubling each element of another array using the map() method.
    {
        let arr = [1,2,3,4,5,6,7,8,9,0]
        let double=arr.map(x=>x*2);
        console.log(`Q4 orginal array : ${arr},double array : ${double}`);
    }
// 5️⃣ From a given array, return only those numbers that are greater than 50 using filter().
    {
        let Numbers = [28,3,26,3,65,34,3,2,67,78,1,99];
        let filterArr = Numbers.filter(x=>x>50);
        console.log(`Q5 orginal array : ${Numbers},filtered array : ${filterArr}`);
    }
// 6️⃣ Calculate the sum of all numbers in an array using the reduce() method.
    {
        let Numbers = [1,2,3,4,5,6,7,8,9,0];
        let sum = Numbers.reduce((prv,cur)=>prv+cur)
        console.log(`Q6 orginal array : ${Numbers},Sum of array : ${sum}`)
    }
// 7️⃣ Check if all numbers in an array are even using every(), and if at least one is even using some().
    {
        let Numbers = [1,2,3,4,5,6,7,8,9,0];
        console.log(`Q7 IS all numbers in the array is Even : ${Numbers.every(x=>x%2===0)}`)
        console.log(`Q7 IS at least one number in the array is Even : ${Numbers.some(x=>x%2===0)}`)
    }
// 8️⃣ Split a string by a specific character and then join the result with a different separator.
    {
        let str ="Good morning to everyone"
        let str1 = str.split(" ").join(",")
        console.log(`Q8 Old string : ${str}, New String : ${str1}`)
    }
// 9️⃣ Replace all occurrences of a word in a string with another word using a single JavaScript statement.
    {
        let str = "His name is Arijit ,arijit is a girl"
        let str1 = str.replace(/Arijit/gi,"Ayush");
        console.log(`Q9 Old string : ${str}, New String : ${str1}`)
    }
// 🔟 Remove extra spaces from the beginning and end of a string and convert it to uppercase.
    {
        let str = "   His name is Arijit ,arijit is a girl   "
        let str1 = str.trim().toUpperCase();
        console.log(`Q9 Old string : ${str}, New String : ${str1}`)
    }
// 1️⃣1️⃣ Extract all keys, values, and key–value pairs from an object using built-in object methods.
    {
        let obj = {
            Name : 'Debangshu',
            Age : 22,
            City : 'Kolkata'
        }
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        let pair = Object.entries(obj);
        console.log(`Q11 keys : ${keys} | values : ${values} | pair : ${pair}`)
    }
// 1️⃣2️⃣ Use object destructuring to extract specific properties from an object and store them in separate variables.
    {
        let obj = {
            Name : 'Debangshu',
            Age : 22,
            City : 'Kolkata'
        }
        const {Name , Age} = obj
        console.log(`Q12 the extracted values from object is : ${Name},${Age}`)
    }
// 1️⃣3️⃣ Merge two objects into one using the spread operator and explain how duplicate keys are handled.
    {
         let obj = {
            Name : 'Debangshu',
            Age : 22,
            City : 'Kolkata'
        }
        let obj2 = {
            Name : 'Debangshu',
            Company : 'Silversky Technologies ',
            City : 'Ahmdabad'
        }
        let obj1 = {...obj,...obj2} //it will first copy the obj properties then the obj2 properties so the obj2 same property will overwrite obj property 
        console.log(obj1);
    }
// 1️⃣4️⃣ Extract one property from an object and group the remaining ones into a new object using the rest operator.
    {
        let obj = {
            Name : 'Debangshu',
            Age : 22,
            City : 'Kolkata'
        }
        const {Name,...obj2} =obj;
        console.log(`Q14 the extracted values from object is : ${Name},${JSON.stringify(obj2)} `)
    }
// 1️⃣5️⃣ Remove duplicate elements from an array using the Set object.
    {
        let arr = [1,2,1,1,1,1,11,2]
        let set = new Set(arr)
        console.log(`Q15 after remove duplicate using set ${Array.from(set)}`)
    }
// 1️⃣6️⃣ Create a Map to store user data (like name and age) and retrieve one property using its key.
    {
        let map = new Map([
            ["Name","Debangshu"],
            ["Age",24]
        ])
        console.log(`Q16 retrive age from the map : ${map.get("Age")}`)
    }
// 1️⃣7️⃣ Access a deeply nested property safely using optional chaining (?.) to avoid runtime errors.
    {
        let obj = {
            Name : 'Debangshu',
            Age : 22,
            City : {
                Ahemdabad : {
                    Place : "Gokul Complex"
                }
            }
        }
        console.log(obj.City?.Kolkata?.name??"Wrong")
    }
// 1️⃣8️⃣ Use the nullish coalescing operator (??) to provide a default value when a variable is null or undefined.
    {
        let a = null;
        let b = "Default"
        console.log(`Q18 Nullish coalescing operator default value ${a??b}`);
    }
// 1️⃣9️⃣ Find the first number greater than 25 in an array and its index using find() and findIndex().
    {
        let arr=[1,2,43,45,26,4,3,5,4,3,2]
        let num = arr.find(x=>x>25)
        console.log(`Q19 Nullish coalescing operator default value ${num} and its index is: ${arr.indexOf(num)}`);
    }
// 2️⃣0️⃣ Flatten a deeply nested array into a single-level array using the flat() method.
    {
        let arr=[[1,2,3,[4,5,6,[7,8]],[33,44,55]]]
        flatArr = arr.flat(Infinity)
        console.log(`orginal array-`)
        console.log(arr)
        console.log(`Q20 flatten array : ${arr}`)
    }
// 2️⃣1️⃣ You are given an array of numbers. Filter out all numbers less than or equal to 10, and then double each of the remaining numbers. Return the final array.
    {
        let arr = [1,11,4,5,12,2,5,2,13,,30,24,5,64,23]
        let newArr =arr.filter(x=>x>10).map(x=>x*2)
        console.log(`Q21 old array is : ${arr} | new array is ${newArr}`)
    }
// 2️⃣2️⃣ Write a function that takes a string and returns it reversed.
    {
        let str = "ABCD"
        function reverse(str){
            
            let arr = str.split("")
            for(let i = 0;i<arr.length/2;i++){
                
                let temp = arr[i];
                let x=i+1;
               
                arr[i]=arr[arr.length-x]
                arr[arr.length-x] = temp
                console.log(temp,arr[i],arr[arr.length-x])
            }

            return arr.join("");
        }
        console.log(`Q22 the reversed string is : ${reverse(str)}`)
    }
// 2️⃣3️⃣ You have an array of objects where each object contains a  name and a score. Sort the array in descending order of score.
    {
        let arr = [{Name:"RAj",Score:37},{Name:"Shan",Score:57},{Name:"Pritam",Score:9},{Name:"Sabya",Score:100}]
        arr.sort((x,y)=>y.Score-x.Score)
        console.log(`Q23 the sorted array according to the score is : ${JSON.stringify(arr)}`);
    }
// 2️⃣4️⃣ Given a sentence, count how many times each word appears and return the result as an object where keys are words and values are their counts.
    {
        let str = "Heyy heyy You you"
        function count(str){
            let str2 = str.toLowerCase().split(" ");//convert the string in to lowercase and make it a array of words 
            return str2.reduce((obj,x)=>{
                obj[x]=(obj[x]||0)+1;
                return obj;
            },{}) // run the reduce method over the array to return a obj with occurence of each words 
        }
        console.log(`Q24 : ${JSON.stringify(count(str))}`)
    }
// 2️⃣5️⃣ Write a function that checks if a given string is a palindrome. The check should be case-insensitive and should ignore spaces.
    {
        let str = "ABC cba"
        let str1 = "AAB CWD"

        function isPalindrome(str){
            const str1 = str.toLowerCase().replaceAll(" ","")
            const str2 = str1.split("").reverse().join("");
            return str2 === str1;
        }
        console.log(`Q25 : ${isPalindrome(str1)}`)
    }
// 2️⃣6️⃣ You have an array containing duplicate values. Remove all duplicates without using set and return the cleaned array.
    {
        let arr = [1,2,1,2,3,4,3,4]
        let cArr=[];
        for(let x of arr){
            if(cArr.includes(x)===false) cArr.push(x);
        }
        // cArr = arr.filter((v,i)=>{return arr.indexOf(v)===i})
        console.log(`Q26 : ${cArr}`)
    }
// 2️⃣7️⃣ Write a function that splits an array into chunks of a given size and returns them as an array of arrays.
    let arr =[1,2,3,5,7,78,2]
    function chunk(arr,size){
        let arr1 =[]
        for(let i=0;i<arr.length;i+=size){
            arr1.push(arr.slice(i,i+size));
        }
        return arr1
    }
    console.log(`Q27 split and array of array : ${JSON.stringify(chunk(arr,2))}`)
// 2️⃣8️⃣ Given a sentence, return a new sentence where the first letter of every word is capitalized.
    {
        let str="debangshu dey is my name"
        let str1 = str.split(" ");
        let str3 = str1.map(x=> x.charAt(0).toUpperCase()+x.slice(1))
        console.log(`Q28 Capitalized string is : ${str3.join(" ")}`)
    }
// 2️⃣9️⃣ Convert an object into an array of key, value pairs.
    {
        let obj = {Name:"Debangshu",Age:22}
        let arr = Object.entries(obj)
        console.log(`Q29 array of key-value pair : ${JSON.stringify(arr)}`)
    }
// 3️⃣0️⃣ Given a string, count how many times each character appears (ignoring spaces) and return the result as an object.
    {
        let str = "aa bb bccc cdd ddd"
        function count(str){
            let str2 = str.replaceAll(" ","").split("");
            return str2.reduce((obj,x)=>{
                obj[x]=(obj[x]||0)+1;
                return obj;
            },{})
        }
        console.log(`Q30 occurence of characters : ${JSON.stringify(count(str))}`)
    }
// 3️⃣1️⃣ Flatten a deeply nested array into a single-level array.
{
    let arr = [1,2,3,[2,3,4,5,[6,4,3],[3,5,5,56],[4,34,3,5]]]
    let arr2 = arr.flat(Infinity)
    console.log(`Q31 flatten a deeply nested array : ${arr2}`)
}
// 3️⃣2️⃣ Write a function that finds the largest and smallest number in an array.
    {
        let arr = [1,9,2,4,12,6,1,0]
        function maxMin(arr){
            let max = Math.max(...arr)
            let min = Math.min(...arr)
            return {max,min}
            
        }
        let res = maxMin(arr);
        console.log(`Q32 Max: ${res.max} | Min: ${res.min}`)
    }
// 3️⃣3️⃣ Given two arrays, return a new array containing only the elements that are present in both.
    {
        let arr = [1,2,3,4,5,6,7]
        let arr1 = [10,9,8,7,6,5,4]
        let arr2 = arr.filter(x=>arr1.includes(x))
        console.log(`Q33 1st array : ${arr} | 2nd array : ${arr1} | elements have both array : ${arr2}`)
    }
// 