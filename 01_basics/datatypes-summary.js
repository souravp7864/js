// primitive

// 7 type : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id===anotherID);

// const bigNumber = 469841688651688n



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["saktiman","naagraj","doga"]
let myObj={
    name: "sourav",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
