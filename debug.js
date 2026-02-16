console.log("This is a log for debug");
console.warn("This is a warning");
// debugger
console.error("this is a error msg");
let users = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];

console.table(users);
async function loadData() {
  try {
    let response = await fetch("wrong.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}