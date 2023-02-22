const nameOnCard = document.getElementById("nameOnCard");
const cardNumber = document.getElementById("cardNumber");
const cardExpirationDate = document.getElementById("cardExpirationDate");
const cardCvvNumber = document.getElementById("cardCvvNumber");
const form = document.getElementById("mainForm");

import {
  showAlert,
  getErrorFor,
  getSuccessFor,
  removeAllValidationClasses,
  clearAllErrors,
  validateCreditCardNumber,
} from "./utils.js";

function validateCardName() {
  const nameOnCardValue = nameOnCard.value;
  const pattern = /^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ ]+$/;

  if (nameOnCardValue.trim() === "" || !pattern.test(nameOnCardValue)) {
    getErrorFor(nameOnCard, "Name is not valid");
  } else {
    getSuccessFor(nameOnCard);
  }
}

function validateCardNumber() {
  const cardNumberValue = cardNumber.value;

  if (!validateCreditCardNumber(cardNumberValue)) {
    getErrorFor(cardNumber, "Card number is not valid");
  } else {
    getSuccessFor(cardNumber);
  }
}

function validateCardDate() {
  const cardExpirationDateValue = cardExpirationDate.value;
  const cardExpirationDateFormatted = new Date(cardExpirationDateValue);
  const todayDate = new Date();

  if (
    cardExpirationDateValue.trim() === "" ||
    cardExpirationDateFormatted < todayDate
  ) {
    getErrorFor(cardExpirationDate, "Expiration date is not valid");
  } else {
    getSuccessFor(cardExpirationDate);
  }
}

function validateCardCVV() {
  const cardCvvNumberValue = cardCvvNumber.value;

  if (cardCvvNumberValue.trim() === "") {
    getErrorFor(cardCvvNumber, "CVV cannot be empty");
  } else {
    getSuccessFor(cardCvvNumber);
  }
}

function finalizeForm() {
  clearInputs();
  showAlert();
  removeAllValidationClasses();
  clearAllErrors();
}

function clearInputs() {
  form.reset();
}

export default function validateInputs() {
  validateCardName();
  validateCardNumber();
  validateCardDate();
  validateCardCVV();
}

export {
  validateCardName,
  validateCardNumber,
  validateCardDate,
  validateCardCVV,
  finalizeForm,
};
