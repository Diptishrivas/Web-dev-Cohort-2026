const fs = require('fs')
const math =require('./math');
fs.writeFile('./test.txt', 'Helo World', ()=>{});

console.log({__filename, __dirname})

console.log(math.add)
