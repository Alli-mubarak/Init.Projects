function generatepassword() {
var length= 12;
var charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^and*()-_=+";
var password = "" ;
for (var i = 0 ; i < length; i ++){
    var charIndex = Math.floor(Math.random() * charset.length);
    password += charset[charIndex];
}
    document.getElementById("password").value= password ;
}
function copy() {
  const el= document.getElementById("password");
  navigator.clipboard.writeText(el.value);
  const par= document.querySelector("p");
  par.innerText="copied !"
}