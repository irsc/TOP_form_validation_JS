/*############ Variables ############*/
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordConfirmError = document.querySelector("#passwordConfirm + span.error");

const createAccountBtn = document.getElementById("createAccount");

/*############ Event listeners ############*/
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

password.addEventListener("input", (e)=>{
    if(password.validity.valid){
        passwordError.textContent = "";
        passwordError.className = "error";
        password.classList.remove("invalid");
    }else{
        showPasswordError();
        password.classList.add("invalid");
    }
})

passwordConfirm.addEventListener("change",()=>{
    if(password.value == passwordConfirm.value){
        passwordConfirmError.textContent="";
        passwordConfirmError.className = "error";
        passwordConfirm.classList.remove("invalid");
    }else{
        passwordConfirmError.textContent = "Passwords not matching";
        passwordConfirmError.className = "error active";
        passwordConfirm.classList.add("invalid");
    }
})

/*############ Functions ############*/
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

function showPasswordError(){
    if(password.validity.valueMissing){
        passwordError.textContent = "You need to enter a password with at least 8 characters, one digit, one capitalize letter, and one special character";
    }else if(password.validity.typeMismatch){
        passwordError.textContent = "You need to enter a valid password";
    }else if(password.validity.tooShort){
        passwordError.textContent = "The password is too short!";
    }
    passwordError.className = "error active";
}