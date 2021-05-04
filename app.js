
const form = document.querySelector("form");
const basicSal = document.querySelector("#basic-salary");
const transportAll = document.querySelector("#transport");
const housingAll = document.querySelector("#housing");
const taxableAll = document.querySelector("#tax-allowance");

 

//add event listener
form.addEventListener('submit', event => {
    event.preventDefault();

    //Validation 
if (Number(basicSal.value == "") || Number(transportAll.value == "") || Number(housingAll.value == "") || Number(taxableAll.value == "")) {
    document.querySelector(".alert-danger").innerHTML= `<span class="font-weight-bolder text-light col-lg-12 p-2">OOPS!</span> All fields are required`;
    return;
}

if (basicSal.value <= 0 || transportAll.value <= 0 || housingAll.value <= 0 || taxableAll.value <= 0) {
    // uste innerHtml when injecting tags with javascript in a html document
    document.querySelector(".alert-danger").innerHTML= `<span class="font-weight-bolder text-light col-lg-12 p-3">OOPS!</span> All fields are required`;
    return;
}



const monthlySal = Number(basicSal.value) + Number(transportAll.value) + Number(housingAll.value) + Number(taxableAll.value);

const yearlySal = monthlySal * 12;

console.log(monthlySal, yearlySal);



document.querySelector(".salPerMonth").textContent = monthlySal;
document.querySelector(".salPerYear").textContent = yearlySal;

setTimeout(function show(){
    document.querySelector(".result").style.display = "block";
}, 3000)

setTimeout(() => {
    
}, timeout);

})





