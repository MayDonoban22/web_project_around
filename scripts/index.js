import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { form, formPlace } from "./ utils.js";
// import { resetValidation } from "./validate.js";

// const popup = document.querySelector(".popup");

// const editButton = document.querySelector(".content__edit-button"); //#1
// const name = document.querySelector(".content__name");
// const profession = document.querySelector(".content__profession");
// const updateButton = document.querySelector(".popup__update"); //#2
// editButton.addEventListener("click", function () {
//   popup.classList.add("popup_show");

//   let inputList = popup.querySelectorAll("input");
//   inputList[0].value = name.textContent;
//   inputList[1].value = profession.textContent;
// });

// updateButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   let inputList = popup.querySelectorAll("input");
//   name.textContent = inputList[0].value;
//   profession.textContent = inputList[1].value;
//   popup.classList.remove("popup_show");
// });

// const closeButton = document.querySelector(".popup__close"); //#3

// closeButton.addEventListener("click", function () {
//   popup.classList.remove("popup_show");
//   resetValidation(settings);
// });

// let formInput = document.querySelector(".popup__edit-profile");

// function updateDetails() {}

const popupPlus = document.querySelector(".popup__plus");

const plusButton = document.querySelector(".content__plus-button");
const formButton = document.querySelector(".form__update");
let closeFormButton = popupPlus.querySelector(".form__close");
plusButton.addEventListener("click", function () {
  popupPlus.classList.add("form__show");
});

closeFormButton.addEventListener("click", function () {
  popupPlus.classList.remove("form__show");
});
formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  let inputList = popupPlus.querySelectorAll("input");
  const card = new Card(inputList[0].value, inputList[1].value, openPopupImage);
  console.log(card);
  cardContainer.prepend(card.createCard());
});

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const cardContainer = document.querySelector(".content__elements");
initialCards.forEach(({ link, name }) => {
  const card = new Card(name, link, openPopupImage);
  console.log(card);
  cardContainer.prepend(card.createCard());
});

const popupImage = document.querySelector("#popup-image");
const popupImageSrc = document.querySelector(".popup__picture-src");
const popupImageTitle = document.querySelector(".popup__picture-title");
const popupImageClose = popupImage.querySelector(".popup__close"); //#8

function openPopupImage(title, link) {
  popupImage.classList.add("popup_show");
  popupImageTitle.textContent = title;
  popupImageSrc.src = link;
}
popupImageClose.addEventListener("click", () => {
  popupImage.classList.remove("popup_show");
});

function closeFormProfile(evt) {
  const form = document.querySelector("#popup-profile");
  closeEsc(evt, form);
}

function closeFormPlace(evt) {
  const formPlace = document.querySelector("#popup-place");
  closeEsc(evt, formPlace);
}

function closeCard(evt) {
  const card = document.querySelector("#popup-image");
  closeEsc(evt, card);
}

const closeEsc = (evt, elemnt) => {
  if (evt.key === "Escape") {
    elemnt.classList.remove("popup_show");
    elemnt.classList.remove("form__show");
  }
};
document.addEventListener("keydown", (evt) => {
  closeFormPlace(evt);
  closeFormProfile(evt);
  closeCard(evt);
});

const overlay = document.querySelectorAll(".popup__overlay"); //#9
overlay.forEach((item) => {
  item.addEventListener("click", () => {
    const form = document.querySelector("#popup-profile");
    const formPlace = document.querySelector("#popup-place");
    const card = document.querySelector("#popup-image");
    form.classList.remove("popup_show");
    formPlace.classList.remove("form__show");
    card.classList.remove("popup_show");
  });
});

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__update",
  inactiveButtonClass: "popup__update_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validationProfile = new FormValidator(form, settings);
validationProfile.enableValidation();

const validationFormPlace = new FormValidator(formPlace, settings);
validationFormPlace.enableValidation();
