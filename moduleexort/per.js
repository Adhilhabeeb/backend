let {sum,mulytiply} =require("./perfroactions")

console.log(sum(4,3))
console.log(mulytiply(2,3))

const codeString = "console.log('Hello, world!');";

// Create a new function from the string
const myFunction = new Function(codeString);

// Execute the function

// Output: Hello, world!


