const name= "sourav"
const repoCount= 50
// console.log(name+repoCount+" value");
console.log(`hi my name is ${name} and my name is repo count is ${repoCount}`);

const gameName= new String('souravpra-pramanik')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));


const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(0,4)
console.log(anotherString);

const newStringOne="  sourav  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sourav.com/sourav%20pramanik"

console.log(url.replace('%20','_'))
console.log(url.includes('https'));


console.log(gameName.split('-'));
