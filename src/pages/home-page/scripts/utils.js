const allInputs = document.querySelectorAll("input");
const allErrors = document.querySelectorAll("small");

function showAlert() {
  const alert = document.getElementById("alert");

  alert.classList.remove("hidden");

  if (!alert.classList.contains("hidden")) {
    setTimeout(() => alert.classList.add("hidden"), 5000);
  }
}

function getErrorFor(input, message) {
  const error = input.parentElement.querySelector(".input-error");
  error.classList.remove("visible");
  removeValidationClasses(input);

  error.textContent = message;
  error.classList.add("visible");
  input.classList.add("invalid");
}

function getSuccessFor(input) {
  const error = input.parentElement.querySelector(".input-error");
  removeValidationClasses(input);

  error.classList.remove("visible");
  input.classList.add("valid");
}

function removeValidationClasses(input) {
  input.classList.remove("valid");
  input.classList.remove("invalid");
}

function removeAllValidationClasses() {
  allInputs.forEach((input) => {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  });
}

function clearAllErrors() {
  allErrors.forEach((error) => {
    error.classList.remove("visible");
    error.textContent = "";
  });
}

// Luhna algorithm for credit card validation

function validateCreditCardNumber(cardNumber) {
  const length = new RegExp("^[0-9]{16}$");
  const stringCardNumber = cardNumber.toString();
  if (!length.test(cardNumber)) return false;

  let sum = 0;
  for (let i = 0; i < stringCardNumber.length; i++) {
    let cardDigit = parseInt(stringCardNumber[i]);
    if (i % 2 == 0) {
      cardDigit *= 2;
      if (cardDigit > 9) {
        cardDigit -= 9;
      }
    }
    sum += cardDigit;
  }
  return sum % 10 == 0; // if is divisible by 10 then it is valid card number
}

export {
  showAlert,
  getErrorFor,
  getSuccessFor,
  removeAllValidationClasses,
  clearAllErrors,
  validateCreditCardNumber,
};
