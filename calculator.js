const calcBox = document.querySelector(".calculator-container");
const el= document.querySelector("input");
function show(value){
    el.value+=value;
}
function clr(){
    el.value= '';
}
function del(){
    el.value= el.value.substring(0,el.value.length -1);
}
function calc(){
    try{
        el.value = eval(el.value);
    }
    catch (error){
        el.value = "ERROR";
    }
}
function closer(){
    calcBox.style.left = '-100%'
}
function opener(){
    calcBox.style.left = '0'
}