const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve("chaicode");
        reject(new Error("chaicode"));   //reject
}, 2000);
});

console.log(promise);

// setTimeout(()=>{
//     console.log(promise);
// }, 3000);

promise.then((data) => {
    console.log(data);
});

promise.myFunction((data) => {
    console.log(data);
});

promise.then(console.log);
console.log()

promise.then(console.log);

promise.then((data) => console.log(data));
// happy happy 


///normal way for catch error
promise.then(
    (data)=> console.log(data),
   (error) => console.log(error)
    
)
////2nd way for catch error
promise.then(data=> console.log(data))
    .catch((error) => console.log(error));

//3rd way for catch error
    promise
    .then(data => {
        newData = data.toUpperCase();
        return newData;
    })
    .then(data => {
        return data + ".com";
    })
    .then(console.log)
    .catch((error) => {
        console.log(error);
        return "chai";
    })

    .then(console.log);

//////aisa bhi hota h turant

    const turant = Promise.resolve("Turant");
    console.log(turant);

const allPromise = Promise.any([
    Promise.resolve("Chai"),
    Promise.resolve("Code"),
    Promise.reject("Error"),
]);

allPromise.then(console.log);


const allPromise = Promise.all([
    Promise.resolve("Chai"),
    Promise.resolve("Code"),
    Promise.reject("Error"),
]);


const hPromise = new Promise ((res,rej)=>{
    serTimeout(()=>{
        res("Masterji");
        rej(new Error("Masterji"));
    },3000);

});

    async function nice(){
        const result = await hPromise
        console.log(result);
    }
     
    nice();

    async function nice() {
        try {
            const result = await hPromise;
            console.log(result);

        }
        catch (erro){
         console.log
        }
        
    }

///nhi krna
const newresult = hPromise;  ///await hPromise
console.log(newresult);

 








