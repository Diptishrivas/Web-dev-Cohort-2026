let single = 'single-quotted';
let double = "double-quoted";

let backticks = `backticks(strin-interpolation)`  // ${variable}


// speacial character

let fancy = "this is \"me\"";

console.log("5\\2");

let windowDownfall = `Downfsll started from:

*w8
w10
w11 AI
copilot
notedbug
blue screen of Death

`

///length
console.log(windowDownfall.length);

//Access
// [], pos()

console.log("5")

console.log(windowDownfall[0]);
console.log(windowDownfall[windowDownfall.length - 1]);

console.log(windowDownfall.at(-1));


///Interable 
// for..of 
for (const char of 'meow'){
    console.log(char);

}

///strings are immutable

let str = "kama";

str[0] = "R" + str.substring(1);
console.log(str);

console.log(windowDownfall.trim().length);

////arrays






