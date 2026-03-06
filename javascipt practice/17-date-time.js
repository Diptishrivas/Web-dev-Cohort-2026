const now = new Date();

console.log(now);

const now = new Date();

const day = now.getDate();
const month = now.getMonth() + 1; 
const year = now.getFullYear();

console.log(day, month, year);


const now = new Date();

const formattedDate = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`;

console.log(formattedDate);


const myDate = new Date("2026-03-07");

console.log(myDate);

const myDate = new Date(2026, 2, 7); 


const now = new Date();

console.log(now.toISOString());

createdAt: new Date()