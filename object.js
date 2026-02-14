person = {
  name: "Debangshu Dey",
  age: 22,
  city: "Kolkata",
  profession: "Software Engineer",

  car: {
    Name: "BMW",
    Model: "X5",
    Year: 2020,
    Color: "Black",
    start: function () {
      console.log("Car is starting");
    },
    getInfo: function () {
      console.log(
        `Name: ${this.Name} Model: ${this.Model} Year: ${this.Year} Color: ${this.Color}`,
      );
    },
  },
  bike: {
    Name: "Yamaha",
    Model: "R15",
    Year: 2021,
    Color: "Blue",
    start: function () {
      console.log("Bike is starting");
    },
    getInfo: function () {
      console.log(
        `Name: ${this.Name} Model: ${this.Model} Year: ${this.Year} Color: ${this.Color}`,
      );
    },
  },
};

fruits = {
  Apple: 200,
  Banana: 100,
  Orange: 150,
  Grapes: 250,
  Mango: 300,
};

let text = "";
for (let [fruit,value] of Object.entries(fruits)) {
    text+= fruit + ": "+value + "\n";
}
console.log(text);

let jsn = JSON.stringify(fruits);
console.log(jsn);


function Person(name, age, city, ) { //constructor fnc
  this.name = name;
  this.age = age;
  this.city = city;
  this.profession = "Software Engineer";
}

const person1 = new Person("Debangshu Dey", 22, "Kolkata", "Software Engineer");
const person2 = new Person("Wasim Akram", 29, "Mumbai", "Data Scientist");
const person3 = new Person("Ayush Gupta", 35, "Delhi", "Cricketer");
person1.car = "BMW X5";
Person.prototype.bike = "Yamaha R15";
person1.chnageName = function (newName) {
  this.name = newName;
};
person1.chnageName("Debangshu Dey Choudhury");
console.log(JSON.stringify(person1));
console.log(JSON.stringify(person2));
console.log(JSON.stringify(person3));