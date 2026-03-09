// operators are symbol


let firstNumber =3;
let secondNumer =2;

let addNumbers = firstNumber + secondNumer;

//here
// firstNumber,secondNumber are operands
// +,-,*,/ these are operators
// addNumbers is the variable  here the result would be stored!!!!!


// perform arthimatic operators///
console.log(firstNumber+secondNumer)
console.log(firstNumber-secondNumer)
console.log(firstNumber*secondNumer)
console.log(firstNumber/secondNumer)
console.log(firstNumber%secondNumer)
console.log(firstNumber**secondNumer)

// comparison operator

console.log(2===3)
console.log(2!=2)
console.log(5>4)
console.log(8<10)
console.log([]==false)
// console.log([]===0)  

// somithing experimental
console.log([] + [])
console.log({} + [])
console.log(true + true)
console.log("5" - 2)
console.log("5" + 2)
console.log([] == ![])

console.log([] == false)   // true as ([] -> "" -> 0) ; (false -> 0)
// console.log([] === false)  // false


console.log(null == undefined)   // true
console.log(null === undefined)  // false
// Loose equality treats null and undefined as equal to
// each other, but not equal to anything else.

console.log([1,2] == "1,2")   // true [1,2] -> "1,2"
// console.log([1,2] === "1,2")  // false

console.log([] == ![]) // true
// As Arrays are always truthy, ![] = false ; 
// [] -> "" -> false;
// Therefore, false == false -> true.


console.log(true && true);   // Output: true
console.log(true && false);  // Output: false
console.log(5 > 2 && 10 > 3); // Output: true
console.log(5 > 2 && 10 < 3); // Output: false

console.log(true || false);  // Output: true
console.log(false || false); // Output: false
console.log(5 < 2 || 10 > 3); // Output: true

console.log(!true);  // Output: false
console.log(!false); // Output: true
console.log(!0);     // Output: true  (0 is falsy)
console.log(!1);     // Output: false (1 is truthy)

console.log(null ?? "Default Value");       // Output: "Default Value"
console.log(undefined ?? "Fallback");      // Output: "Fallback"
console.log(0 ?? 100);                     // Output: 0
console.log("" ?? "Empty String Default"); // Output: ""


let number =10;
number +=5
console.log(number);

let score =8;
number -=2;
console.log(score);

let price  =50;
price *=2;
console.log(score);

let total = 120;
total /=2;
console.log(total);

let value = 12;
value **=2;
console.log(value);

let user ="Admin";
user &&= "super admin";
console.log(user);

let picture =null;
picture ??="light";
console.log(picture);



