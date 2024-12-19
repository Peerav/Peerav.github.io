
const list=document.querySelector("ul");
list.innerHTML =localStorage.getItem("key");


function addlist(){
    const input=document.querySelector("#input");
    const text=input.value;
    const tasktext=document.createTextNode(""+text);
    console.log(text);
    const newlist=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("check");
    newlist.appendChild(checkbox);
    newlist.appendChild(tasktext);
    list.appendChild(newlist);
    input.value="";
    localStorage.setItem("key",list.innerHTML);
    
}


const input=document.querySelector("#input");
input.addEventListener("keydown",(even) => {
    if(even.key==="Enter") addlist();
}) 

const container=document.querySelector(".container");
container.addEventListener("click",()=>{
    const checkbox=document.querySelectorAll(".check");
    checkbox.forEach(checkbox =>{
        if(checkbox.checked){
            const parent=checkbox.parentNode;
            parent.classList.add("fade-out");
            setTimeout(()=>{
                list.removeChild(parent);
                localStorage.setItem("key",list.innerHTML);
            },500);
            
        }
    })
})

const clear=document.querySelector("#clear");
clear.addEventListener("click",()=>{
    list.classList.add("fade-out");
    setTimeout(()=>{
        list.innerHTML="";
        list.classList.remove("fade-out");
        localStorage.setItem("key",list.innerHTML);
    },500);
    
    
})