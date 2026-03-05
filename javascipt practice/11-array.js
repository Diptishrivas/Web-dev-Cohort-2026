let arr1 = new Array();

let arr2 = [];

const appleTvShows = [
    "see",
    "Pluribuss",   
    "silo",
    "Serverance",
    "kama"

]

console.log(appleTvShows.at(-1));


//Access
 
//Arary in JS is --> deque... [stack + queus]    "Deques:Unknows word"

// queue [FIFO] --- > push, shift..

// stack [LIFO]  --> push. pop..

// Internals
// obj but spcl 
// Indx , value
// the js engine tries to store its elemts in the contiguous memory aresas , one after another



// loop
for (let i=0; i< appleTvShows.length; i++){
    console.log(tvShow);
}

for (const tvShow of appleTvShows){
    console.log(tvShow);

}

//length -->> property

let food = [];
food[7] = "Idli"     ///unknown Word
console.log(food.length);
////DSA arrarys,fill(true, 0)
// console.log(new Array(50).fill(0));

// console.log([]=== []);    false 


//methods
// splice(). concat()
// forEach() ==> update existing arraary


// search 
// indexOf(), lastIndexof(), includes(), find(), findIndex(), findLastindex()
// filter() if we want to find multiple elements........


// transform
// reverse()    ---> update existing array
// split(delim), join(glue)


const names = [

];

console.log(names.sort());

console.log= [ 1,11,2,3,44,4];
console.log(SVGAnimatedNumberList.sort());

// LExicogrqphycally


function compareNumeric(appleTvShows,b){
    if(a> b ) return 1;
    if(a<b) return -1;
    if(a=== b) return 0;


}
console.log(Numberic.sort(compareNumeric));
console.log((a,b)=> b-a);









