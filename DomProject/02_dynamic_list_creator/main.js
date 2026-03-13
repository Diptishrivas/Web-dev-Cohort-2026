const input = document.getElementById("iteminput");
const addBtn =document.getElementById("addBtn");
const list = document.getElementById("list")
 
addBtn.addEventListener("click" ,()=>{
 if(input.value === ""){
    alert("Mat kr lala!")
    return; 
 }

   const li= document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.textContent = "Delete"
    delBtn.classList.add("delete");

   li.textContent = input.value; 

    //double click
 li.addEventListener("dblclick" ,()=>{
    li.contentEditable=true;
    li.focus();
 })

 //enter press
 li.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
    li.contentEditable= false;
    }
 })

   delBtn.addEventListener("click", ()=>{
       li.remove();
   })

   li.appendChild(delBtn);
   list.appendChild(li);

   input.value=""

  

 })
