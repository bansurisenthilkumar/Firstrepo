//Date and time objects 

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getDay());

//Closures

function outerFunction(outervariable){
    return function innerFunction(innerVariable){
        console.log(`Outer: ${outervariable}, Inner: ${innerVariable}`)
    };
}
const closureExample = outerFunction("Hello");
closureExample("World");

//CallBack FUnctions

function greet(name, callback) { //callback here is a variable and not a keyword
    console.log(`Hello, ${name}!`);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);

//Dom Objects

