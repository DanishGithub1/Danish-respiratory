// Get data
const nameInput = document.querySelector("#name"); 
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector("#error");

// Validate data
function validateform(){

    clearMessage();
    let errorflag = false;

    if(nameInput.ariaValueMax.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorflag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorflag = true;
    }

    if(message.value.length< 1){
        errorNodes[2].innerText = "please enter message";
        message.classList.add("error-border");
        errorflag = true;  
    }

    if(!errorflag){
        success.innerText = "Success!";
    }

}

// Clear error / success message
function clearMessage(){
    for(let i = 0; i < errorNodes; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText= "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// Check if email is valid
function emailIsValid(email){
    let pattern = /\s+@\S+\.\s+/;
    return pattern.test(email);
}