function greet(name: string): string {
    return `Hello ${name} !`
}

const msg: string = greet("Debangshu")
console.log(msg)

// explicit typing 

let greeting: string = "Hello Debangshu"

let a: number = 10

let flag: boolean = true

let arr: number[] = [1, 2, 3, 4]

// Use explicit types for function parameters and return types to make your code more maintainable and self-documenting.

function abc(hello: string): number {
    return 10;
}
let num: number = abc("hello") // here the function takes a string as a parameter and return a number 

// Type Inference 

let username = "Debangshu Dey" // typeScript automatic type Inference to string 

// Inference is best when need to assign value initialized right after declaration
// best use in object literal

// Type Script arrays 

{
    const arr: string[] = [];
    arr.push("abc");
    console.log(arr) // adding number is not possible 

    const readArr: readonly string[] = ["Debangshu"]
    readArr.push("Ayush") // not possible as it is in readonly 
}

// tuples in ts 
{
    let tuple: readonly [number, string, boolean]
    tuple = [22, "Debangshu", false]
    console.log(tuple) //best practice is to make tuple readonly 

    // named tuples to provide to the values of each index 

    const tuple2: [x: number, y: string] = [12, "Debangshu"]
    console.log(tuple2)

    // Destructuring tuples  

    const [a, b] = tuple2
    console.log(a, b) //12, "Debangshu"
}

// Objects in typescript 
{
    const Person: { Name: string, Age: number, Address: string } = {
        Name: "Debangshu Dey",
        Age: 22,
        Address: "Kolkata"
    }
    // optional types 
    const Car: { Model: string, Milage?: number } = {
        Model: "toyota",
    }
    Car.Milage = 12;// this will not give any error as the Milage is a optional type but if it is not then it will give error when milage is not initialize inside the object in object initialization 

    // index signature 
    const nameAge: { [index: string]: number } = {}
    nameAge.Debangshu = 22;
    nameAge.Wasim = "22"; // this will give an type error

    //use index signature  when dont know about the properties to have in the object 
}

// TypeScript Enums

{
    enum CardinalDirections {
        North = 1,
        East,
        West,
        south
    }
    let currentDirection = CardinalDirections.North
    console.log(currentDirection) //it will print 1 as north is the first enum set as 1 and the after values will auto increase 
    CardinalDirections = 'North' // this is not possible as it is not a valid enum 
    // all values in enum is constants 
    enum initializationValus {
        North = 1,
        East = 23,
        West = 2,
        south = 22
    } // we can also fully initialize the values of enum so it will not auto-increase

    // string enum 
    enum str {
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
        Year: carYear,
        Model: carModel,
        Milage: carMilage,
    }

    const CarYear: carYear = 100
    const CarModel: carModel = "BM BABLU"
    const carMilage: carYear = 2029
    const Car: car = {
        Year: CarYear,
        Model: CarModel,
        Milage: carMilage,
    }

    //union and intersection types 
    type wasim = { name: string }; //define a type name wasim to take value as object with name property type string 
    const Wasim = { name: "Wasim mallik" }; // initialize a object Wasim type wasim 
    type debangshu = wasim & { Age: number } // define a type debanghsu with wasim type and Age with number 
    const Debangshu: debangshu = { name: "Debangshu", Age: 22 } // create a object with type debangshu

    type Pratham = "Pratham" | 23
    let pratham: Pratham = "Pratham"
}

// interface
{
    // interfaces are similar  to type aliases but it only apply to objects
    interface Rectangle {
        height: number,
        width: number
    }
    const rectangle: Rectangle = {
        height: 20,
        width: 22,
        name: "Debangshu"
    }
    interface Rectangle {
        name: string
    } //this is called interface merging 

    // interface extend - creating a new interface by extending another 
    interface ColoredRectangle extends Rectangle {
        color: string,
    }
    const coloredRectangle: ColoredRectangle = {
        height: 22,
        width: 22,
        name: "Wasim",
        color: "abc"
    }
    // Union Types - the value can have one of multiple type 
    let Phone: string | number;
    Phone = "iPhone"
    Phone = 23
    // we have to know what could be our type as methods like .toUpperCase which works for string but not for number will not work for string | number 
}

