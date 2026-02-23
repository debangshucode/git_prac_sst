function greet(name:string): string{
    return `Hello ${name} !`
}

const msg : string = greet("Debangshu")
console.log(msg)

// explicit typing 

let greeting : string = "Hello Debangshu"

let a : number = 10

let flag : boolean = true

let arr : number [] = [1,2,3,4]

// Use explicit types for function parameters and return types to make your code more maintainable and self-documenting.

function abc (hello : string): number{
    return 10;
}
let num : number = abc("hello") // here the function takes a string as a parameter and return a number 

// Type Inference 

let username = "Debangshu Dey" // typeScript automatic type Inference to string 

// Inference is best when need to assign value initialized right after declaration
// best use in object literal

// Type Script arrays 

{
    const arr : string [] = [];
    arr.push("abc");
    console.log(arr) // adding number is not possible 

    const readArr : readonly string[] = ["Debangshu"]
    readArr.push("Ayush") // not possible as it is in readonly 
}

// tuples in ts 
{
    let tuple : readonly [number,string,boolean]
    tuple = [22,"Debangshu",false]
    console.log(tuple) //best practice is to make tuple readonly 

    // named tuples to provide to the values of each index 

    const tuple2 : [x:number,y:string] = [12,"Debangshu"]
    console.log(tuple2)

    // Destructuring tuples  

    const [a,b] = tuple2
    console.log(a,b) //12, "Debangshu"
}

// Objects in typescript 
{
    const Person : {Name : string, Age : number, Address : string} = {
        Name : "Debangshu Dey",
        Age : 22,
        Address : "Kolkata" 
    }
    // optional types 
    const Car : {Model : string , Milage ?: number} = {
        Model : "toyota",
    }
    Car.Milage = 12;// this will not give any error as the Milage is a optional type but if it is not then it will give error when milage is not initialize inside the object in object initialization 

    // index signature 
    const nameAge :{[index : string] : number} = {}
    nameAge.Debangshu = 22;
    nameAge.Wasim = "22"; // this will give an type error

    //use index signature  when dont know about the properties to have in the object 
}

// TypeScript Enums

{
    enum CardinalDirections {
        North =1,
        East,
        West,
        south
    }
    let currentDirection = CardinalDirections.North
    console.log(currentDirection) //it will print 1 as north is the first enum set as 1 and the after values will auto increase 
    CardinalDirections = 'North' // this is not possible as it is not a valid enum 
    // all values in enum is constants 
    enum initializationValus {
        North =1,
        East =23,
        West = 2,
        south = 22
    } // we can also fully initialize the values of enum so it will not auto-increase
   
    // string enum 
    enum str{
        North = "ABCD",
        East = "BCDA"
    }
}

// Type Aliases

{
    type carYear = number
    type carModel = String 
    type carMilage = number
    type car = {
        Year:carYear,
        Model:carModel,
        Milage:carMilage,
    }

    const CarYear : carYear = 100
    const CarModel : carModel = "BM BABLU"
    const carMilage : carYear = 2029
    const Car : car ={
        Year : CarYear,
        Model : CarModel,
        Milage : carMilage,
    }

    //union and intersection types 
    type wasim = {name:string}; //define a type name wasim to take value as object with name property type string 
    const Wasim = {name : "Wasim mallik"}; // initialize a object Wasim type wasim 
    type debangshu = wasim &  {Age : number} // define a type debanghsu with wasim type and Age with number 
    const Debangshu : debangshu = {name:"Debangshu",Age:22} // create a object with type debangshu

    type Pratham = "Pratham" | 23
    let pratham : Pratham = "Pratham"
}

// interface
{
    // interfaces are similar  to type aliases but it only apply to objects
    interface Rectangle {
        height : number,
        width : number
    }
    const rectangle : Rectangle ={
        height :20,
        width: 22,
        name : "Debangshu"
    }
    interface Rectangle {
        name: string
    } //this is called interface merging 
    
    // interface extend - creating a new interface by extending another 
    interface ColoredRectangle extends Rectangle{
        color : string ,
    }
    const coloredRectangle : ColoredRectangle ={
        height :22,
        width:22,
        name:"Wasim",
        color:"abc"
    }
    // Union Types - the value can have one of multiple type 
    let Phone : string | number ;
    Phone = "iPhone"
    Phone = 23
    // we have to know what could be our type as methods like .toUpperCase which works for string but not for number will not work for string | number 
}

// TypeScript Functions
{
    function getName(name:string):string{
        return name;
    }
    getName("Debangshu")

    function voidFnc():void{
        console.log("This is a function which returns nothing")
        return 2; //gives error as return in a void type 
    }
    function divide({divisior,dividend}:{divisior:number,dividend:number}){
        return dividend/divisior;
    }
    divide({divisior:2,dividend:10}) //pasing object in a function typed 

    // function type alys 
    type fnc = (value : number) => number

    const fncFunction : fnc =(value) => {
        return value*2;
    }
    fncFunction(23)
}

