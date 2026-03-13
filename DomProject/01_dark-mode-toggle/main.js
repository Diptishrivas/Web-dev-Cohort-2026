 
let btn = document.getElementById("toggleButton");



btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.innerText ="Toggle to Light"
    }
    else {
        btn.innerText ="Toggle to Dark"
    };
})

