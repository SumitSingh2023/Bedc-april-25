const {multiply} = require('./multiplication')
const {sum} = require('./sum')
const {subtraction} = require('./subtraction')
const {division} = require('./division')

// let a= 10
// let b=0

// console.log(sum(a,b))
// console.log(multiply(a,b))
// console.log(subtraction(a,b))
// console.log(division(a,b))
// console.log(process.argv[2])

const args = process.argv.slice(2)
const operation = args[0]
const num1 = Number(args[1])
const num2 = Number(args[2])

let result;

switch (operation){
    case "sum":
        result = sum(num1,num2)
        break;
    case "multiply":
        result = multiply(num1,num2)
        break;
    case "subtraction":
        result = subtraction(num1,num2)
        break;
    case "division":
        result = division(num1,num2)
        break;
    default :
       result = "unknown operation. use sum, multiply,subtract,division"
}

console.log("Result :",result)