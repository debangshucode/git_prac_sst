//Methods for Defining JavaScript Objects
//using object Literal
let obj = {
  Name: "Debangshu",
  Age: 25,
  set lang(lang){
    this.laguage = lang;
  },
  get lang(){
    return this.laguage 
  }
};

// using new Object
let obj1 = new Object({
  Name: "Debangshu Dey",
  Age: 23,
});
// using constructor function
function Person(Name, Age) {
  ((this.Name = Name), (this.Age = Age));
}
let obj3 = new Person("Debangshu", 22);
//using object.create
let obj4 = Object.create(obj);
obj4.Name = "Raj";
//using fromEntries to create a object from iterable key-value pairs
let arr = [
  ["oranges", 900],
  ["mango", 900],
  ["Strawberry", 900],
  ["Guava", 900],
];
let obj5 = Object.fromEntries(arr)
//Using Object.assign copy properties from one or more 
Object.assign(obj3,obj5)


//iteration in objects 
/*
Object.create(obj1) to create a obj using another obj
Object.entries () to get the key-value pair fo the obj as array         
object.keys() to get the keys of the object as array
Object.formEntries() to create a object using array of keys and values 
Object.assign(target,source) to copy the properties of sources of source object to target object  
object.values() to get the array of property values of object 
Object.groupBy(object,callback fnc) to group the object values depending on the conditions 
*/

// Getter and Setter 

//get and set method to get or set the value of a property of a object
obj.lang="Bengali";
console.log(obj.lang)


// object.defineProperties use to add getter and setter 

const count = {counter:0}
Object.defineProperty(count,"reset",{
    get: function(){return this.counter=0}
});
Object.defineProperty(count,"increment",{
    get: function(){return this.this.counter++}
});
Object.defineProperty(count,"decrement",{
    get: function(){return this.counter--}
});
Object.defineProperty(count,"add",{
    set: function(val){this.counter+=val}
});
Object.defineProperty(count,"sub",{
    set: function(){ this.counter-=val}
});

