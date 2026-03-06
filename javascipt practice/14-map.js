// Map - obj (key can be anything)

// in obj key can be either "string " or "symbol"


const  m =new Map();
m.set(k1, 'v1');
m.set(1, 'one');

console.log(m.get(1));

const text = "the cat sat on the math the cat"
const freq = new Map();

for(const t of text.split(" ")){
     const wordFreq = freq.get(word) || 0;

     freq.set(word, wordFreq +1);  ///the ->1 , cat->1 on-> 1, the-> 1+1=2
}
