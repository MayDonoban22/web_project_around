import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  form,
  formPlace,
  profileName,
  profileAbout,
  initialCards,
  settings,
} from "../components/ utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";

const templateSelector = document.querySelector("template");
const editButton = document.querySelector(".content__edit-button");
const plusButton = document.querySelector(".content__plus-button");

const userProfile = new UserInfo(profileName, profileAbout);
const popupProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  userProfile.setUserInfo(inputValues.name, inputValues.about);
});

const popupAddCard = new PopupWithForm("#popup-place", (inputValues) => {
  const card = new Card(
    inputValues.title,
    inputValues.link,
    () => {
      popupShowImage.open(inputValues.title, inputValues.link);
    },
    templateSelector
  );
  sectionCard.addFirst(card.createCard());
});
const popupShowImage = new PopupWithImage("#popup-image");

const sectionCard = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        () => popupShowImage.open(item.name, item.link),
        templateSelector
      );
      sectionCard.addItem(card.createCard());
    },
    items: initialCards,
  },
  ".content__elements"
);

popupAddCard.setEventListeners();
popupProfile.setEventListeners();

popupShowImage.setEventListeners();

editButton.addEventListener("click", () => popupProfile.open());
plusButton.addEventListener("click", () => popupAddCard.open());

const validationProfile = new FormValidator(form, settings);
validationProfile.enableValidation();

const validationFormPlace = new FormValidator(formPlace, settings);
validationFormPlace.enableValidation();

sectionCard.render();
