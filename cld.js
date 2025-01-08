function updateClock(){
 var now=new Date();
 var hours= now.getHours();
 var minutes=now.getMinutes();
 var seconds=now.getSeconds();
 var day=now.getDate();
 var month=now.getMonth()+1;
 var year=now.getFullYear();
 
 hours= hours < 10 ? '0' + hours:hours;
 minutes= minutes < 10 ? '0'+ minutes:minutes;
 seconds=seconds < 10 ? '0' + seconds:seconds;
 month= month < 10 ? '0' + month:month;
 day= day < 10 ? '0' + day:day;
 
 var time=hours + ':' + minutes + ':' + seconds;
 var date= day + "/" + month + "/" + year;
 
 document.getElementById('clock').innerHTML= time;
 document.getElementById('date').innerHTML= date;
}
setInterval(updateClock,1000);
updateClock();