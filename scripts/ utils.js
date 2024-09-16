const popup = document.querySelector(".popup");
const profession = document.querySelector(".content__profession");
const name = document.querySelector(".content__name");

const popupImage = document.querySelector("#popup-image");
const editButton = document.querySelector(".content__edit-button");
export const form = document.querySelector("#popup-profile");
export const formPlace = document.querySelector("#popup-place");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_show");

  let inputList = popup.querySelectorAll("input");
  inputList[0].value = name.textContent;
  inputList[1].value = profession.textContent;
});

const updateButton = document.querySelector(".popup__update");
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
});

const popupPlus = document.querySelector(".popup__plus");

const plusButton = document.querySelector(".content__plus-button");
plusButton.addEventListener("click", function () {
  popupPlus.classList.add("form__show");
});

const closeFormButton = popupPlus.querySelector(".form__close");
closeFormButton.addEventListener("click", function () {
  popupPlus.classList.remove("form__show");
});

const popupImageClose = popupImage.querySelector(".popup__close");
popupImageClose.addEventListener("click", () => {
  popupImage.classList.remove("popup_show");
});

const overlay = document.querySelectorAll(".popup__overlay");
overlay.forEach((item) => {
  item.addEventListener("click", () => {
    const card = document.querySelector("#popup-image");
    form.classList.remove("popup_show");
    formPlace.classList.remove("form__show");
    card.classList.remove("popup_show");
  });
});
