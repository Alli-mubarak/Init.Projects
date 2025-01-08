let numberInput = document.querySelector(".card-number-input");
let numberDisplay = document.querySelector(".card-number-box");
numberInput.oninput = () =>{
    numberDisplay.innerHTML = numberInput.value;
}

let nameInput = document.querySelector(".card-holder-input");
let nameDisplay = document.querySelector(".card-holder-name");
nameInput.oninput = () =>{
    nameDisplay.innerHTML = nameInput.value;
}

let monthInput = document.querySelector(".month-input");
let monthDisplay = document.querySelector(".exp-month");
monthInput.oninput = () =>{
    monthDisplay.innerHTML = monthInput.value;
}

let yearInput = document.querySelector(".year-input");
let yearDisplay = document.querySelector(".exp-year");
yearInput.oninput = () =>{
    yearDisplay.innerHTML = yearInput.value;
}

let cvvInput = document.querySelector(".cvv-input");
let cvvDisplay = document.querySelector(".cvv-box");
cvvInput.oninput = () =>{
    cvvDisplay.innerHTML = cvvInput.value;
}
let front = document.querySelector(".front");
let back = document.querySelector(".back");
cvvInput.onmouseenter = () =>{
    back.style.transform = "perspective(1000px) rotateY(0deg)"
    front.style.transform = "perspective(1000px) rotateY(180deg)"
}
cvvInput.onmouseleave = () =>{
    back.style.transform = "perspective(1000px) rotateY(180deg)"
    front.style.transform = "perspective(1000px) rotateY(0deg)"
}