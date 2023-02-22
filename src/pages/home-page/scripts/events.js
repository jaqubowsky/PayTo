const form = document.getElementById("mainForm");
const cardCvvNumber = document.getElementById("cardCvvNumber");
const cardNumber = document.getElementById("cardNumber");
const allInputs = document.querySelectorAll("input");

import validateInputs from "./form-validation";

import {
  validateCardCVV,
  validateCardDate,
  validateCardName,
  validateCardNumber,
  finalizeForm,
} from "./form-validation";

export const events = (function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();

    const hasInvalidInputs = form.querySelector(".invalid") ? true : false;

    if (hasInvalidInputs) return;

    finalizeForm();
  });

  allInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.name === "name-on-card") validateCardName();
      if (input.name === "card_number") validateCardNumber();
      if (input.name === "card_expiration_date") validateCardDate();
      if (input.name === "cvv_number") validateCardCVV();
    });
  });

  cardCvvNumber.addEventListener("input", (e) => {
    const target = e.target;

    cardCvvNumber.value = cardCvvNumber.value.replace(/[e\+\-]/gi, "");

    if (target.value.length > target.maxLength)
      target.value = target.value.slice(0, target.maxLength); // prevents from more than 3 numbers
  });

  cardNumber.addEventListener("input", () => {
    cardNumber.value = cardNumber.value.replace(/[e\+\-]/gi, ""); // prevents from "e, -, +" signs in input
  });
})();
