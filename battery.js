const startBtn = document.getElementById("start");
const endBtn = document.getElementById("end");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
let run = true;

startBtn.onclick = () =>{
function starter(){
  if (run){
  function first(){
  one.style.width="25px";
  }
  function second(){
  two.style.width="25px";
  }
  function third(){
    three.style.width = "25px";
    
  }
  setTimeout(first,0);
  setTimeout(second,200);
  setTimeout(third,400);
  run = false;
}
else{
  one.style.width = "0";
  two.style.width = "0";
  three.style.width = "0";
  run = true;
}
}
const intervalID = setInterval(starter,600);
endBtn.onclick = () =>{
 clearInterval(intervalID);
}
}
