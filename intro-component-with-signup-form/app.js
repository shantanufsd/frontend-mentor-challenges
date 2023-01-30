let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");

function validateInput(input) {
  if(input.value.trim() === "") {
    input.classList.add("showErrorAlert");
    input.placeholder="";
    let nextSibling = input.nextElementSibling;
    if(nextSibling && nextSibling.classList.contains("showErrorMsg")) {
      nextSibling.innerHTML = `${input.name}` + " cannot be empty";
    } else {
      let errorMessageName = document.createElement("p");
      errorMessageName.innerHTML = `${input.name}` + " cannot be empty";
      errorMessageName.classList.add("showErrorMsg");
      input.insertAdjacentElement("afterend", errorMessageName);
    }

    return false;
  } else {
    input.classList.remove("showErrorAlert");
    let nextSibling = input.nextElementSibling;
    if(nextSibling && nextSibling.classList.contains("showErrorMsg")) {
      nextSibling.remove();
    }

    return true;
  }
}

function validateEmail(input) {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorMessageEmail;
  let nextSibling = input.nextElementSibling;
  if (pattern.test(input.value.trim())) {
    if (nextSibling && nextSibling.classList.contains("showErrorMsg")) {
      errorMessageEmail = nextSibling;
      errorMessageEmail.remove();
    }
    input.classList.remove("showErrorAlert");
    return true;
  } else {
    if (!nextSibling || !nextSibling.classList.contains("showErrorMsg")) {
      errorMessageEmail = document.createElement("p");
      errorMessageEmail.innerHTML = "Looks like this is not an email";
      errorMessageEmail.classList.add("showErrorMsg");
      input.insertAdjacentElement("afterend", errorMessageEmail);
    }
    input.classList.add("showErrorAlert");
    input.placeholder = "email@example/com";
    return false;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  let isValid = true;
  inputs.forEach(input => {
    if(input.type == "email"){
      if(!validateEmail(input)){
        isValid = false;
      }
    } else {
      if(!validateInput(input)){
        isValid = false;
      }
    }
  })
  if(isValid){
    form.submit();
  }
}

form.addEventListener("submit", handleSubmit);