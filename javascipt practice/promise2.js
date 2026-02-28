// console.log("Dipti")
// promise.resolve("resolbed value").then((v) =>{
//     console.log("Microtask", v);

// })
// console.log("chintuu");


function boilWater(ms){
    return new Promise((res,rej)=>{
        console.log("krte h ji boil water")
        if(typeof ms != "number" || ms<0){
            PromiseRejectionEvent(new Error("ms must be in number and greater than zero"))
        }
        setTimeout(()=>{
            res("ubal gaya");

        }, ms);
    });
}

boilWater(200)

  .then((msg)=>console.log("Resolved:", msg))
  .catch((err) =>console.log("Rejected:", err.message));


  function grindLeaves(){
    return Promise.resolve("leaves grounded")
  }

  function steepTea(time){
return new Promise((res)=>{
    setTimeout(()=> res("Steeped tea"),ms);
});
  }

function addSugar(spoons){
    return `Added ${spoons}sugar`;
}

grindLeaves()
  .then((val))
  