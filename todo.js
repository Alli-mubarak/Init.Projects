const toDoList = document.querySelector(".todo-list");
const toDoInput = document.getElementById("new-todo");
const toDoBox = document.querySelector(".to-do-container")
const adderBox = document.querySelector(".add-todos")
function adder(){
    if(toDoInput.value.length > 2){
    const label = document.createElement("label");
    const checker = document.createElement("input");
    const iTag = document.createElement("i");
    const span = document.createElement("span");
    const text = document.createTextNode(toDoInput.value);
    toDoList.appendChild(label)
    label.setAttribute("class", "todo-list__label")
    label.setAttribute("onclick", "remove(this)")
    label.appendChild(checker)
    checker.setAttribute("type", "checkbox")
    label.appendChild(iTag)
    iTag.setAttribute("class", "check")
    label.appendChild(span);
    span.appendChild(text)
    setTimeout(()=>{
        toDoInput.value = ''
    },400)
}
}
function remove(me){
    setTimeout(()=>{
    toDoList.removeChild(me)
    },1000)
}
function closeToDo(){
    toDoBox.style.left = "100%";
}
function openToDo(){
    toDoBox.style.left = '0';
}
isOpen = false;
function menu(){
    if(!isOpen){
        adderBox.style.display = 'block';
        isOpen = true;
    }
    else{
        isOpen = false;
        adderBox.style.display = 'none';
    }
}