// TypeScript Functions
{
    function getName(name: string): string {
        return name;
    }
    getName("Debangshu")

    function voidFnc(): void {
        console.log("This is a function which returns nothing")
        return 2; //gives error as return in a void type 
    }
    function divide({ divisior, dividend }: { divisior: number, dividend: number }) {
        return dividend / divisior;
    }
    divide({ divisior: 2, dividend: 10 }) //pasing object in a function typed 

    // function type alys 
    type fnc = (value: number) => number

    const fncFunction: fnc = (value) => {
        return value * 2;
    }
    fncFunction(23)
}
// TS classes

{
    class Person {
        private Name: string = "" //this is a private value so it is not accessible from outside of the class by person.name (we need a getter fnc)
        public constructor(name: string) { //a public constructor to create a object with Name value 
            this.Name = name
        }
        public getName(): String { // getter function to get the Name of the Person 
            return (this.Name)
        }
    }
    const person1 = new Person("Debangshu"); //created a new object of class Person named person1 with Name Property : Debangshu
    console.log(person1.getName());//call the getter function to get the name of person1


    class PPerson {
        public constructor(private readonly name: string) {
            this.name = name //this is the first initialization of name after that it cannot be modified as it is a readonly property
        } //typeScript provide the control over creating a constructor with protected properties of class

        public getName(): string {
            return this.name
        }
        public setName(name: string) {
            this.name = name; //will not work as name is a read only property
        }
    }
    const pPerson1 = new PPerson("Debangshu Dey");
    console.log(pPerson1.getName());
    pPerson1.setName("DEB") // invalid as name is a readonly property

    // interface implements in class 

    interface Shape {
        getArea: () => number;
    }

    class Rectangle implements Shape {
        public constructor(protected readonly height: number, protected readonly width: number) {
            this.height = height;
            this.width = width;
        }
        public getArea() {
            return this.height * this.width;
        }
        public getDimensions(): string {
            return `height:${this.height} | width:${this.width}` //function to show the height and width of the Rectangle
        }
    }
    // inheritance 
    class Square extends Rectangle {
        public constructor(width: number) {
            super(width, width);
        }
        public override getDimensions(): string {
            return `width:${this.width}`            // override the getDimension fnc from the parent Rectangle and return width 
        }
    }

    const rectangle = new Rectangle(10, 10)
    const square = new Square(10)
    console.log(rectangle.getArea())
    console.log(square.getArea()) //getArea of square is inherited form Rectangle 

    // abstraction 
    abstract class Polygon {
        abstract getArea(): number //abstract method not implemented 
        public toString(): string {
            return `Polygon[area=${this.getArea()}]`;
        }
    }
    class BigRectangle extends Polygon {
        public constructor(protected readonly width: number, protected readonly height: number) {
            super();
        }
        public getArea(): number {
            return this.width * this.height; //abstract method from abstract class Polygon 
        }
    }
}

