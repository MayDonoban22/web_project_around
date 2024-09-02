import { resetValidation, settings } from "./validate.js";
const popup = document.querySelector(".popup");

const editButton = document.querySelector(".content__edit-button");
const name = document.querySelector(".content__name");
const profession = document.querySelector(".content__profession");
const updateButton = document.querySelector(".popup__update");
editButton.addEventListener("click", function () {
  popup.classList.add("popup_show");

  let inputList = popup.querySelectorAll("input");
  inputList[0].value = name.textContent;
  inputList[1].value = profession.textContent;
});

updateButton.addEventListener("click", function (event) {
  event.preventDefault();
  let inputList = popup.querySelectorAll("input");
  name.textContent = inputList[0].value;
  profession.textContent = inputList[1].value;
  popup.classList.remove("popup_show");
});

const closeButton = document.querySelector(".popup__close");

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_show");
  resetValidation(settings);
});

let formInput = document.querySelector(".popup__edit-profile");

function updateDetails() {}

const popupPlus = document.querySelector(".popup__plus");

const plusButton = document.querySelector(".content__plus-button");
const formButton = document.querySelector(".form__update");
let closeFormButton = popupPlus.querySelector(".form__close");
plusButton.addEventListener("click", function () {
  popupPlus.classList.add("form__show");
});

closeFormButton.addEventListener("click", function () {
  popupPlus.classList.remove("form__show");
  resetValidation(settings);
});
formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const card = document.querySelector(".content__element").cloneNode(true);
  card.classList.remove("content__element-template");
  const cardContainer = document.querySelector(".content__elements");
  let inputList = popupPlus.querySelectorAll("input");
  const image = card.querySelector(".content__element-picture");
  const title = card.querySelector(".content__description-text");
  const trashIcon = card.querySelector(".content__bin");
  image.src = inputList[1].value;
  title.textContent = inputList[0].value;
  const likeButtons = card.querySelector(".content__description-like");
  likeButtons.addEventListener("click", () => likeHearth(likeButtons));
  cardContainer.prepend(card);
  trashIcon.addEventListener("click", () => handleDelete(card));
  popupPlus.classList.remove("form__show");
  image.addEventListener("click", function () {
    openPopupImage(inputList[0].value, inputList[1].value);
  });
});
const handleDelete = (card) => {
  card.remove();
};

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

const likeHearth = (likeButtons) => {
  likeButtons.classList.toggle("content__description-like-focus");
};
const handleDeleteButton = (card) => card.remove();
const cardTemplate = document.querySelector(".content__element");
const cardContainer = document.querySelector(".content__elements");
initialCards.forEach(({ link, name }) => {
  const card = cardTemplate.cloneNode(true);
  card.classList.remove("content__element-template");

  const image = card.querySelector(".content__element-picture");
  const title = card.querySelector(".content__description-text");
  const trashIcon = card.querySelector(".content__bin");
  const likeButtons = card.querySelector(".content__description-like");

  image.src = link;
  title.textContent = name;

  likeButtons.addEventListener("click", () => likeHearth(likeButtons));
  trashIcon.addEventListener("click", () => handleDelete(card));

  cardContainer.prepend(card);
  image.addEventListener("click", function () {
    openPopupImage(name, link);
  });
});

const popupImage = document.querySelector("#popup-image");
const popupImageSrc = document.querySelector(".popup__picture-src");
const popupImageTitle = document.querySelector(".popup__picture-title");
const popupImageClose = popupImage.querySelector(".popup__close");

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
  console.log("error");
});

const overlay = document.querySelectorAll(".popup__overlay");
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
