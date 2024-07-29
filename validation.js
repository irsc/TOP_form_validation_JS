
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error"); 
let pass = document.getElementById("password-in");
let confirma = document.getElementById("password-confirm");
//let errorSpan = document.getElementById("passwordSpan");
let button = document.getElementById("createAccount");


/* confirma.addEventListener("input",()=>{
    if(pass.value == confirma.value){
        errorSpan.classList.add("hidden");
    }else{
        errorSpan.classList.remove("hidden");
    }
}) */

email.addEventListener("input", (e)=>{
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
        email.classList.remove("invalid");
    }else{
        showEmailError();
        email.classList.add("invalid");
    }
})

function showEmailError(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address";
    }else if(email.validity.typeMismatch){
        emailError.textContent = "You need to enter a valid email address";
    }else if(email.validity.tooShort){
        emailError.textContent = "This email is too short!";
    }else if(email.validity.tooLong){
        emailError.textContent = "This email is too long!";
    }
    emailError.className = "error active";

}