/*############ Variables ############*/
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const zip = document.getElementById("zip");
const country = document.getElementById("country");
const zipError = document.querySelector("#zip + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordConfirmError = document.querySelector("#passwordConfirm + span.error");
const createAccountBtn = document.getElementById("createAccount");

// following  https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
const zipConstraints = {
    es: [
        "^(E-)?\\d{5}$",
        "Spain ZIPs must have exactly 5 digits: e.g. E-13001 or 13001",
      ],
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

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

zip.addEventListener("input", (e)=>{
    if(checkZIP()){
        zipError.textContent = "";
        zipError.className = "error";
        zip.classList.remove("invalid");
    }else{
        showZipError();
        zip.classList.add("invalid");
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
    checkPasswords();
})

createAccountBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(email.validity.valid && password.validity.valid && checkPasswords()){
        alert("All good to go!");
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

function showZipError(){
    zipError.textContent = zipConstraints[country.value][1];
    zipError.className = "error active";
}

function showPasswordError(){
    console.log(password.validity);
    if(password.validity.patternMismatch){
        passwordError.textContent = "You need to enter a password with at least 8 characters, one digit, one capitalize letter, and one special character";
    }
    passwordError.className = "error active";
}

function checkPasswords(){
    if(password.value == passwordConfirm.value){
        passwordConfirmError.textContent="";
        passwordConfirmError.className = "error";
        passwordConfirm.classList.remove("invalid");
        return true;
    }else{
        passwordConfirmError.textContent = "Passwords not matching";
        passwordConfirmError.className = "error active";
        passwordConfirm.classList.add("invalid");
        return false;
    }
}

function checkZIP() {
    const constraint = new RegExp(zipConstraints[country.value][0], "");
    return constraint.test(zip.value);
}
 