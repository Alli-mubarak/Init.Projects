let hour= document.querySelector(".hour");
let minute= document.querySelector(".minute");
let seconds= document.querySelector(".second");
const updateTime = () => {
  let time= new Date(),
    sec = (time.getSeconds() / 60) * 360,
    min = (time.getMinutes() / 60) * 360,
    hr = (time.getHours() / 12) * 360;
  seconds.style.transform = `rotate(${sec}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  hour.style.transform = `rotate(${hr}deg)`;
};
let day= document.querySelector(".day");
const time= new Date();
 time.setDate(time.getDate());
 
 day.innerHTML= time;
setInterval(updateTime, 1000);
updateTime();

function theme(){
  document.body.classList.toggle('dark')
  
}
