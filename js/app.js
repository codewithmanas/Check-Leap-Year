let inputYear = document.querySelector("#input-year");
let outputYear = document.querySelector("#output-year");
let btnCheck = document.querySelector("#btn-check");

function leapYear(age) {
    let ageNum = Number.parseInt(age);
    if((ageNum % 400 == 0) || (ageNum % 100 != 0 && ageNum % 4 == 0)){
        return ("It's a leap year.");
    }else if(age != ageNum){
        return ("Error: Invalid input");
    }
    else{
        return ("It's not a leap year.");
    }
}


function clickEventHandler(){
    console.log("clicked!");
    outputYear.innerText = leapYear(inputYear.value);
}

btnCheck.addEventListener("click", clickEventHandler);