// basic generic 
{
    function createPair<s, t>(v1: s, v2: t): [s, t] {
        return [v1, v2]
    }
    createPair<string, number>("Debangshu", 22)
    createPair<number, number>(22, 23)
    createPair<string, string>("Debangshu", "Dey")
    //used same function with different parameter and diff types -> reusable functions

    class NameValue<T> {
        private Value: T;
        public constructor(private readonly Name: string) { }
        public setValue(value: T) {
            this.Value = value;
        }
        public toString() {
            return `${this.Name}:${this.Value}`
        }
    }
    const map = new NameValue<number>("Debangshu"); //generic for class 
    map.setValue(22);
    console.log(map.toString())

    //type aliases generic 

    type newType<t> = t
    const genericValue: newType<number> = 22
    console.log(genericValue)

    // interface generic

    interface Person<s, t> {
        Name: s,
        Age: t
    }
    const person: Person<string, number> = {
        Name: "Debangshu",
        Age: 22,
    }
    const person1: Person<number, string> = {
        Name: "Deabhngshu",
        Age: 22,
    }
    // generic can also apply default types if not type is given such as -
    class Default1<t = string> {
        private name: t;
        public constructor(private readonly age: number) { }
        public setName(n: t) {
            this.name = n
        }
        public getDetails(): string {
            return `Name:${this.name}|Age:${this.age}`
        }
    }
    const person2 = new Default1(22) // here we can give the type as number but can also give as string , if no type is given then it will accept string only by default 
    person2.setName("Debangshu");
    console.log(person2.getDetails())

    //we can also add constraint to the generic types to control on them 

    function createLoggedPair<S extends number | boolean, T extends string | number>(v1: S, v2: T): [S, T] {
        console.log(`creating pair: v1='${v1}', v2='${v2}'`);
        return [v1, v2];
    }
    console.log(createLoggedPair<string, string>("ab", "bc")) // here the 1st generic type is controlled to the number or boolean so passing string as type is not acceptable  
}


//utility types 
{
    interface UserDetails {
        Name: string,
        Age: number,
        Address: string,
        Number: number
    }
    const User: Partial<UserDetails> = { //partial make the properties of object as optional
        Name: "Deabhngshu",
    }
    console.log(User)

    interface car {
        Name: string,
        Model: string
        Milage?: number //milage is optional property here in interface 
    }
    const myCar: Required<car> = {
        Name: "BMW",
        Model: "GS3",
        Milage: 22 // using the interface with required force to give the milage property even though it is optional 
    }

    const nameAgeMap: Record<string, number> = { //Record is a shortcut to defining an object type with a specific key type and value type.
        'alice': 23,
        'Bob': 22
    }
    const nameAgeMap2: { [key: string]: number } = { //same work as record 
        'alice': 23,
        'Bob': 22
    }

    // omit
    const user1: Omit<UserDetails, "Age" | "Number"> = {
        Name: "Debangshu",
        Address: "Kolkata",
    } //omit age and number from user details now user1 will not accept those as key 
    const user2: Pick<UserDetails, "Name"> = {
        Name: "Debangshu",//pick removes all keys and only name from userDetails 
    }

    // exclude removes the type from union type 
    type Wasim = string | number | boolean
    let wasimMallik: Exclude<Wasim, number> = true //here the variable will not take number as valid value 

    // ReturnType extract the return type of a function 
    type PointGenerator = () => { x: number; y: number; };
    const point: ReturnType<PointGenerator> = {
        x: 10,
        y: 20
    };

    // Parameters extracts the parameter types of a function type as an array.
    type PointPrinter = (p: { x: number; y: number; }) => void;
    const point1: Parameters<PointPrinter>[0] = {
        x: 10,
        y: 20
    };
    const user3: Readonly<UserDetails> = {
        Name: "string",
        Age: 22,
        Address: "string",
        Number: 22
    }
    user3.Name = "asd" //we cannot re-assign a read-only property

}

//keyof is used to extract the key-type from an object type  

{
    interface Person {
        Name:string,
        Age:number
    }
    function printPerson(person:Person,property:keyof Person){ //key of will only accept the Persons keys as parameter 
        console.log(`Person's ${property} is : ${person[property]}`);
    }
    let person1 : Person={
        Name:"Debangshu",
        Age:22
    }
    printPerson(person1,"Name") // passing something else than Name or Age as arguments will not accepted or valid 

    type stringMap = {[key:string]:unknown}
    function createStringMap(key:keyof stringMap,value:string):stringMap{
        return {[key]:value}
    }
    console.log(createStringMap(22,"Deb"))
}