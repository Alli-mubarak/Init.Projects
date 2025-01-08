let timer;
let startTime;
let elapsedTime = 0;
let running = false;
function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStopButton").innerText = "Start";
    running = false;
  } 
  else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime,  10);
    document.getElementById("startStopButton").innerText = "Stop";
    running = true;
  }
}
function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").innerText = formattedTime;
}
function formatTime(time){
 const hours = Math.floor(time / (1000 * 60 * 60));
 const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((time % ( 1000*60)) / 1000);
 const milliseconds = Math.floor((time % 1000) / 10);
 
 return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}
function pad(num){
   return num.toString().padStart(2,'0');
}
function reset(){
    clearInterval(timer);
    document.getElementById("display").innerText = "00:00:00";
    elapsedTime = 0;
    running = false;
    document.getElementById("startStopButton").innerText ="Start";
}
document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);