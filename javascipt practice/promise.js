// const promise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         resolve("chaicode");
//         reject(new Error("chaicode"));   //reject
// }, 2000);
// });

// console.log(promise);

// // setTimeout(()=>{
// //     console.log(promise);
// // }, 3000);

// promise.then((data) => {
//     console.log(data);
// });

// promise.myFunction((data) => {
//     console.log(data);
// });

// promise.then(console.log);
// console.log()

// promise.then(console.log);

// promise.then((data) => console.log(data));
// // happy happy 


// ///normal way for catch error
// promise.then(
//     (data)=> console.log(data),
//    (error) => console.log(error)
    
// )
// ////2nd way for catch error
// promise.then(data=> console.log(data))
//     .catch((error) => console.log(error));

// //3rd way for catch error
//     promise
//     .then(data => {
//         newData = data.toUpperCase();
//         return newData;
//     })
//     .then(data => {
//         return data + ".com";
//     })
//     .then(console.log)
//     .catch((error) => {
//         console.log(error);
//         return "chai";
//     })

//     .then(console.log);

// //////aisa bhi hota h turant

//     const turant = Promise.resolve("Turant");
//     console.log(turant);

// const allPromise = Promise.any([
//     Promise.resolve("Chai"),
//     Promise.resolve("Code"),
//     Promise.reject("Error"),
// ]);

// allPromise.then(console.log);


// const allPromise = Promise.all([
//     Promise.resolve("Chai"),
//     Promise.resolve("Code"),
//     Promise.reject("Error"),
// ]);


// const hPromise = new Promise ((res,rej)=>{
//     serTimeout(()=>{
//         res("Masterji");
//         rej(new Error("Masterji"));
//     },3000);

// });

//     async function nice(){
//         const result = await hPromise
//         console.log(result);
//     }
     
//     nice();

//     async function nice() {
//         try {
//             const result = await hPromise;
//             console.log(result);

//         }
//         catch (erro){
//          console.log
//         }
        
//     }

// ///nhi krna
// const newresult = hPromise;  ///await hPromise
// console.log(newresult);

 



// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// async function getData() {
//   console.log("Start");

//   const result = await fetchData();

//   console.log(result);
//   console.log("End");
// }

// getData();





// pending,done(fulfill),noko reject

const promise = new Promise ((res,rej)=>{
    setTimeout (()=>{
       res("chaicode")
    },2000)
});
console.log(promise);


promise.then(console.log);
// console.log


const promise1= new Promise ((res,rej)=>{
       setTimeout (()=>{
        res("foo")
       },300)
})

promise1.then((data)=>{
  console.log(data)
})

console.log(promise1)

const readFilePromise = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

readFilePromise("./data.txt")
  .then((result) => console.log(result))
  .catch((error) => console.error("Failed to read data"));



/////////////////////////////////////////////////////////////////////


function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

//////////////////////////////////////////////////////
const pendingResolved = new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(() => {
        resolveInner("inner");
      }, 100);
    }),
  );
});