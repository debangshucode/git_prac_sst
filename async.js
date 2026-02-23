setTimeout(myFunction, 3000); //it defines that myFunction will run after 3 s
secondFunction();
function myFunction() {
  console.log("This is my function");
}
function secondFunction() {
  console.log("this is 2nd function");
}

setInterval(clock, 1000); //runc clock function at each interval
function clock() {
  let date = new Date();
  let time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("time").innerText = time;
}

//calback function  to handel error

function getData(callback) {
  let ok = true;
  if (ok) {
    return callback(null, "Data");
  } else {
    return callback("something went wrong", null);
  }
}
getData(function (error, Data) {
  if (error) {
    console.log(error);
  } else {
    console.log(Data);
  }
});

//promise in javascript

let myPromise = new Promise(function (resolve, reject) {
  let ok = true;

  if (ok) {
    resolve("data");
  } else {
    reject("something is wrong ");
  }
});


myPromise.then(
  function (value) {
    console.log(value);
  },
  function (value) {
    console.log(value);
  },
);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("error" + error);
  });

function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.reject(value + "B");
}
async function step3(value) {
  return value + "C";
}

async function run() {
  try {
    let v1 = await step1();
    let v2 = await step2(v1);
    let v3 = await step3(v2);

    console.log(`Result : ${v3}`);
  } catch (err) {
    console.log(`error : ${err}`);
  }
}
run();

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { Id: 0, Name: "Debangshu", Age: 22 },
        { Id: 1, Name: "WowSim", Age: 23 },
      ]);
      reject(new Error("Cant find the user"));
    }, 1000);
  });
}

async function fetchUsers() {
  try {
    const User = await getUser();
    let data = User.reduce((object,user)=>{
        object[user.Id]=user
        return object;
    },{})
    console.log(JSON.stringify(data))
  } catch (error) {
    console.log(error);
  }
}
fetchUsers()