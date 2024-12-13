const display=document.querySelector("#display");
function f(value){
    display.innerText+=value;
}
function clearDisplay(){
    display.innerText="";
}
function cal(){
    display.innerText=eval(display.innerText);
}
function percen(){
    display.innerText=display.innerText/100;
}
