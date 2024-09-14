// const showInputError = (formElement, inputElement, errorMessage, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
// };

// const hideInputError = (formElement, inputElement, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showInputError(
//       formElement,
//       inputElement,
//       inputElement.validationMessage,
//       settings
//     );
//   } else {
//     hideInputError(formElement, inputElement, settings);
//   }
// };
// const form = document.querySelector("#form-profile");
// const formPlace = document.querySelector("#form-place");
// const btn = document.querySelector("#btn");

// function toggleButtonState(inputList, formButton) {
//   if (!hasInvalidInput(inputList)) {
//     formButton.removeAttribute("disabled");
//     formButton.classList.remove("popup__update-disabled");
//   } else {
//     formButton.setAttribute("disabled", true);
//     formButton.classList.add("popup__update-disabled");
//   }
// }

// const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(settings.inputSelector)
//   );
//   const formButton = formElement.querySelector(".popup__update");
//   console.log(formButton);
//   toggleButtonState(inputList, formButton);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, formButton);
//     });
//   });
// };

// const enableValidation = (settings) => {
//   const formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     setEventListeners(formElement, settings);
//   });
// };

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// const settings = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__item",
//   submitButtonSelector: ".popup__update",
//   inactiveButtonClass: "popup__update_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// enableValidation(settings);

// const resetValidation = (settings) => {
//   const formReset = Array.from(
//     document.querySelectorAll(settings.formSelector)
//   );
//   formReset.forEach((formElement) => {
//     formElement.reset();
//     const inputList = Array.from(
//       formElement.querySelectorAll(settings.inputSelector)
//     );
//     const formButton = formElement.querySelector(".popup__update");
//     toggleButtonState(inputList, formButton);
//     inputList.forEach((inputElement) => {
//       hideInputError(formElement, inputElement, settings);
//     });
//   });
// };

// export { resetValidation, settings };
