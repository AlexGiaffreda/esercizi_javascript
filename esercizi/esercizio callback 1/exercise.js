function sayHelloName (printName){
console.log("hello");
printName()
}

function printName(){
    console.log("alex");
}


sayHelloName(printName)
