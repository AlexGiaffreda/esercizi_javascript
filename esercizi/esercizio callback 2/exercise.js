function sayHelloName(callback) {
  setTimeout(function () {
    console.log("hello");
    callback();
  }, 1000);
}

function printName() {
  console.log("alex");
}

sayHelloName(printName);
